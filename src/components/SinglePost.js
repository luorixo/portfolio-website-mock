import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import NavBar from "./NavBar";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
            "authorImage": author->image
        }`).then((data) => setSinglePost(data[0]))
        .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div className="bg-gradient-to-bl from-orange-600 to-blue-700 min-h-screen block"><NavBar/></div>;

    return (
        <main className="bg-gradient-to-bl from-orange-600 to-blue-700 block min-h-screen">
            <NavBar/>
            <article className="container mx-auto bg-white source">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center">
                        <div className="bg-white bg-opacity-75 p-12">
                            <h1 className="source font-extrabold text-3xl lg:text-6xl mb-4">{singlePost.title}</h1>
                            <div className="flex justify-center text-black source">
                                <img src={urlFor(singlePost.authorImage).url()} alt={singlePost.name} className="w-10 h-10 rounded-full"/>
                                <p className="cursive flex items-center pl-2 text-2xl">{singlePost.name}</p>
                            </div>                            
                        </div>
                    </div>
                    <img src={singlePost.mainImage.asset.url} alt={singlePost.title} className="w-full object-cover rounded-t" style={{ height: "400px" }}/>
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full"><BlockContent blocks={singlePost.body} projectId="3zvifxpt" dataset="production"/></div>
            </article>
        </main>
    )
}