import React, { useEffect, useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { dataContext } from '../contexts/DataProvider';
import cookies from 'react-cookies';
import axios from 'axios';
import '../styles/CommentModal.css'

function CommentModal(props) {

  const { refresh, setRefresh } = useContext(dataContext);
  const [com, setCom] = useState([]);

  useEffect(() => {
    const url = (`${process.env.REACT_APP_SERVER}/comment/${props.post.id}`);
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    axios.get(url, bearer)
      .then(resolve => setCom(resolve.data));
  }, [refresh]);

  function addComment(e) {
    e.preventDefault();
    const url = (`${process.env.REACT_APP_SERVER}/comment/${props.post.id}/${cookies.load('_id')}`);
    const post = {
      content: e.target.content.value,
    }
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    axios.post(url, post, bearer)
      .then((resolve) => {
        e.target.content.value = '';
        setRefresh(pre => ++pre);
      })
      .catch(reject => console.log(reject.response.data));
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Comments
        </Modal.Title>
      </Modal.Header>
      <div className='commentsContainer'>
        {com.map((comment, index) => (
          <div key={index} className='comments'>
            <h5>{comment.user.username}</h5>
            <p>
              {comment.content}
            </p>
            <hr></hr>
          </div>
        ))}
      </div>
      <div>
        <form onSubmit={addComment} className='commentForm'>
          <input type='text' name='content' className='commentInput' placeholder='Add Comment..'></input>
          <input type='submit' value='Add' className='commentSubmit'></input>
        </form>
      </div>


    </Modal >
  )
}

export default CommentModal
