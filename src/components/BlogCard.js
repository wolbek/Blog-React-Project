import './BlogCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function BlogCard(props){
    return (
        <div class='blog-card'>
            <Link to={`/blog/${props.blog.id}`} state={{blog:props.blog}} style={{ textDecoration: 'none' }}>
                <h3>{props.blog.title}</h3>
                <h5>{props.blog.author}</h5>
                <h6>{props.blog.timestamp}</h6>
                <p>{props.blog.content}</p>
            </Link>
            
            <Link to={`/edit-blog/${props.blog.id}`} state={{blog:props.blog}}><button><EditIcon/></button></Link>
            <button onClick={() => {props.removeBlogHandler(props.blog.id)}}><DeleteForeverIcon/></button>
        </div>
    );
}

export default BlogCard;