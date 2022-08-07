
import './App.css';
import Headercontainer from './containers/Headercontainer';
// import Login from './component/Login';
// import Logincontainer from './containers/Logincontainer';
import Homecontainer from './containers/Homecontainer';

function App() {
  return (
    <>
      <div >  
        <Headercontainer/>
        <Homecontainer/>
      </div>
    </>
  );
}

export default App;
