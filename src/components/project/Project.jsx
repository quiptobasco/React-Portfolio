import './project.css';
import Project1 from '../../img/music-trivia.png';
import Project2 from '../../img/music-trivia-v2.png';
import Project3 from '../../img/coding-quiz.png';
import Project4 from '../../img/weather-dashboard.png';

const Project = () => {
    return (
        <div className="project">
            <div className="project-item">
                <a href="https://bcole37.github.io/Project-1-Music-Trivia/" target="_blank" rel="noreferrer">
                    <img src={Project1} alt="" /></a>
            </div>
            <div className="project-item">
                <a href="https://protected-falls-91774.herokuapp.com/login" target="_blank" rel="noreferrer">
                    <img src={Project2} alt="" /></a>
            </div>
            <div className="project-item">
                <a href="https://quiptobasco.github.io/Week-4-Homework/" target="_blank" rel="noreferrer">
                    <img src={Project3} alt="" /></a>
            </div>
            <div className="project-item">
                <a href="https://quiptobasco.github.io/Week-6-Homework/" target="_blank" rel="noreferrer">
                    <img src={Project4} alt="" /></a>
            </div>
           
        </div>
    )
}

export default Project
