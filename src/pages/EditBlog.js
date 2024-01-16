import './EditBlog.css';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EditBlog(props){
    const navigate = useNavigate();
    const location = useLocation();

    const [userInput, setUserInput] = useState(location.state.blog);

    function titleChangeHandler(event) {
        setUserInput({
            ...userInput,
            title: event.target.value
        })
    }
    function authorChangeHandler(event) {
        setUserInput({
            ...userInput,
            author: event.target.value
        })
    }
    function contentChangeHandler(event) {
        setUserInput({
            ...userInput,
            content: event.target.value
        })
    }

    function editBlog(){
        if (userInput.title==='' || userInput.author==='' || userInput.content===''){
            alert('All fields are mandatory');
            return;
        }
        props.editBlogHandler(userInput);
        setUserInput({
            ...userInput,
            title:'',
            author:'',
            content:''
        });

        navigate('/');
    }

    return (
        <>
            <div id='edit-blog-container'>
                <h1>Edit Blog</h1>
                <form onSubmit={editBlog}>
                    <div>
                        <label>Title</label>
                        <br/>
                        <input type='text' name='title' placeholder='Enter title' onChange={titleChangeHandler} value={userInput.title}/>
                    </div>
                    <div>
                        <label>Author</label>
                        <br/>
                        <input type='text' name='author' placeholder='Enter author' onChange={authorChangeHandler} value={userInput.author}/>
                    </div>
                    <div>
                        <label>Content</label>
                        <br/>
                        <textarea type='text' name='content' placeholder='Enter content' onChange={contentChangeHandler} value={userInput.content} rows="4" cols="50"/>
                    </div>
                    
                    <button type='submit' className='edit-blog-blue-btn'>Edit Blog</button>
                </form>
            </div>
        </>
    );
}

export default EditBlog;