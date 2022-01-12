import React from "react";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <main>
            <hero className="min-w-full h-screen bg-gradient-to-bl from-orange-600 to-blue-700 block">
                
                <NavBar/>
                <section className="relative flex justify-center pt-0 lg:pt-32 md:pt-2 px-8">
                    <h1 className="text-6xl text-orange-100 font-bold cursive leading-none lg:leading-snug home-name">Hi there.</h1>
                </section>
            </hero>

            <div class="custom-shape-divider-bottom-1641975661">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>

            <section className="w-full h-screen bg-orange-300">
                <h1 className="relative">About Me</h1>
            </section>
        </main>
    );
}