import { getAuth } from "firebase/auth";
import app  from "./firebase";
import './App.css';
import SignupPage from "./pages/signup.jsx"
import SigninPage from "./pages/signin.jsx";

const auth = getAuth(app);

function App() {
   return (
    <div className="App">
      <SignupPage/>
      <SigninPage/>
    </div>
   )
}

export default App;
