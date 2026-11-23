import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const REGION = "us-east-2";
const SENDER = "IAMAI Website <noreply@iamai.tools>";
const RECIPIENTS = ["briian@iamai.tools", "aryan@iamai.tools"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const recentByIp = new Map();

const ses = new SESv2Client({ region: REGION });

function isRateLimited(ip) {
  const now = Date.now();
  const recent = (recentByIp.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  recentByIp.set(ip, recent);
  return recent.length > MAX_PER_WINDOW;
}

export async function POST(request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill the hidden "website" field.
  if (body.website) {
    return Response.json({ ok: true });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0].trim() || "unknown";
  if (isRateLimited(ip)) {
    return Response.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const company = String(body.company || "").trim();
  const service = String(body.service || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !service || !message || !EMAIL_RE.test(email)) {
    return Response.json({ error: "Please complete all required fields." }, { status: 400 });
  }
  if (message.length > 5000 || name.length > 200 || company.length > 200) {
    return Response.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "-"}`,
    `Interested in: ${service}`,
    "",
    message,
  ].join("\n");

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: SENDER,
        Destination: { ToAddresses: RECIPIENTS },
        ReplyToAddresses: [email],
        Content: {
          Simple: {
            Subject: { Data: `New inquiry: ${service}` },
            Body: { Text: { Data: text } },
          },
        },
      })
    );
  } catch (err) {
    console.error("SES send failed", err);
    return Response.json({ error: "Could not send your message." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
