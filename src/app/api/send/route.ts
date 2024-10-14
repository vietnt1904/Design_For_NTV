import { EmailTemplate } from "@/app/components";
import { NextRequest } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const value = await streamToString(req.body);
    const { data, error } = await resend.emails.send({
      from: "Sunflower <onboarding@resend.dev>",
      to: ["ptkl2053@gmail.com"],
      subject: "Đã có tin nhắn mới!",
      react: EmailTemplate({ data: value }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}

async function streamToString(stream: any) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf8");
}
