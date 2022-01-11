import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="relative">
            <div className="container mx-auto flex justify-between">
                <nav className="inline-flex">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center py-6 px-3 mr-5 text-white text-4xl font-bold cursive tracking-widest">
                        Eugene Chua
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-white bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-orange-400"> 
                        Blog Posts
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-white bg-red-700" className="inline-flex items-center py-3 px-3 my-6 rounded text-white hover:text-green-800">
                        Projects
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/eugene-j-chua" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} />
                    <SocialIcon url="https://github.com/luorixo" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} />
                    <SocialIcon url="mailto:luorixo@gmail.com" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width: 35}} />
                </div>
            </div>
        </header>
    );
}