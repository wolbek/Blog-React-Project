import './BlogList.css';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

function BlogList(props){

    const allblogs = props.blogs.map((blog) => {
        return (
            <BlogCard removeBlogHandler={props.removeBlogHandler} blog={blog}/>
        );
        
    })

    return (
        <>
            <Link to='/add-blog'><button type='submit'>Add Blog</button></Link>
            <div> {allblogs} </div>
        </>
    );
}

export default BlogList;