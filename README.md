# RAGChat: Retrieval-Augmented Generation Chat Platform

RAGChat is a modern, AI-powered chat platform that lets you upload documents and interact with them using conversational AI. It leverages Retrieval-Augmented Generation (RAG) and integrates with powerful n8n automations for file and message processing.

---

## 🚀 Getting Started

### 1. **Clone the Repository**
```bash
# Clone the repo
https://github.com/your-username/ragchat.git
cd ragchat
```

### 2. **Install Dependencies**
```bash
npm install
```

### 3. **Run the Development Server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use RAGChat.

---

## 📁 Features
- **Upload Documents:** PDF, DOC, DOCX, TXT, CSV, JSON, MD (max 10MB each)
- **Chat with AI:** Ask questions about your uploaded documents
- **Markdown Support:** Answers are rendered with full markdown formatting
- **n8n Integration:** All uploads and chat messages are processed via n8n webhooks
- **Modern UI:** Responsive, dark mode, and beautiful design

---

## 🔗 n8n Webhook Integrations
RAGChat uses the following n8n webhooks for automation and processing:

### 1. **File Upload Webhook**
- **Endpoint:**
  ```
  https://abdallahjaolaza.app.n8n.cloud/webhook-test/e487bed7-8e6e-4af0-85d5-038b09dce16e
  ```
- **Used by:** `/api/upload` route
- **Purpose:** Receives uploaded files (as base64) and metadata for further processing in n8n

### 2. **Chat Message Webhook**
- **Endpoint:**
  ```
  https://abdallahjaolaza.app.n8n.cloud/webhook-test/3452a21e-036f-41c9-a6a6-e3399e014bbd
  ```
- **Used by:** `/api/message` route
- **Purpose:** Receives user chat messages and returns markdown-formatted AI responses

---

## 🛠️ n8n Integrations & Workflows
All n8n workflow files and integration details are available in the [`/n8n`](./n8n) directory of this repository.

- **Browse n8n integrations:** [n8n folder in GitHub](./n8n)
- **How to use:**
  - Import the workflows into your n8n instance
  - Configure credentials and endpoints as needed
  - See the README or docs in `/n8n` for more details

---

## 📝 Usage Guide

### 1. **Uploading Files**
- Click the **Upload Files** button in the chat UI
- Select one or more supported document types (max 10MB each)
- Files are sent to the n8n webhook for processing

### 2. **Chatting with AI**
- Type your question in the chat input
- The message is sent to the n8n webhook, which returns a markdown-formatted answer
- Answers support lists, tables, code, and more (thanks to markdown rendering)

### 3. **Viewing n8n Workflows**
- See the [`/n8n`](./n8n) folder for all workflow files and integration examples

---

## 💡 Customization & Extending
- **Add new n8n workflows** in `/n8n` and update the webhook URLs in `/api/upload` and `/api/message` as needed
- **Change file type/size limits** in `/api/upload/route.ts`
- **Customize markdown rendering** in `src/app/ragchat/page.tsx`

---

## 🤝 Contributing
Pull requests and issues are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) if available.

---

## 📚 Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [n8n Documentation](https://docs.n8n.io/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)

---

## 🏷️ License
MIT (see [LICENSE](./LICENSE))
