import { useState } from "react";

import "./App.css";

import AuthPage from "./Containers/AuthPage/AuthPage";
import ChatsPage from "./Containers/ChatsPage/ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user: any) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
