
import './App.css';
import TwitterCounter from './Exercises/TwitterCounter/index.js';
import PasswordChecker from './Exercises/PasswordChecker/index.js';
import AlphanumericPassword from './Exercises/AlphanumericPassword/index.js';
import DisableSubmit from './Exercises/DisableSubmit/index.js';
import ShowHide from './Exercises/ShowHide/index.js';
import DesignerTool from './Exercises/DesignerTool/index.js';
import AddToCart from './Exercises/AddToCart/index.js';




import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App" >

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/TwitterCounter" element={<TwitterCounter />} />
          <Route path="/PasswordChecker" element={<PasswordChecker />} />
          <Route path="/AlphanumericPassword" element={<AlphanumericPassword />} />
          <Route path="/DisableSubmit" element={<DisableSubmit />} />
          <Route path="/ShowHide" element={<ShowHide />} />
          <Route path="/DesignerTool" element={<DesignerTool />} />
          <Route path="/AddToCart" element={<AddToCart />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}

    </div>
  );
}



export default App;
{/* <br />
      <h1>Exercises</h1>
      <hr />
      <TwitterCounter />
      <hr />
      <PasswordChecker />
      <hr />
      <AlphanumericPassword />
      <hr />
      <DisableSubmit />
      <hr />
      <ShowHide />
      <hr />
      <DesignerTool />
      <hr /> */}
