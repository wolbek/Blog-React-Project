import './BlogList.css';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

function BlogList(props){

    const allblogs = props.blogs.map((blog) => {
        return (
            <BlogCard removeBlogHandler={props.removeBlogHandler} blog={blog}/>
        );
        
    })

    return (
        <>
            <div>
                <SearchIcon/>
                <input type='text' placeholder='Search' value={props.searchTerm} onChange={(event)=>{props.findBlogHandler(event.target.value)}}/>
            </div>
            
            <Link to='/add-blog'><button type='submit'>Add Blog</button></Link>
            <div> {allblogs} </div>
        </>
    );
}

export default BlogList;