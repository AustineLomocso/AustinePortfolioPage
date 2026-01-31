import { useState } from 'react';
import '../css/Navbar.css';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'HOME', href: '#home' },
        { name: 'PROJECTS', href: '#projects' },
        { name: 'SKILLS', href: '#skills' },
        // { name: 'CONTACT', href: '#contact' },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">

                {/* Logo Area */}
                <div className="nav-logo">
                    <div className="logo-circle">
                        <span>A</span>
                    </div>
                </div>

                {/* Desktop Links (Centered) */}
                <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="nav-link"
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Mobile-only Download Button (inside menu) */}
                    <div className="mobile-only-btn">
                        <a
                            href="/AustineLomocso_Resume.pdf"  // CHANGED: Must match the file in 'public' exactly
                            className="btn-download"
                            download="Austine_Resume.pdf"       // Optional: This is the name the user sees when saving
                        >
                            DOWNLOAD RESUME
                        </a>
                    </div>
                </div>

                <div className="nav-actions">
                    <a
                        href="/AustineLomocso_Resume.pdf"  // CHANGED: Must match the file in 'public' exactly
                        className="btn-download"
                        download="Austine_Resume.pdf"       // Optional: This is the name the user sees when saving
                    >
                        DOWNLOAD RESUME
                    </a>
                </div>

                {/* Mobile Hamburger Toggle */}
                <div className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;