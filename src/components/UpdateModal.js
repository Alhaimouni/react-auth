import React, { useEffect, useContext, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { dataContext } from '../contexts/DataProvider';
import cookies from 'react-cookies';
import axios from 'axios';
import '../styles/UpdateModal.css';

function UpdateModal(props) {

  const { setRefresh } = useContext(dataContext);

  function updatePost(e) {
    e.preventDefault();
    console.log(props.post.id)
    const url = (`${process.env.REACT_APP_SERVER}/post/${props.post.id}}`);
    const updatedPost = {
      title: e.target.title.value,
      content: e.target.content.value,
      userId: props.post.userId,
    }
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    axios.put(url, updatedPost, bearer)
      .then((resolve) => {
        e.target.Title.value = '';
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
          Update Post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={updatePost} className='updateForm'>
          <input type='text' name='title' placeholder='New Title' className='inputt'></input>
          <input type='text' name='content' placeholder='New Content' className='inputc'></input>
          <input type='submit' value='Update' className='submit'></input>
        </form>
      </Modal.Body>
    </Modal >
  )
}

export default UpdateModal
