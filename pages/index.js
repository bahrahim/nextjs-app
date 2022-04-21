import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import About from './About'
import Competences from './Competences'
import Contact from './Contact'
import Experiences from './Experiences'
import Formation from './Formation'


export default function Home() {
  return (
    <div className="main">
      <Header/>
      <Navbar/>
      <About/>
      <Formation/>
      <Experiences/>
      <Competences/>
      <Contact/>
      <div className='profile'></div>
    </div>
   )
}
