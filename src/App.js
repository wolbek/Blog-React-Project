import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import api from './api/blog';
import { useState, useEffect } from "react";
import './App.css';
import { Navigate } from "react-router-dom";

function App() {
  
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [token, setToken] = useState('');

  function handleLogin(newToken){
    setToken(newToken);
  };

  function handleLogout(){
    setToken('');
    <Navigate to='/login'/>
  };

  async function getAllBlogs() {
    const allBlogs = await api.get('/blogs');
    if(allBlogs.data){
      setBlogs(allBlogs.data['blogs']);
    }
    console.log(allBlogs);
  }

  //To set blogs on page load
  useEffect(()=>{
    getAllBlogs();
  },[]);

  //To add blog
  async function addBlogHandler(blog) {
    await api.post('/add-blog',blog);
    getAllBlogs();
  };

  //To delete blog
  async function removeBlogHandler(id){
    await api.post('/delete-blog',{id:id});
    const newBlogList = blogs.filter((blog)=>{
      return blog._id!==id;
    })
    setBlogs(newBlogList);
  }

  //To edit blog
  async function editBlogHandler(editedBlog){
    await api.post('/update-blog',editedBlog);
    setBlogs(blogs.map((blog)=>{
      return blog._id===editedBlog._id ? editedBlog : blog;
    }))
  }

  //To find blog from the searchTerm
  async function findBlogHandler(searchTerm){
    setSearchTerm(searchTerm);
    if (searchTerm!==''){
      const newBlogList = blogs.filter((blog)=>{
        return blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || blog.author.toLowerCase().includes(searchTerm.toLowerCase()) || blog.content.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResults(newBlogList);
    }
  }

  return (
    <>
      {token? <NavBar onLogout={handleLogout}/>:''}

      <Routes>

        <Route path="/" element={token ? <BlogList removeBlogHandler={removeBlogHandler} searchTerm={searchTerm} findBlogHandler={findBlogHandler} blogs={searchTerm.length < 1 ? blogs: searchResults}/> : <Navigate to="/login" />}/>
        <Route path='/add-blog' element={token ? <AddBlog addBlogHandler={addBlogHandler}/>: <Navigate to="/login" />}/>
        <Route path='/edit-blog/:id' element={token ? <EditBlog editBlogHandler={editBlogHandler}/>: <Navigate to="/login" />}/>
        <Route path='/blog/:id' element={token ? <BlogDetail/> : <Navigate to="/login" />}/>

        <Route path='/signup' element={<SignupForm/>}/>
        <Route path='/login' element={<LoginForm onLogin={handleLogin}/>}/>

      </Routes>
    
    </>
  );
}

export default App;
