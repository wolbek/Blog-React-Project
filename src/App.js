import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import api from './api/contact';
import { useState, useEffect } from "react";
import './App.css';

function App() {
  
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  async function getAllBlogs() {
    const allBlogs = await api.get('/blogs');
    if(allBlogs.data){
      setBlogs(allBlogs.data['blogs']);
    }
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
    await api.post('/delete-blog',{id});
    const newBlogList = blogs.filter((blog)=>{
      return blog.id!==id;
    })
    setBlogs(newBlogList);
  }

  //To edit blog
  async function editBlogHandler(editedBlog){
    await api.post('/update-blog',editedBlog);
    setBlogs(blogs.map((blog)=>{
      return blog.id===editedBlog.id ? editedBlog : blog;
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
      <NavBar/>
      <Routes>
        <Route path='/' element={<BlogList removeBlogHandler={removeBlogHandler} searchTerm={searchTerm} findBlogHandler={findBlogHandler} blogs={searchTerm.length < 1 ? blogs: searchResults}/>}/>
        <Route path='/add-blog' element={<AddBlog addBlogHandler={addBlogHandler}/>}/>
        <Route path='/edit-blog/:id' element={<EditBlog editBlogHandler={editBlogHandler}/>}/>
        <Route path='/blog/:id' element={<BlogDetail/>}/>
      </Routes>
    
    </>
  );
}

export default App;
