import ProjectCard from "./ProjectCard";
import { useEffect } from "react";


export default function PortfolioPage() {

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.backgroundColor = "#f2f2f2";
        return () => {
            body.style.backgroundColor = ''; // Reset to default background color if needed
        };
    }, []);

    return (
        <div>
        <h1 className="portfolio-header">Check Out My Projects</h1>
    <div className="portfolio-container">
        <ProjectCard 
        projectImage='images/store.png' 
        title="SuperMarket App" 
        firstImage="images/react.png" 
        secondImage="images/node.png" 
        thirdImage="images/mongo.png"
        website="https://jacobs-supermarket.netlify.app/"
        github="https://github.com/JacobEliks/supermarket-frontend"
        />
        <ProjectCard 
        projectImage='images/notebook.png' 
        title='To-Do List' 
        firstImage="images/react.png" 
        website="https://jacobs-to-do.netlify.app/"
        github="https://github.com/JacobEliks/to-do-list"
        />
        <ProjectCard 
        projectImage='images/blog.jpg' 
        title='Blog Website' 
        firstImage="images/python.png" 
        secondImage="images/bootstrap.png"
        website="https://jacob-blog-480513938cd6.herokuapp.com/"
        github="https://github.com/JacobEliks/jacob-blog"
        />
        <ProjectCard 
        projectImage='images/quiz.png' 
        title='Quizzler' 
        firstImage="images/python.png"
        github="https://github.com/JacobEliks/Quizzler" />
        <ProjectCard 
        projectImage='images/game.png' 
        title='Breakout Game' 
        firstImage="images/python.png" 
        github="https://github.com/JacobEliks/Breakout-game" />
      </div>
      </div>
    );
  }