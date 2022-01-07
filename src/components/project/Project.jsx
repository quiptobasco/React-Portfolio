import './project.css';
import Project1 from '../../img/music-trivia.png';
import Project2 from '../../img/music-trivia-v2.png';
import Project3 from '../../img/coding-quiz.png';
import Project4 from '../../img/weather-dashboard.png';
import Project5 from '../../img/budget-tracker.png';
import Project6 from '../../img/workout-tracker.png';
import Github from '../../img/GitHub-Mark-64px.png';

const Project = () => {
    return (
        <div className="project">
            <div className="project-item">
                <img src={Project1} alt="screenshot of music trivia app" />
                <div className="project-item-description">
                    <a href="https://bcole37.github.io/Project-1-Music-Trivia/" target="_blank" rel="noreferrer">Music Trivia v1.0</a>
                    <a href="https://github.com/BCole37/Project-1-Music-Trivia" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    HTML/CSS/JavaScript
                </div>
            </div>
            <div className="project-item">
                <img src={Project2} alt="screenshot of music trivia app" />
                <div className="project-item-description">
                    <a href="https://protected-falls-91774.herokuapp.com/login" target="_blank" rel="noreferrer">Music Trivia v2.0</a>
                    <a href="https://github.com/ChonaC/Project-2-MUSICTRIVIA" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    HTML/CSS/JavaScript
                </div>
            </div>
            <div className="project-item">
                <img src={Project3} alt="screenshot of coding quiz app" />
                <div className="project-item-description">
                    <a href="https://quiptobasco.github.io/Week-4-Homework/" target="_blank" rel="noreferrer">Coding Quiz</a>
                    <a href="https://github.com/quiptobasco/Week-4-Homework" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    HTML/CSS/JavaScript
                </div>
            </div>
            <div className="project-item">
                <img src={Project4} alt="screenshot of weather dashboard app" />
                <div className="project-item-description">
                    <a href="https://quiptobasco.github.io/Week-6-Homework/" target="_blank" rel="noreferrer">Weather Dashboard</a>
                    <a href="https://github.com/quiptobasco/Week-6-Homework" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    HTML/CSS/JavaScript
                </div>
            </div>
            <div className="project-item">
                <img src={Project5} alt="screenshot of budget tracker app" />
                <div className="project-item-description">
                    <a href="https://radiant-gorge-17011.herokuapp.com/" target="_blank" rel="noreferrer">Budget Tracker</a>
                    <a href="https://github.com/quiptobasco/Week-19-Budget-Tracker" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    HTML/CSS/JavaScript
                </div>
            </div>
            <div className="project-item">
                <img src={Project6} alt="screenshot of budget tracker app" />
                <div className="project-item-description">
                    <a href="https://afternoon-waters-73111.herokuapp.com/" target="_blank" rel="noreferrer">Workout Tracker</a>
                    <a href="https://github.com/quiptobasco/Week-18-Workout-Tracker" target="_blank" rel="noreferrer"><img src={Github} alt="github logo" /></a>
                    HTML/CSS/JavaScript
                </div>
            </div>
        </div>
    )
}

export default Project
