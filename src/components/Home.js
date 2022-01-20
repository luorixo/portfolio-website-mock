import React from "react";
import "../index.css"
import NavBar from "./NavBar";

export default function Home() {
    return (
        
        <div classname="flex">
            <div className="inline-flex flex-1 intro-left">left</div>
            <div className="inline-flex flex-1 intro-right">right</div>
        </div>



        /*
        <main>
            <hero className="min-w-full min-h-screen bg-gradient-to-bl from-orange-600 to-blue-700 block">
                <NavBar/> 

                <div className="container mx-auto flex justify-between">
                    <section className="inline-flex py-2 my-6 bg-red-100">
                        <h1 className=" bg-green-100">Hi there.</h1>
                        <p>I’m Eugene, a software engineering student at The University of Auckland.</p>
                    </section> 
                    <section className="inline-flex">

                    </section>
                </div>
            </hero>

            <div class="custom-shape-divider-bottom-1642025412">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>


        </main>
        */
    );
}