import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file provided' },
        { status: 400 }
      );
    }

    // Check file size (10MB limit)
    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { success: false, error: 'File too large. Maximum size is 10MB.' },
        { status: 400 }
      );
    }

    // Check file type
    const allowedTypes = [
      'text/plain',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/csv',
      'application/json',
      'text/markdown'
    ];

    if (!allowedTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, error: `File type ${file.type} is not supported.` },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    
    // Prepare data for n8n webhook
    const webhookData = {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      uploadTime: new Date().toISOString(),
      fileContent: buffer.toString('base64'), // Send file content as base64
    };

    // Send to n8n webhook
    const webhookUrl = 'https://abdallahjaolaza.app.n8n.cloud/webhook-test/e487bed7-8e6e-4af0-85d5-038b09dce16e';
    
    const webhookResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook response error:', webhookResponse.status, webhookResponse.statusText);
      return NextResponse.json(
        { success: false, error: 'Failed to send file to webhook' },
        { status: 500 }
      );
    }

    const webhookResult = await webhookResponse.json();
    console.log('Webhook response:', webhookResult);

    return NextResponse.json({
      success: true,
      message: 'File uploaded successfully',
      fileName: file.name,
      fileSize: file.size,
      webhookResponse: webhookResult
    });

  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
} 