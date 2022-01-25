import React, { useState, useEffect } from "react";
import SanityClient from "../client.js";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        SanityClient.fetch(`*[_type == "post"]{
            title,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, []);


    return (
        <main className="bg-gradient-to-bl from-orange-600 to-blue-700 min-h-screen">
            <NavBar/>
            <section className="container mx-auto">
                <h1 className="text-8xl text-white flex justify-center cursive">Blog Posts Page</h1>
                <h2 className="text-lg text-white flex justify-center mb-12 mt-4">Welcome to my page of posts!</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                    <article>
                        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                        <span className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400" key={index}>
                            <img 
                                src={post.mainImage.asset.url}
                                alt={"post.mainImage.alt"}
                                className="w-full h-full rounded-r object-cover absolute"
                            />
                            <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                                <h3 className="text-lg font-bold px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                                    {post.title}
                                </h3>
                            </span>
                        </span>
                        </Link>
                    </article>
                    ))}
                </div>
            </section>
        </main>
    )
}