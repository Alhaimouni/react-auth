import axios from 'axios';
import React, { useState } from 'react';
import cookies from 'react-cookies';

export const dataContext = React.createContext();



function DataProvider(props) {

  const [posts, setPosts] = useState(() => []);
  const [comments, setComments] = useState(() => []);
  const [refresh, setRefresh] = useState(() => 0);
  const [refreshMain, setRefreshMain] = useState(() => 0);


  function addPost(e) {
    e.preventDefault();
    const url = (`${process.env.REACT_APP_SERVER}/post`);
    const post = {
      title: e.target.title.value,
      content: e.target.content.value,
    }
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    axios.post(url, post, bearer)
      .then(resolve => {
        e.target.title.value = '';
        e.target.content.value = '';
        setRefreshMain(r=>++r);
      })
      .catch(reject => console.log(reject.response.data));
  }

  function getPosts() {
    const url = (`${process.env.REACT_APP_SERVER}/post`);
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    axios.get(url, bearer)
      .then(resolve => {
        setPosts(resolve.data);
        setRefresh(pre => ++pre);
      })
      .catch(reject => console.log(reject.response.data));
  }

  function getComments(postId) {
    const url = (`${process.env.REACT_APP_SERVER}/comment/${postId}`);
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    axios.get(url, bearer)
      .then(resolve => {
        return (resolve.data);
      })
      .catch(reject => console.log(reject.response.data));
  }

  function addComment(e, postId, userId) {
    e.preventDefault();
    const url = (`${process.env.REACT_APP_SERVER}/comment/${postId}/${userId}`);
    const post = {
      content: e.target.content.value,
    }
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    axios.post(url, post, bearer)
      .then(resolve => console.log(resolve.data))
      .catch(reject => console.log(reject.response.data));
    e.target.content.value = '';
  }

  function deletePost(postId) {
    const url = (`${process.env.REACT_APP_SERVER}/post/${postId}`);
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    axios.delete(url, bearer)
      .then(resolve => setRefreshMain(r=>++r))
      .catch(reject => console.log(reject.response.data));
  }

  const value = {
    posts, setPosts,
    comments, setComments,
    refresh, setRefresh,
    refreshMain, setRefreshMain,
    addPost, getPosts, addComment, getComments, deletePost,
  };
  return (
    <dataContext.Provider value={value}>
      {props.children}
    </dataContext.Provider>
  )
}

export default DataProvider
