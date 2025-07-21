import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  const res = await fetch('https://abdallahjaolaza.app.n8n.cloud/webhook-test/dcc39fae-c10b-4a0b-81c4-ca73bac9e913', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({  message }),
  });

  const data = await res.json();
  return NextResponse.json({ success: true, n8nReply: data.output });
}
