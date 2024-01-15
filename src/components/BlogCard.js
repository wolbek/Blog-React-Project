import './BlogCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

function BlogCard(props){
    return (
        <div class='blog-card'>
            <Link to={`/blog/${props.blog.id}`} state={{blog:props.blog}} className='link-styles'>
                <h2>{props.blog.title}</h2>
                <h5>Author: {props.blog.author}</h5>
                <h6>Created at: {props.blog.timestamp}</h6>
                <p>{props.blog.content}</p>
            </Link>
            
            <Link to={`/edit-blog/${props.blog.id}`} state={{blog:props.blog}}><button style={{marginRight:'5px'}}><EditIcon/></button></Link>
            <button onClick={() => {props.removeBlogHandler(props.blog.id)}}><DeleteForeverIcon/></button>
        </div>
    );
}

export default BlogCard;