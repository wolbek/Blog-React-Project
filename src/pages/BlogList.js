import './BlogList.css';
import BlogCard from '../components/BlogCard';

function BlogList(props){

    const allblogs = props.blogs.map((blog) => {
        return (
            <BlogCard blog={blog}/>
        );
        
    })

    return (
        <>
            <div> {allblogs} </div>
        </>
    );
}

export default BlogList;