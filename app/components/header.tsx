export function Header() {

    return <>
        <header className="header">
            <div className="container nav">
                <a className="logo" href="/">Julia Huynh</a>

                <button className="menu-btn" aria-label="Open menu" aria-expanded="false">
                    ☰
                </button>

                <nav className="nav-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                    <a href="/Branding">Branding</a>
                    <a href="/UX">UX</a>


                </nav>
            </div>
        </header>
    </>

}