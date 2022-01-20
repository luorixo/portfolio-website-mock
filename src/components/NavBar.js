import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
        <header className="relative">
            <div className="container mx-auto flex justify-between">
                <nav className="inline-flex py-8 my-6">
                    <NavLink to="/" exact activeClassName="text-white" className="inline-flex items-center mr-10 text-white text-4xl font-bold cursive tracking-widest">
                        EUGENE.C
                    </NavLink>
                    <NavLink to="/post" activeClassName="bg-red-700" className="inline-flex items-center px-8 text-white hover:text-orange-300"> 
                        BLOG
                    </NavLink>  
                   
                </nav>
                <div className="inline-flex py-8 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/eugene-j-chua" label="linkedin link" className="mr-9 hover:text-black" target="_blank" bgColor="#fff" style={{ height:50, width: 50}} />
                    <SocialIcon url="https://github.com/luorixo" label="github link" className="mr-9" target="_blank" bgColor="#fff" style={{ height:50, width: 50}} />
                    <SocialIcon url="mailto:luorixo@gmail.com" label="mail link" target="_blank" bgColor="#fff" style={{ height:50, width: 50}} />
                </div>
            </div>
        </header>
    );
}