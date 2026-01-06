import ScrollFloat from "./reactbits/ScrollFloat.tsx";
import './css/ProjectsSection.css';
import ChromaGrid from "./reactbits/ChromaGrid.tsx";
const Projects = () => {
    return (
        <section  id="projects" className="projects-section">
            <div className="projects-container">
                <ScrollFloat stagger={0.0}>
                    PROJECTS
                </ScrollFloat>
            </div>
            <ChromaGrid/>
        </section>
    );
};

export default Projects;