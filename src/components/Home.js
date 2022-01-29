import React from "react";
import "../index.css"
import NavBar from "./NavBar";
import Image from "../botanicplants.jpg";

export default function Home() {
    return (


        
        <main>
            <hero className="min-w-full min-h-screen bg-gradient-to-bl from-orange-600 to-blue-700 block">
                <NavBar/> 

                <div className="container mx-auto flex xl:flex-row xl:mt-12 flex-col ">
                    <section className="msg">
                        <h1 className="welcome">Hi there.</h1>
                        <p className="source text-white small">I’m <strong>Eugene</strong>, a <strong>software engineering</strong> student at The University of Auckland.</p>
                    </section> 
                    <section className="bg-red-100 pic">
                        <img className="rounded-full profile" src={Image} alt="Eugene Chua"/>    
                    </section>
                </div>
            </hero>



        </main>

    );
}