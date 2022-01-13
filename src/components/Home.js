import React from "react";
import NavBar from "./NavBar";

export default function Home() {
    return (
        <main>
            <hero className="min-w-full min-h-screen bg-gradient-to-bl from-orange-600 to-blue-700 block">
                <NavBar/> 

                <div className="flex">
                    <section>
                        <h1>Hi there.</h1>
                    </section>
                    <section>

                    </section>
                </div>


                {/*<section className="relative flex justify-center pt-0 lg:pt-32 md:pt-2 px-8">
                    <h1 className="text-6xl text-orange-300 font-bold cursive leading-none lg:leading-snug home-name">Hi there.</h1>
                </section>*/}
            </hero>

            <div class="custom-shape-divider-bottom-1642025412">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>

            <section className="w-full h-screen blued">
                <h1 className="relative">About Me</h1>
            </section>
        </main>
    );
}