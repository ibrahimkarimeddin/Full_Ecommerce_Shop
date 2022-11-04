import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { PrivateRoutes } from "./PrivateRoutes";

   

  export const AppRoute =()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<PrivateRoutes /> }>
              <Route element={<App /> } path="/" />
 
            </Route>
            
        </Routes>
        </BrowserRouter>
        
    )
  }