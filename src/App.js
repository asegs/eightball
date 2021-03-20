import './App.css';
import BasicUI from "./Components/BasicUI";
import Eightball from "./Images/eightball.jpg"
function App() {
  return (
    <div className="App">
      <BasicUI image={Eightball}/>
    </div>
  );
}

export default App;
