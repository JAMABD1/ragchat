import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
    const { messages } = await req.json();
  
    const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama3-70b-8192',
        messages, // 
      }),
    });
  
    const data = await res.json();
    return NextResponse.json({ response: data.choices[0].message });
  }