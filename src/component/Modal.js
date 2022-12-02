import React from 'react'
import smile from "../images/erreur.png"

const Modal = ({onClick}) => {
  return (
    <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      
      <div class="modal-footer">
      <img style={{height: 150, width:180}} src={smile}  className='Image_List'/>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={onClick}>Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal