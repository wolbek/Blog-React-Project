import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddBlog from "./pages/AddBlog";
import BlogDetail from "./pages/BlogDetail";
import BlogList from "./pages/BlogList";
import api from './api/contact';
import { useState, useEffect } from "react";

function App() {
  
  const [blogs, setBlogs] = useState([]);

 

  //To set blogs on page load
  useEffect(()=>{

    const getAllBlogs = async () => {
      const allBlogs = await api.get('/blogs');
      if(allBlogs.data){
        setBlogs(allBlogs.data['blogs']);
      }
    }

    getAllBlogs();

  },[]);

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<BlogList blogs={blogs}/>}/>
        <Route path='/add-blog' element={<AddBlog/>}/>
        <Route path='/blog/:id' element={<BlogDetail/>}/>
      </Routes>
    
    </>
  );
}

export default App;
