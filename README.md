# REAL-TIME-CHAT-APPLICATION

" COMPANY " : CODECH IT SOLUTIONS

" NAME " : MUDAVATHU NARASIMHA NAIK

" INTERN ID " :CT06DN67

" DOMAIN " :FRONT END DEVELOPMENT

" DURATIIN " : 6 WEEKS

" MENTOR " : NEELA SANTHOSH

Description:

💬 Real-Time Chat Application – Project Description
This Real-Time Chat Application is a responsive, interactive messaging platform developed using React for the frontend and Socket.IO for real-time communication via WebSockets. The goal of this project is to simulate a live group chat experience, where users can exchange messages instantly and efficiently within a browser.

The app allows users to enter their name and join a global chatroom. Once inside, users can send and receive messages in real-time. Every message is timestamped and tagged with the sender’s name to provide context, just like in popular chat platforms such as WhatsApp or Telegram.

The frontend is designed to be clean and user-friendly, with a modern WhatsApp-like layout using HTML and CSS. The interface includes a header, a scrollable chat window, and a fixed input box at the bottom. Messages are dynamically aligned based on whether the current user sent them or not—providing a familiar two-sided chat layout.

To maintain chat history even after a page refresh, messages are also stored in the browser’s localStorage, which ensures a persistent user experience without requiring a backend database. The WebSocket connection is established through a public Socket.IO server, making it easy for multiple users to chat in real time.

The core functionality revolves around Socket.IO events. When a user sends a message, it is emitted to the server and then broadcasted to all connected clients. Each client listens for these messages and updates the chat interface instantly. This two-way communication makes the app feel seamless and synchronous.

This project demonstrates:

Real-time client-server communication using WebSockets

React state management with hooks like useState and useEffect

Basic use of localStorage to retain messages

Modern frontend UI design with responsive CSS

🔧 Technologies Used
React.js – Component-based frontend framework

Socket.IO – WebSocket-based real-time communication

HTML & CSS – For styling, layout, and user experience

LocalStorage API – To persist messages across sessions


OUTPUT:

![Image](https://github.com/user-attachments/assets/bfee6c50-2d29-4040-9453-82cd8a0f4b12)
![Image](https://github.com/user-attachments/assets/aee6bd6b-1d69-4212-8ba0-b3a9a9881b41)
![Image](https://github.com/user-attachments/assets/9bbf636f-e017-4401-b2a0-60603d3a0e1d)



✅ Conclusion
The Real-Time Chat Application effectively showcases the power of modern web technologies to create live, collaborative experiences. It merges the dynamic capabilities of WebSockets with the component-driven structure of React, resulting in a functional and visually engaging real-time messaging platform. This project is an excellent example of how frontend developers can build scalable, interactive UIs using only client-side logic and public APIs.

