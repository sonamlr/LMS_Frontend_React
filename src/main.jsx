// component 
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
// css
import './index.css'
//library
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
         <App />
         <Toaster />
    </BrowserRouter>
   
 
)
