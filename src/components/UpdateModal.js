import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { dataContext } from '../contexts/DataProvider';
import cookies from 'react-cookies';
import axios from 'axios';
import '../styles/UpdateModal.css';

function UpdateModal(props) {

  const { setRefreshMain } = useContext(dataContext);

  function updatePost(e) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_SERVER}/post/${props.post.id}`;
    const bearer = { headers: { authorization: `Bearer ${cookies.load('token')}` } };
    const updatedData = {
      "title": e.target.title.value,
      "content": e.target.content.value,
      "userId": props.post.userId,
    }
    axios.put(url, updatedData, bearer)
      .then((resolve) => {
        e.target.title.value = '';
        e.target.content.value = '';
        setRefreshMain(pre => ++pre);
        props.onHide();
      })
      .catch(reject => { console.log(reject) });

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
