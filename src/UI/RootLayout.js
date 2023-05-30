import { Outlet } from "react-router-dom";
import MainNavigation from "../Navigate/MainNavigate";
import Footer from "../Footer/Footer";

import imgmes from "../img/facebook-chat-logo-png-19.png";
import LiveChat from "../Popup/Livechat";
import { useState } from "react";

function RootLayout() {
  const [liveChat, setLiveChat] = useState(false);

  function messHandler() {
    setLiveChat(true);
  }
  function offMessHandler() {
    setLiveChat(false);
  }
  return (
    <>
      {liveChat && <LiveChat onClose={offMessHandler} />}
      <MainNavigation />
      <main className="container p-0">
        <Outlet />
      </main>
      <footer className="bg-dark p-5">
        <Footer />
      </footer>
      <div className="mes">
        <img className="aa" src={imgmes} alt="mes" onClick={messHandler} />
      </div>
    </>
  );
}

export default RootLayout;
