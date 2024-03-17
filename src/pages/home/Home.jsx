import "./home.css";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sdb from "../../components/sdb/Sdb";

export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sdb/>
      </div>
    </>
    
  )
}
