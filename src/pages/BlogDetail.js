import './BlogDetail.css';
import { useLocation } from 'react-router-dom';


function BlogDetail(){
    const location = useLocation();
    
    return (
        <> 
            <div id='blog-detail-container'>
                <h1>{location.state.blog.title}</h1>
                <h3>{location.state.blog.author}</h3>
                <h4>{location.state.blog.timestamp}</h4>
                <p>{location.state.blog.content}</p>
            </div>
            
        </>
    );
}

export default BlogDetail;