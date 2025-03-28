import "./Blog.css";
import { motion, useScroll,} from "motion/react"; // eslint-disable-line no-unused-vars
import  NotFound  from '../header/images/nf.svg';
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
    <div class="Blog">#BLOG</div>
    <div className="fluid">
        <div className="coming">
        <img src={ NotFound }></img>
        <p>Coming Soon...</p>
        </div>
    </div>
    </motion.div>
    </section>
);
}