import React from "react";
import NavBar from "./NavBar";
import image from "../botanicplants.jpg";

export default function Home() {
    return (
        <main>
            
            <img src={image} alt="Botanic Garden Plants" className="absolute z-0 object-cover w-full h-full"/>
            <NavBar/>
            <section className="relative flex justify-center pt-0 lg:pt-32 md:pt-2 px-8">
                <h1 className="text-6xl text-orange-100 font-bold cursive leading-none lg:leading-snug home-name">HELLO!</h1>
            </section>
        </main>
    );
}