import '../App.css'
import MyWork from './components/Portfolio/MyWork';
import Footer from './components/footer/Footer';
import Blogsite from './components/Blog/Blog';
import  Header from './components/header/header';
import { motion, useScroll,} from "motion/react"; // eslint-disable-line no-unused-vars

import About from './components/About/about';
export default function Landing(){
    const {scrollYProgress} = useScroll();
    
return(
    <>
    <motion.div 
    style={{height: 10,width:"100vw", position:"fixed", top: 0,left:0,transformOrigin: "left", backgroundColor:"#00FF99",scaleX: scrollYProgress}}
    />
<Header />
<About />
<hr></hr>
<MyWork/>
<Blogsite></Blogsite>
<Footer></Footer>
</>
);
};