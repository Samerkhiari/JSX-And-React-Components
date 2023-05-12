import './App.css';
import Adress from './Component/Profile/Address';
import Photoprof from './Component/Profile/Photo';
import Fullname from './Component/Profile/Fullname';
function App() {
  return (
    <div className="App">
      <Photoprof/>
      <Fullname/>
     <Adress/> 
    </div>
  );
}

export default App;
