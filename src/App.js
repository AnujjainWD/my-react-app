import './App.css'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Services from './component/Services'

import PageNotFound from './component/PageNotFound'



import './component/css/style.css'
// import Header from './component/layouts/Header'
import { Route,Routes } from 'react-router-dom'
// import { Route, Routes } from "react-router-dom"



const App = () => {
    return (
        <>
        <Routes>
            {/* <Route path ="/header" element={<Header/>}/> */}
            <Route path ="/" element={<Home/>}/>

            <Route path ="/about" element={<About/>}/>
            <Route path ="/contact" element={<Contact/>}/>
            <Route path ="/services" element={<Services/>}/>

            {/* page not found always write in down */}
            <Route path ="*" element={<PageNotFound/>}/>




        </Routes>
        
        </>

    )
}

export default App
