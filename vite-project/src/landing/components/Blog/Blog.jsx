import "./Blog.css";
import { motion, useScroll,} from "motion/react"; // eslint-disable-line no-unused-vars
import  NotFound  from '../header/images/nf.svg';
export default function Blogsite(){
return(
    <motion.div className='container-blog'
    initial={{scale:0,visibility:"hidden"}}
    transition={{duration:0.75, ease:[0,0.71,0.2,1.01]}}
    whileInView={
        {scale:1, visibility:"visible"}
    }
    
    viewport={{once:true}}>
    <div id="Blog">#BLOG</div>
    <div className="fluid">
        <div className="coming">
        <img src={ NotFound }></img>
        <p>Coming Soon...</p>
        </div>
    </div>
    </motion.div>
);
}