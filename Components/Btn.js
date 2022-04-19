import Image from 'next/image'
//import cv from '../public/cv.pdf'


const Btn = () => {
    return ( 
        <div>
            <a href='#' download className='btn'>Download CV</a>
            <a href="#Contact" className='btn btn-primary'>Contact me</a>

            <Image src='/me.jpg' priority alt='moi' width={300} height={300}/>
        </div>
     );
}
 
export default Btn;