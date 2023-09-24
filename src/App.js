import './App.css';
import { Header } from "./MyComponents/Header";
import Login from "./MyComponents/Login";
import Details_modal from './MyComponents/Details_modal';
import Organization_dash from './MyComponents/Organization_dash';



function App() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', minHeight:'100vh' }}>
        <Header title="SIH" />
        {/* <Login/> */}
        <Organization_dash />
      </div>
    </>
  );
}

export default App;
