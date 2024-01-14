import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBlog from "./pages/AddBlog";
import EditBlog from "./pages/EditBlog";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import api from './api/contact';
import { useState, useEffect } from "react";

function App() {
  
  const [blogs, setBlogs] = useState([]);

  //To set blogs on page load
  useEffect(()=>{

    async function getAllBlogs() {
      const allBlogs = await api.get('/blogs');
      if(allBlogs.data){
        setBlogs(allBlogs.data['blogs']);
      }
    }

    getAllBlogs();

  },[]);

  //To add blog
  async function addBlogHandler(blog) {
    await api.post('/add-blog',blog);
    setBlogs([...blogs, blog]);
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

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<BlogList removeBlogHandler={removeBlogHandler} blogs={blogs}/>}/>
        <Route path='/add-blog' element={<AddBlog addBlogHandler={addBlogHandler}/>}/>
        <Route path='/edit-blog/:id' element={<EditBlog editBlogHandler={editBlogHandler}/>}/>
        <Route path='/blog/:id' element={<BlogDetail/>}/>
      </Routes>
    
    </>
  );
}

export default App;
