import './Fixed-Navbar.css';
import './Header.js'
function StickyNavbar() {
    

    return (
       <>
            {/* <!-- Header --> */}
            <header className="header">
                <a href="#" className="logo">Fashion Anatomy</a>
                <nav className="navbar">
                    <a href="#contact" className='btn'>Contact Us</a>
                </nav>
            </header>
       </>
    );

}

export default StickyNavbar;
