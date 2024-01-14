import './BlogDetail.css';
import { Link, useLocation } from 'react-router-dom';


function BlogDetail(){
    const location = useLocation();
    
    return (
        <>
            <h1>{location.state.blog.title}</h1>
            <h3>{location.state.blog.author}</h3>
            <h4>{location.state.blog.timestamp}</h4>
            <p>{location.state.blog.content}</p>

            <Link to='/'><button type='button'>Back to blog list</button></Link>
        </>
    );
}

export default BlogDetail;