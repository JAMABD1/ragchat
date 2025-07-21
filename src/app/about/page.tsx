export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold text-center mb-4">About RAGChat</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 text-center mb-10">
        RAGChat is an innovative platform that leverages Retrieval-Augmented Generation to help you interact with your documents and data in a conversational way. Our mission is to make knowledge accessible, interactive, and secure for everyone.
      </p>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 mb-10">
        <h2 className="text-2xl font-bold mb-2 text-blue-600">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-200">
          We believe in empowering users to get instant, accurate answers from their own data. By combining the latest in AI and secure document handling, RAGChat enables seamless, private, and powerful knowledge discovery for individuals and teams.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl font-bold mb-3">
              AJ
            </div>
            <h3 className="text-lg font-semibold">Abdallah Jaolaza</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">Founder & Lead Engineer</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center text-white text-3xl font-bold mb-3">
              AI
            </div>
            <h3 className="text-lg font-semibold">AI Assistant</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">Conversational AI & RAG Specialist</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2 text-blue-700 dark:text-blue-300">Why RAGChat?</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          We are passionate about making AI accessible and useful for real-world document workflows. Whether you are a student, researcher, or business professional, RAGChat is designed to help you get the most out of your data.
        </p>
        <a
          href="/ragchat"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition-colors"
        >
          Try RAGChat Now
        </a>
      </div>
    </div>
  );
}
  