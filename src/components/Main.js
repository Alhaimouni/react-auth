import React, { useContext, useEffect } from 'react';
import { When } from 'react-if';
import { Navigate } from 'react-router-dom';
import { authContext } from '../contexts/AuthProvider';
import cookies from 'react-cookies';
import '../styles/Main.css'
import AddPostForm from './AddPostForm';
import PostHolder from './PostHolder';
import { dataContext } from '../contexts/DataProvider';

function Main() {
  const { isAuth, setIsAuth } = useContext(authContext);
  const { posts, getPosts, refresh } = useContext(dataContext);

  useEffect(() => {
    const token = cookies.load('token');
    if (token) {
      setIsAuth(true);
      getPosts();
    }
  }, []);  //reson of infinate loop

  return (
    <>
    {console.log('main')}
      <When condition={isAuth}>
        <main className='main'>
          <div className='input'>
            <AddPostForm />
          </div>
          <div className='output'>
            {posts.map((post, index) => <PostHolder post={post} key={index} />)}
          </div>
        </main>
      </When>
      <When condition={!isAuth}>
        <Navigate to='/login' />
      </When>
    </>
  )
}

export default Main
