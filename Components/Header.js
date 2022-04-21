import Btn from "./Btn";
import Social from "./SocialNetwork";

const Header = () => {
    return ( 
       <header>
            <div className="container header_container">
                <h5>Hello je suis</h5>
                <h1>BAH Abdoul Rahim</h1>
                <h5>Développeur Fullstack</h5>
                
                <Btn/>
                <div className="scroll">
                    <a href="#Contact"> Scorll Down </a>
                </div>
                <div className="me">

                </div>
                
                <Social/>
                
            </div>
        </header>
     );
}
 
export default Header;