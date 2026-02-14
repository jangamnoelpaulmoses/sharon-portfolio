export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <p className="footer-text">
                        © {currentYear} Sharon Moses Jangam. Crafted with precision.
                    </p>
                    <div className="footer-links">
                        <a href="#hero">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
