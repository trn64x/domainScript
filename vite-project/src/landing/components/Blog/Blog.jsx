import "./Blog.css";
import Lottie from 'lottie-react'
import { motion, useScroll,} from "motion/react"; // eslint-disable-line no-unused-vars
import  NotFound  from '../header/images/nf.svg';
import Search from "./Animation - 1743603188395.json"
import {useRef} from 'react'
export default function Blogsite(){
    const ref = useRef(null);
return(
    <section id="Blog" ref={ref}>
    <motion.div className='container-blog'
    initial={{scale:0,visibility:"hidden"}}
    transition={{duration:0.75, ease:[0,0.71,0.2,1.01]}}
    whileInView={
        {scale:1, visibility:"visible"}
    }
    
    viewport={{root:ref}}>
    <div className="Blog">#BLOG</div>
    <div className="fluid">
        <div className="coming">
        <Lottie style={{display:"flex", justifyContent:"center", alignItems:"center"}} animationData={Search} loop={true} />
        <p>Coming Soon...</p>
        </div>
    </div>
    <div className="footer"></div>
    </motion.div>
    </section>
);
}