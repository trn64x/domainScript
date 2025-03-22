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
            <div id="socials"><img id="link" src={logo}></img><img id="gmail" src= {gmail}></img><img id="github" src= {github}></img> </div>
            <div id="options">
            <a href="#root" className={ active === "About me" ? "active" : ""} onClick={() => {setActive("About me");}} >About me</a>
            <a href="#Portfolio" className = {active === "My Work" ? "active" : ""} onClick={() => setActive("My Work")} >My work</a>
            <a href="#Blog" className = {active === "Blog" ? "active" : ""} onClick={() => setActive("Blog")} >Blog</a></div>
        </header>
        </>
    );

}