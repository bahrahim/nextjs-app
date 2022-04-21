import {AiOutlineHome} from 'react-icons/ai'
import {FiUser} from 'react-icons/fi'
import {FaUniversity} from 'react-icons/fa'
import {RiSuitcaseLine} from 'react-icons/ri'
import {GiSettingsKnobs} from 'react-icons/gi'
import {BiMessageDetail} from 'react-icons/bi'


function Navbar() {
  return (
    <nav className="nav">
        <a href="#"> <AiOutlineHome/> </a>
        <a href="#About"> <FiUser/> </a>
        <a href="#Formation"> <FaUniversity/> </a>
        <a href="#Experiences"> <RiSuitcaseLine/> </a>
        <a href="#Competences"> <GiSettingsKnobs/> </a>
        <a href="#Contact"> <BiMessageDetail/> </a>
    </nav>
  )
}

export default Navbar;