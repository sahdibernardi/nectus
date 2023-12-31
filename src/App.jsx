import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './style/homepage.css'
import './style/footer.css'
import './style/header.css'
import './style/articles.css'
import './style/forms.css'
import './style/contact.css'
import './style/pageNotFound.css'
import './style/privacyBanner.css'

import Homepage from './pages/Homepage'
import People from './pages/People'
import Professionals from './pages/Professionals'
import Companies from './pages/Companies'
import PageNotFound from './pages/PageNotFound'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

function App() {
  return (
    <>
      <BrowserRouter future={{ v7_startTransition: true }}>
       <Routes>
           <Route Component = { Homepage }  path="/" exact />
           <Route Component = { People }  path="/for-people"/>
           <Route Component = { Professionals }  path="/for-professionals" />
           <Route Component = { Companies }  path="/for-companies" />
           <Route Component = { Privacy }  path="/privacy" />
           <Route Component = { Terms }  path="/terms" />
           <Route path="*" Component={PageNotFound} />
           <Route Component={PageNotFound} />
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
