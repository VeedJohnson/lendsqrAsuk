import LoginForm from "./components/login";
import Header from "./components/header";
import { BrowserRouter as Router, Routes , 
  Route} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/first" element={<Header />}/>
        <Route path="/" element={<LoginForm />}/>
      </Routes>
    </Router>
    </>
      
    
  );
}

export default App;
