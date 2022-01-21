import React from "react";
import "../index.css"
import NavBar from "./NavBar";

export default function Home() {
    return (


        
        <main>
            <hero className="min-w-full min-h-screen bg-gradient-to-bl from-orange-600 to-blue-700 block">
                <NavBar/> 

                <div className="container mx-auto flex bg-orange-200 lg:flex-row flex-col">
                    <section className="bg-blue-100 flex-1">
                        <h1 className="welcome bg-orange-300 px-0 m-0">Hi there.</h1>
                        <p className="source text-3xl">I’m <strong>Eugene</strong>, a <strong>software engineering</strong> student at The University of Auckland.</p>
                    </section> 
                        <section className="bg-red-100 flex-1">
                        image goes here
                    </section>
                </div>
            </hero>



        </main>

    );
}