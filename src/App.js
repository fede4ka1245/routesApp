import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import User from "./pages/User";
import Users from "./pages/Users";
import Friends from "./pages/Friends";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<> root </>} />
          <Route path="/posts" element={<> posts </>} />
          <Route path="/posts/:id" element={<> users </>} />
          <Route path="/users/" element={<Users />} />
          <Route path="/users/:id" element={<User />} />
          <Route path="/friends/" element={<Friends />} />
          <Route path="*" element={<> 404 </>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App