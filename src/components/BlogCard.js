import './BlogCard.css';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function BlogCard(props){
    return (
        <div class='blog-card'>
            <h3>{props.blog.title}</h3>
            <h5>{props.blog.author}</h5>
            <h6>{props.blog.timestamp}</h6>
            <p>{props.blog.content}</p>
            <button><EditIcon/></button>
            <button onClick={() => {props.removeBlogHandler(props.blog.id)}}><DeleteForeverIcon/></button>
        </div>
    );
}

export default BlogCard;