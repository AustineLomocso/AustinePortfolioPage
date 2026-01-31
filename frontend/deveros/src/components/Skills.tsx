import { useState } from 'react';
import './css/Skills.css';

// 1. Define the categories
type Category = 'All' | 'Technical' | 'Tech Stack' | 'Soft Skills';

// 2. Define the Skill Interface
interface Skill {
    id: number;
    name: string;
    category: Exclude<Category, 'All'>; // Category cannot be 'All' for a specific item
}

// 3. Your Data (Edit this list!)
const skillsData: Skill[] = [
    { id: 1, name: "React", category: "Tech Stack" },
    { id: 2, name: "System Design", category: "Technical" },
    { id: 3, name: "Data Structures", category: "Technical" },
    { id: 4, name: "Object Oriented Programming", category: "Technical" },
    { id: 5, name: "Information Management", category: "Technical" },
    { id: 6, name: "Problem Solving", category: "Soft Skills" },
    { id: 7, name: "Communication", category: "Soft Skills" },
    { id: 8, name: "TypeScript", category: "Tech Stack" },
    { id: 9, name: "SQL & NoSQL", category: "Tech Stack" },
    { id: 10, name: "Java / Spring Boot", category: "Tech Stack" },
    { id: 11, name: "Team Leadership", category: "Soft Skills"},
    { id: 12, name: "Data Analysis", category: "Technical" },
    { id: 13, name: "Machine Learning", category: "Technical" },
    { id: 14, name: "Python", category: "Tech Stack" },
];

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('All');

    // Filter logic
    const filteredSkills = skillsData.filter(skill =>
        activeCategory === 'All' ? true : skill.category === activeCategory
    );

    const categories: Category[] = ['All', 'Technical', 'Tech Stack', 'Soft Skills'];

    return (
        <section id="skills" className="skills-section">
            <h2 className="skills-title">My Arsenal</h2>

            {/* Filter Chips */}
            <div className="filter-container">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
                        onClick={() => setActiveCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="skills-grid">
                {filteredSkills.map((skill, index) => (
                    <div
                        key={skill.id}
                        className="skill-card"
                        style={{ animationDelay: `${index * 0.05}s` }}
                    >
                        <div>
                            <div className="skill-category-label">{skill.category}</div>
                            <h3 className="skill-name">{skill.name}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;