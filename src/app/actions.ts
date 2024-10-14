"use server";
import { neon } from "@neondatabase/serverless";

export async function getMessages() {
  const sql = neon(process.env.DATABASE_URL);
  const data = await sql`select * from message order by created_at DESC`;
  return data;
}

export async function postMessage(payload) {
  const sql = neon(process.env.DATABASE_URL);
  const data =
    await sql`INSERT INTO message (name, image, message, message_type)
        VALUES (${payload.name}, ${payload.image}, ${payload.message}, ${payload.message_type});
`;
  return data;
}
