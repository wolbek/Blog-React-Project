import './AddBlog.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBlog(props){
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title:'',
        author:'',
        content:''
    });

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

    function addBlog(){
        if (userInput.title==='' || userInput.author==='' || userInput.content===''){
            alert('All fields are mandatory');
            return;
        }
        props.addBlogHandler(userInput);
        setUserInput({
            title:'',
            author:'',
            content:''
        });

        navigate('/');
    }

    return (
        <>
            <div id='add-blog-container'>
                <h1>Add Blog</h1>
                <form onSubmit={addBlog}>
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
                    
                    <button type='submit' className='add-blog-blue-btn'>Add Blog</button>
                </form>
            </div>
            

        </>
    );
}

export default AddBlog;