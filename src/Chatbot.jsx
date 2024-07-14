import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [suite, setSuite] = useState(false);
  // const [suitee, setSuitee] = useState(false);

  const predefinedAnswers = {
    hello: "Hi there! How can I help you today?",
    help: "Sure, I am here to help. What do you need assistance with?",
    react: "React is a JavaScript library for building user interfaces.",
    tailwind:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    reclammation: <p>Je ne sais pas</p>,
    //   "S'il s'agit d'une reclammation, vous pourriez vous rapprocher de nos agents ",
    oui: (
      <p>
        Vous souhaitez un contrat{" "}
        <button
          onClick={() => setSuite(true)}
          className="text-white bg-red-600 p-1"
        >
          CDD
        </button>{" "}
        <button
          // onClick={setSuitee(true)}
          className="text-white bg-green-600 p-1"
        >
          CDI
        </button>
      </p>
    ),
  };

  const handleSend = () => {
    if (input.trim() !== "") {
      const userMessage = input.trim();
      setMessages([...messages, { sender: "user", text: userMessage }]);
      setInput("");

      // Find a predefined answer based on keywords
      const response = Object.keys(predefinedAnswers).find((key) =>
        userMessage.toLowerCase().includes(key)
      );

      if (response) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: predefinedAnswers[response] },
          ]);
        }, 3000);
      } else {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", text: "I'm sorry, I don't understand that." },
          ]);
        }, 2000);
      }
    }
  };

  return (
    <div class="chatbot">
      <div class="header-chatbot"></div>
      <div class="body-chatbot">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg mb-2 ${
              message.sender === "user"
                ? "bg-blue-500 mt-2 w-9/12 ml-20 right-0 text-white self-end text-right"
                : "bg-gray-300 w-9/12 ml-2 self-start text-left"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>

      <div className=" h-9 flex content-center m-3">
        <input
          type="text"
          className="flex-grow p-2 w-[150px] border rounded-lg mr-2 h-9"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          className="p-2 h-[100%] text-center bg-green-500 text-white rounded-lg"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
