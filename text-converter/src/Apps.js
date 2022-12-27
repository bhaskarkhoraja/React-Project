import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
      <Navbar title="TextUtils" />
      <div className="container">
        <Textform title="Convert your text to Uppercase" />
      </div>
    </>
  );
}

export default App;
