import React, { useContext } from 'react'
import { dataContext } from '../contexts/DataProvider'

function AddPostForm() {

  const { addPost } = useContext(dataContext);

  return (
    <form className='addPostForm' onSubmit={addPost}>
      <p>Show your soul reflection..</p>
      <input type='text' placeholder='Title' name='title' className='in1' required />
      <input type='text' placeholder='Content' name='content' className='in2' required />
      <input type='submit' value='Share' className='submitBtn' />
    </form>
  )
}

export default AddPostForm
