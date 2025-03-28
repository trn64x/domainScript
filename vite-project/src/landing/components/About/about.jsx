import arrow from "./arrow.svg";
import './about.css';
import { motion, useScroll,} from "motion/react"; // eslint-disable-line no-unused-vars
import font from "../fonts/pixel.ttf";
import {useRef} from 'react';
export default function About(){
    const ref = useRef(null);
    return(
        <>
        <section ref={ref}id="About">
            <motion.div className='headline'
            initial={{scale:0,visibility:"hidden"}}
            transition={{duration:0.75, ease:[0,0.71,0.2,1.01]}}
            whileInView={
                {scale:1, visibility:"visible"}
            }
            
            viewport={{root:ref}}><div>Welcome to my</div> <div style={{     paddingLeft: "20px",
                background: "linear-gradient(90deg, #39ff6e,#00ff9d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
                }}>Digital Playground</div></motion.div>
            <motion.div className='about'
            initial={{scale:0,visibility:"hidden"}}
            transition={{duration:0.75, ease:[0,0.71,0.2,1.01]}}
            whileInView={
                {scale:1, visibility:"visible"}
            }
            
            viewport={{once:true}}>
                <div className="left" style={{fontFamily: font, textShadow: "-9px 9px 0px rgb(0, 0, 0)",}}><div id="underline">&lt;Maciej Potrz&gt;</div>
                    <p>
                    I'm a 17-year-old programmer from Poland. I've been programming since 2023,
                    </p>
                    <p>mostly focusing on mobile apps, websites, and mathematical algorithms.</p>
                </div>
                <div className="container">
                <div className="right">
                    <p id="bef">I'm super happy to be where I am now, and for 2 years of programming I have managed to achieve:</p>
                    <ul>
                    <li><p>Hours of programming: <span id="highlight">500+</span></p></li>
                    <li><p>Experienced: <span id="highlight">15+</span>languages</p></li>
                    <li><p>Projects Completed: <span id="highlight">41</span></p></li>
                    <li><p>Syntax errors: <span id="highlight">[Integer out of range]</span></p></li>
                    </ul>
                </div>
                
                </div>
                <div id="port"><a id="strzalka" href="#Portfolio"><div id="mp">My Portfolio <img id='arrow' src={arrow}></img></div></a></div>
            </motion.div>
        </section>
        </>
    );
}