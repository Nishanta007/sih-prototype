import './App.css';
import { Header } from "./MyComponents/Header";
import Login from "./MyComponents/Login";
import Organization_dash from './MyComponents/Organization_dash';
import Dashboard from './Pages/Dashboard'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function App() {
  return (
    <>
      <div style={{ backgroundColor: '#fff', minHeight:'100vh' }}>
        <Header title="SIH" />
        {/* <Login/> */}
        <Organization_dash />
        {/* <Dashboard /> */}
      </div>
    </>
  );
}

export default App;