import "./App.css";
import Expenses from "./components/Expenses";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="h-full w-full">
      <Navbar />
      <Form />
      <Expenses />
    </main>
  );
}

export default App;
