import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './page/components/Navbar'
import App from "./App";
import HomePage from "./page/home/HomePage";
import { PrivateRoutes } from "./PrivateRoutes";

   

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