import React from "react";
import Navbar from "./NavBar";
import "./Blog.css";
import "./Home.css";

const BlogCard = (props) => {
    return(
        <div className="blog-background">
            <h2>{props.title}</h2>
            <img src={props.photo} className="blog-image"/>
            <p className="blog-description">{props.description}</p>
        </div>
    )
}
export default BlogCard;