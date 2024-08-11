// component 
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
// css
import './index.css'
//library
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import { Provider } from 'react-redux'
import store from './Redux/store.js'

createRoot(document.getElementById('root')).render(
   <Provider store={store}>
        <BrowserRouter>
                <App />
                <Toaster />
            </BrowserRouter>
    </Provider>
   
 
)
