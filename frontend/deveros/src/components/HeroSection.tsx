import SplitText from './reactbits/SplitText.tsx';
import './css/Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">

                {/* Left Side: Text Content */}
                <div className="hero-content">
                    <SplitText
                        text="AUSTINE"
                        tag="h1"
                        className="hero-title"
                        splitType="chars"
                        delay={50}
                        duration={1.5}
                        ease="circ.out"
                        from={{opacity: 0, y: 100}}
                        to={{opacity: 1, y: 0}}
                        threshold={0.1}
                    />

                    <p className="hero-subtitle">
                        bridging the gap between complex back-end logic and intuitive user design
                    </p>

                    <div className="hero-buttons">
                        <a
                            href="#projects"
                            className="btn-download"
                        >
                            VIEW PROJECTS
                        </a>
                    </div>

                </div>

                <div className="hero-visual">
                    <div className="circle-placeholder"></div>
                </div>

            </div>
        </section>
    );
};

export default Hero;