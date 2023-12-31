import React from "react";

type NavbarProps = {
    title?: string;
};

const Navbar: React.FC<NavbarProps> = ({ title = "Task Dashboard" }) => {
    return (
        <nav className="navbar navbar-dark bg-primary rounded px-3 mb-4">
            <span className="navbar-brand mb-0 h4">
                ✅ {title}
            </span>
        </nav>
    );
};

export default Navbar;
