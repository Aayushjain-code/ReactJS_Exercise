
import './App.css';
import TwitterCounter from './Exercises/TwitterCounter/index.js';
import PasswordChecker from './Exercises/PasswordChecker/index.js';
import AlphanumericPassword from './Exercises/AlphanumericPassword/index.js';
import DisableSubmit from './Exercises/DisableSubmit/index.js';
import ShowHide from './Exercises/ShowHide/index.js';
import DesignerTool from './Exercises/DesignerTool/index.js';
import AddToCart from './Exercises/AddToCart/index.js';
import ToastExample from './Exercises/ToastExample/index.js';
import SwitchTabs from './Exercises/SwitchTabs/index.js';
import ToDoListTask from './Exercises/ToDoListTask/index.js';
import DarkLight from './Exercises/DarkLight/index.js';
import LikeList from './Exercises/LikeList/index.js';


import Header from './Components/Header/Header';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App" >
      {/* <ToDoListTask /> */}
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
          <Route path="/ToastExample" element={<ToastExample />} />
          <Route path="/SwitchTabs" element={<SwitchTabs />} />
          <Route path="/ToDoListTask" element={<ToDoListTask />} />
          <Route path="/DarkLight" element={<DarkLight />} />
          <Route path="/LikeList" element={<LikeList />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}

    </div>
  );
}



export default App;
