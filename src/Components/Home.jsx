import { useState } from "react";
import kid01 from '../assets/images/kidImg04.jpg'
import kid02 from '../assets/images/kidImg02.jpg'
import kid03 from '../assets/images/kidImg03.jpg'
import BlogList from "./BlogList";

const Home = () => {
   const [blogs, setBlogs] = useState([
    { id: 1, image: kid01, title: "Blog 1", content: "This is the content of the first blog", author: 'Anezi' },
    { id: 2, image: kid02, title: "Blog 2", content: "This is the...", author: "Adiel" },
    { id: 3, image: kid03, title: "Blog 3", content: "This is the content of the third blog...", author: "pabv" }
   ])
   
   const handleDelete = (id) => {
    const newBlogs =  blogs.filter((blog) => blog.id !== id);

    setBlogs(newBlogs);
   }
   
    return ( <>
        <div className="home">
            <BlogList blogs={blogs} title="Designs and Styles" handleDelete={handleDelete}/>

            <BlogList blogs={blogs.filter((blog) => blog.author === 'Adiel' )} title="Trending" handleDelete={handleDelete}/>

        </div>
        
    </> );
}
 
export default Home;