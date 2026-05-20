import "./App.css";

import UserProfile from "./components/userProfile";
import FileList from "./components/FileList";
import CommentsPanel from "./components/CommentsPanel";
import NotificationsPanel from "./components/NotificationsPanel";

function App() {

  return (

    <div className="container">

      <h1>
        DesignHub
      </h1>

      <UserProfile />

      <FileList />

      <CommentsPanel
        fileId="file1"
      />

      <NotificationsPanel />

    </div>
  );
}

export default App;
