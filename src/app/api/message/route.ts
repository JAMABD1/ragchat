import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();
    if (!message || typeof message !== 'string') {
      return NextResponse.json({ success: false, error: 'No message provided' }, { status: 400 });
    }

    const webhookUrl = 'https://abdallahjaolaza.app.n8n.cloud/webhook-test/3452a21e-036f-41c9-a6a6-e3399e014bbd';
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message }),
    });

    if (!webhookResponse.ok) {
      const text = await webhookResponse.text();
      return NextResponse.json({ success: false, error: text }, { status: 500 });
    }

    const webhookResult = await webhookResponse.json();
    return NextResponse.json({ success: true, response: webhookResult });
  } catch (error) {
    console.error('Message webhook error:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
} 