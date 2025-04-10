import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Navbar from './Components/Navbar/Navbar';
import Mac from './Components/MacOfficial/Mac.js';

function App() {
  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/Store" element={<Home/>} />
  <Route path="/Mac" element={<Mac/>} />
  </Routes>
  </BrowserRouter>
</>
  );
}

export default App;
