import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
/*import Post from "./components/post/Post";*/
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Rgst from "./pages/rgst/Rgst";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";

function App() {
  const user=true;
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route 
          exact path="/" 
          element={<Home />} 
        />
        <Route 
          path="/register" 
          element={user?<Home/> : <Rgst />} 
        />
        <Route 
          path="/login" 
          element={user?<Home/> : <Login />} 
        />
        <Route 
          path="/write" 
          element={user?<Write /> : <Rgst />} 
        />
        <Route
          path="/settings" 
          element={user?<Settings /> : <Rgst />} 
        />
        <Route 
          path="/post/:postId" 
          element={<Single />} 
        />
      </Routes>
    </Router>
    
  );
}

export default App;
