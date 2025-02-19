import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import sendBtn from "./assets/send.svg";
import userIcon from "./assets/userr.png";
import gptImgLogo from "./assets/chatgptLogo.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" className="logo" />
            <span className="brand">ChatGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is programming ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItem">
            <img src={home} alt="Home" className="listItemImg" />
            Home
          </div>
          <div className="listItem">
            <img src={saved} alt="Saved" className="listItemImg" />
            Saved
          </div>
          <div className="listItem">
            <img src={rocket} alt="Upgrade" className="listItemImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt="User" className="chatImg" />
            <p className="txt">
              I'm curious to know more about React. What exactly is React, and
              why is it considered such a powerful and popular tool for building
              modern web applications? Could you explain its core features, how
              it enhances performance, and why so many developers prefer it over
              other frameworks and libraries?
            </p>
          </div>
          <div className="chat bot">
            <img src={gptImgLogo} alt="" className="chatImg " />
            <p className="txt">
              React is a popular JavaScript library used for building user
              interfaces, particularly for single-page applications where
              dynamic content needs to be updated frequently without reloading
              the entire page. It allows developers to create reusable UI
              components, making development more efficient and scalable. React
              uses a virtual DOM (Document Object Model) to optimize rendering
              performance by only updating the parts of the web page that have
              changed, rather than re-rendering the entire page. This results in
              faster user interactions and better overall performance. React is
              widely used in web development due to its flexibility, strong
              community support, and compatibility with various development
              tools and frameworks.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message.." />
            <button className="send">
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>ChatGPT may produce incorrect results. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
