import React from "react";
import NavBar from "./NavBar";
import image from "../nzbush.jpg";

export default function Home() {
    return (
        <main>
            
            <img src={image} alt="Ice Patterns" className="absolute z-0 object-cover w-full h-full"/>
            <NavBar/>
            <section className="relative flex justify-center pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-orange-100 font-bold cursive leading-none lg:leading-snug home-name">Hello! I'm Eugene.</h1>
            </section>
        </main>
    );
}