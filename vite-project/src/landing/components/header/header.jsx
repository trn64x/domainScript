import './header.css';
import logo from './images/Linkedin.png';
import gmail from './images/gmail.png';
import github from './images/github.png';
import {useState} from 'react';
export default function Header(){
const [active, setActive] = useState("About me");
    return(
        <>
        <header>
            <div id="logo">mpotrz.pl</div>
            <div id="socials"><a href="https://www.linkedin.com/in/maciekp-potrz-ba6a0b308/"><img id="link" src={logo}></img></a><a href="mailto:maciekp371@gmail.com"><img id="gmail" src= {gmail}></img></a><a href="https://github.com/trn64x"><img id="github" src= {github}></img></a> </div>
            <div id="options">
            <a href="#root" className= { active === "About me" ? "class" : "class"} onClick={() => {setActive("About me");}} >About me</a>
            <a href="#Portfolio" className = {active === "My Work" ? "class" : "class"} onClick={() => setActive("My Work")} >My work</a>
            <a href="#Blog" className = {active === "Blog" ? "class" : "class"} onClick={() => setActive("Blog")} >Blog</a></div>
        </header>
        </>
    );

}