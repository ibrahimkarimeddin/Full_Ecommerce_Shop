import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './page/components/Navbar'
import HomePage from "./page/home/HomePage";
import { PrivateRoutes } from "./PrivateRoutes";
import './styles/App.css';
import './assets/scss/app.scss'
   

  export const AppRoute =()=>{
    return(
        <BrowserRouter>
        <Navbar /> 
        <Routes>
            <Route element={<PrivateRoutes /> }>
              <Route element={<HomePage /> } path="/" />
 
            </Route>
            
        </Routes>
        </BrowserRouter>
        
    )
  }