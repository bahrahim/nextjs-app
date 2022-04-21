import {AiFillLinkedin} from 'react-icons/ai';
import {BsGithub} from 'react-icons/bs';
import {BsGlobe} from 'react-icons/bs'


const Social = () => {
    return ( 
        <div className='header_social'>
            <a href="https://www.linkedin.com/in/abdoul-bah-13856542/" target="_blank"> <AiFillLinkedin/> </a>
            <a href="https://github.com/bahrahim" target="_blank"> <BsGithub/> </a>
            <a href="https://www.boubou-coding.eu/" target="_blank"> <BsGlobe/> </a>
        </div>
     );
}
 
export default Social;