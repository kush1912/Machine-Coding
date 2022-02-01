import React,{useState, useEffect} from 'react';
import axios from 'axios';
import Post from './components/Post';
import Pagination from './components/Pagination';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currPage, setCurrPage] = useState(1);
  const [postPerPage] = useState(8);

  //Async and await should never be put in useEffect.
  // Good Practice to use async and await whenever fetching data.
  useEffect(()=>{
    const fetchPosts = async ()=>{
      setLoading(true);
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const res = await axios.get(url);
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  },[]);
  // useEffect is run when the components get mounted but also when the component gets updated, so if these empty [] is not put
  // it will end up in a never ending loop.
  
  //Get current Posts
  const lastPost = currPage * postPerPage;
  const firstost = lastPost - postPerPage;
  const currPosts = posts.slice(firstost, lastPost);
  
  const paginate = (number) =>setCurrPage(number);
  //console.log(posts);
  
  return(
    <>
    <div className='container mt-4'>
      <h1 className='text-primary mb-4'>Pagination</h1>
      <Post posts={currPosts} loading={loading} />
      <Pagination 
      postperPage={postPerPage} 
      totalPosts={posts.length} 
      paginate={paginate}/>
    </div>
    </>
  ); 
};

export default App