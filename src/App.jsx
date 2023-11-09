import "./App.css";
import Expenses from "./components/Expenses";
import Form from "./components/Form";

function App() {
  return (
    <section className="h-screen w-full">
      <Form />
      <Expenses />
    </section>
  );
}

export default App;
