import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
// react tostify
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* now we can use toast container anywhere */}
<ToastContainer/> 
<Header/>
<About/>
<Projects/>
<Testimonials/>
<Contact/>
<Footer/>
    </>
  )
}

export default App
