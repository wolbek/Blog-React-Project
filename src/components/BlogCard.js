import './BlogCard.css';

function BlogCard(props){
    return (
        <div class='blog-card'>
            <h3>{props.blog.title}</h3>
            <h5>{props.blog.author}</h5>
            <h6>{props.blog.timestamp}</h6>
            <p>{props.blog.content}</p>
        </div>
    );
}

export default BlogCard;