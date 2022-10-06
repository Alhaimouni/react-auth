import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import '../styles/PostHolder.css';
import CommentModal from './CommentModal';
import UpdateModal from './UpdateModal';
import { dataContext } from '../contexts/DataProvider';
import { When } from 'react-if';
import cookies from 'react-cookies';
import { FaWrench, FaTimes } from 'react-icons/fa';
import { authContext } from '../contexts/AuthProvider';

function PostHolder({ post }) {
  const { deletePost } = useContext(dataContext);
  const { canDo } = useContext(authContext);
  const [modalShow, setModalShow] = useState(false);
  const [updateModalShow, setUpdateModalShow] = useState(false);
  return (
    <>
      <div className='PostHolder'>
        <div className='PostHolderTop'>
          <h4 className='PostOwner'>{post.user.username}</h4>
          <div className='editAndRemove'>
            <When condition={(cookies.load('role') === 'admin' || ((canDo() && (cookies.load('_id') === `${post.userId}`))))}>
              <button className='Ebtn' onClick={() => { setUpdateModalShow(true) }} ><FaWrench /></button>
            </When>
            <When condition={(cookies.load('role') === 'admin' || ((canDo() && (cookies.load('_id') === `${post.userId}`))))}>
              <button className='Dbtn' onClick={() => { deletePost(post.id) }} ><FaTimes /></button>
            </When>
          </div>
        </div>
        <div className='PostHolderMid'>
          <p className='title'>{post.title}</p>
          <p className='content'>{post.content}</p>
        </div>
        <div className='PostHolderBot'>
          <Button id='btn' onClick={() => { setModalShow(true) }} >Comments</Button>
        </div>
      </div>
      <CommentModal show={modalShow} post={post} onHide={() => setModalShow(false)} />
      <UpdateModal show={updateModalShow} post={post} onHide={() => setUpdateModalShow(false)} />
    </>
  )
}

export default PostHolder
