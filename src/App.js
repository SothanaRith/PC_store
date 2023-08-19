import { BrowserRouter,Route,Routes,RouterProvider,createBrowserRouter } from 'react-router-dom';
import './App.css';
import Center from './page/center';
import Data from './page/data';
import Manage from "./page/user";
import Update from './page/UpdateAdmin';
import PUpdate from './page/ProductUpdate';
import './style2.scss'
import Add from './page/add';
import LoginAdmin from './page/LoginAdmin';
import RegisterAdmin from './page/RegisterAdmin';

const router = createBrowserRouter([
  {
    path: '/center', 
    element: <Center/>,
  },
  {
    path: '/data', 
    element: <Data/>,
  },
  {
    path: '/user', 
    element: <Manage/>,
  },
  {
    path: '/adminUpdate/:id',
    element:<Update/>
  },
  {
    path: '/ProductUpdate/:product_id',
    element:<PUpdate/>
  },
  {
    path: '/Add',
    element:<Add/>
  },
  {
    path: '/',
    element:<LoginAdmin/>
  },
  {
    path: '/RegisterAdmin',
    element:<RegisterAdmin/>
  },

]);


function App() {
  return (
    

    <div className='App'>
      <div className='container'>  
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
