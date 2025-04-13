import React, { useState } from 'react';

const WebDevChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    // Reset messages when closing the chat
    if (isOpen) {
      setMessages([]);
    }
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input };
    const botReply = {
      sender: 'bot',
      text: getWebDevAnswer(input),
    };

    setMessages([...messages, userMsg, botReply]);
    setInput('');
  };

  const getWebDevAnswer = (question) => {
    const q = question.toLowerCase();

    // Greetings / Casual Talk
    if (q.includes("hi") || q.includes("hello") || q.includes("hey")) return "Hey! 👋 How's it going? I'm the WebDev chatbot. How can I assist you today?";
    if (q.includes("how are you")) return "I'm doing great, thank you! How about you? Need help with web development?";
    if (q.includes("what's up") || q.includes("sup")) return "All good! Just coding away. What kind of project are you working on?";
    if (q.includes("thank you") || q.includes("thanks")) return "You're always welcome! 😊";
    if (q.includes("bye")) return "Goodbye 👋. Take care! Come back anytime if you need help.";

    // Website Requests
    if (q.includes("i want a website") || q.includes("need a website")) return "Sure! What type of website are you looking for? A portfolio, business site, ecommerce, or blog?";
    if (q.includes("how much") || q.includes("price")) return "The cost depends on the features. A basic portfolio starts from ₹5k. Share more details, and I can provide an estimate.";
    if (q.includes("can you build")) return "Absolutely! Just share the requirements with me, and I can handle both the design and development.";

    // Tech Answers
    if (q.includes("html")) return "HTML is the backbone of every webpage. It defines the structure using elements like headings, paragraphs, divs, etc.";
    if (q.includes("css")) return "CSS handles the styling: colors, layouts, fonts, responsiveness. Tailwind CSS is a great option for styling!";
    if (q.includes("tailwind")) return "Tailwind CSS is a utility-first framework, very fast and customizable. It's perfect for modern web projects.";
    if (q.includes("react")) return "React is a powerful JavaScript library to build dynamic user interfaces using reusable components.";
    if (q.includes("nextjs")) return "Next.js is a React framework that offers SSR (server-side rendering), static site generation, and more. It’s optimized for performance!";
    if (q.includes("api")) return "APIs act as a bridge between the frontend and backend. You can use REST or GraphQL to interact with data.";
    if (q.includes("database")) return "You can use databases like MongoDB (NoSQL), PostgreSQL (SQL), Firebase, or Supabase depending on your project needs.";

    // Default: Fallback response
    return "Sorry, I don't know the answer to this question. Please fill in your details in the **Contact Us** section and reach out to us for more information. 😊";
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        {isOpen ? 'Close ❌' : '💬 Ask WebDev Bot'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-96 bg-white shadow-2xl rounded-lg mt-4 flex flex-col border border-gray-200 overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="bg-blue-600 text-white px-4 py-2 font-bold">
            WebDev Chatbot
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto text-sm bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`px-4 py-2 rounded-xl max-w-[70%] shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              className="flex-1 border px-2 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Ask a web dev question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WebDevChatbot;
