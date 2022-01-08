import './resume.css';

const Resume = () => {
    return (
        <div className="resume">
            Download my <a href="https://docs.google.com/document/export?format=pdf&id=1gFQqTcUZdHEH0-RIlv7bfi6YCVIr0967e-HT4omU_84">resume</a>.
            <div className="resume-prof">
                <h2>My full stack proficiencies:</h2>
                    <h3>Front End</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Responsive Design</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                        </ul>

                    <h3>Back End</h3>
                        <ul>
                            <li>APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL, Sequelize</li>
                            <li>MongoDB, Mongoose</li>
                            <li>REST</li>
                            <li>GraphQL</li>
                        </ul>
            </div>
        </div>
    )
}

export default Resume
