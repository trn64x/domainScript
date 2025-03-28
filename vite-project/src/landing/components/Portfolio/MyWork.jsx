
import { useRef, useState } from "react";
import './MyWork.css';
import { motion, useScroll,} from "motion/react"; // eslint-disable-line no-unused-vars
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
export default function MyWork() {
    let projects = [
        {
            name: "Blackjack",
            date: "2025-03-25",
            description:"React project of well known BlackJack",
            link:"https://blackjack.mpotrz.pl",
            featured: true,
            language: "React"
        },
        {
            name: "To Do App",
            date: "2024-06-10",
            description: "simple to-do app made at begining of my journey",
            link: "https://trn64x.github.io/to-do-List/todo.html",
            featured: false,
            language: "React"
        },
        {
            name: "Object Doors",
            date: "2025-07-26",
            description:"I was playing around with object javascript in React",
            link:"https://objectdoors.maciekp371.workers.dev",
            featured: true,
            language: "React"
        },
        {
            name:"Python Graph",
            date: "2025-08-25",
            description:"Ever was wondering about powers on numbers? didn't too",
            link:"https://github.com/trn64x/PythonGraph",
            featured: true,
            language: "Python"
        },
        {
            name:"Hangman",
            date:"2025-03-27",
            description:"Hangman is popular word guessing game",
            link:"https://hangman.maciekp371.workers.dev",
            featured:true,
            language:"Typescript"
        },
        {
            name:"Choinka",
            date:"2024-11-24",
            description:"funny project for mr. Soppa before christmas",
            featured:false,
            language:"Javascript"
        }

    ];
    const [search, setSearch] = useState("");
    const [sortOrder, setSortOrder] = useState("date");
    const[selectedLanguage, setSelectedLanguage] = useState("any");

    // Filtering projects based on search
    let filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(search.toLowerCase())
    );
    if(selectedLanguage !== "any"){
        console.log(selectedLanguage);
        filteredProjects = filteredProjects.filter( project=> project.language === selectedLanguage)
    }
    // Sorting projects by date
    filteredProjects.sort((a, b) => {
        if(sortOrder === "date") return
        if(sortOrder === "Newest") return b.date.localeCompare(a.date) 
        if(sortOrder === "Oldest") return a.date.localeCompare(b.date)
    });
    const ref = useRef(null);
    return (
        
       <div ref={ref} id="Portfolio">
            <div className="buttons">
                <h1>Search</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => {setSearch(e.target.value)}}
                />
                <h1>Filters</h1>
                <div className="containerfilters">
                    
                <select onChange={(e) => {setSortOrder(e.target.value)}}>
                    <option value="date">Date</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
                <select onChange={(e) => {setSelectedLanguage(e.target.value)}}>
                    <option value="any">Language</option>
                    <option value="React">React</option>
                    <option value="Python">Python</option>
                    <option value="Typescript">Typescript</option>
                    <option value="Javascript">Javascript</option>
                </select>
                </div>
                <h1>Contact me</h1>
                <div className="containerfilters">
                <p id='contact'>In case of any questions, or any bugs on the website feel free to pick any of my contact ways on header section</p>
                </div>
            </div>

             <motion.div className="flex"
        initial={{scale:0.5,visibility:"hidden"}}
        transition={{duration:0.75, ease:[0,0.71,0.2,1.01]}}
        whileInView={
            {scale:1, visibility:"visible"}
        }
        
        viewport={{root: ref}}>
                {filteredProjects.map((project, index) => (
                    <div key={index} className="item">
                        <div className="l">
                        <p id="a2"><FontAwesomeIcon icon={faCalendar} flip="horizontal" style={{ marginRight:"10px",color: "#00FF99" }} />{project.date}</p>
                        <p id= "a1"><FontAwesomeIcon icon={faPaperPlane} style={{marginRight:"10px", color: "#00FF99",}} />{project.name}</p>
                        <p id="a3">{project.description}</p>
                        </div>
                        <div className="r"><button> <a href= {project.link}>Project Link</a></button></div>
                    </div>
                ))}
                </motion.div>
        </div>
    );
}
