import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Feed from "./pages/feed/Feed"
import Navbar from './components/navbar/Navbar';


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
