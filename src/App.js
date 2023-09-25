import './App.css';
import { Header } from "./MyComponents/Header";
import Login from "./MyComponents/Login";
import Organization_dash from './MyComponents/Organization_dash';
import Dashboard from './Pages/Dashboard'



function App() {
  return (
    <>
      <div style={{ backgroundColor: '#f8f8f8', minHeight:'100vh' }}>
        <Header title="SIH" />
        {/* <Login/> */}
        {/* <Organization_dash /> */}
        <Dashboard />
      </div>
    </>
  );
}

export default App;