import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post-list-store";

import "./App.css";
import PostList from "./components/PostLIst";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></SideBar>
        <div className="main-content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}
export default App;
