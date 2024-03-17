import "./home.css";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sdb from "../../sdb/Sdb";

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
