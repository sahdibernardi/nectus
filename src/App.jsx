import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './style/homepage.css'
import './style/footer.css'
import './style/header.css'
import './style/articles.css'
import './style/forms.css'
import './style/contact.css'

import Homepage from './pages/Homepage'
import People from './pages/People'
import Professionals from './pages/Professionals'
import Companies from './pages/Companies'

function App() {
  return (
    <>
      <BrowserRouter>
       <Routes>
           <Route Component = { Homepage }  path="/" exact />
           <Route Component = { People }  path="/for-people"/>
           <Route Component = { Professionals }  path="/for-professionals" />
           <Route Component = { Companies }  path="/for-companies" />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
