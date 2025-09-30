import Navbar from "./NavBar";
import BlogCard from "./BlogCard";
import "../styles/Blog.css";
import "../styles/Home.css";
import nathan from "../assets/nathan.png";

const Blog = () => {
    return(
        <div>
        <Navbar/>
        <h1 className="blog-title">The SDC Blog</h1>
        <BlogCard title="Congrats Graduate!" photo={nathan} description="Congratulations to Nathan on graduating!!! SDC is proud of you !!! ❤️"/>
        </div>
    )
}
export default Blog;