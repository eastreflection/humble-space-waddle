import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";

function App() {
  let todos = [
    {
      sno:1,
      title: "Go to the market",
      desc:"To buy Vegetables"
    },
    {
      sno:2,
      title: "Go to the mall",
      desc:"To buy  Clothes"
    },
    {
      sno:3,
      title: "Go to the Shop",
      desc:"To buy Medicines"
    }
  ]
  return (
    <>
    <Header title="My Todo List"/>
    <Todos todos={todos}/>
    <Footer/>
    </>
  )
}

export default App;


