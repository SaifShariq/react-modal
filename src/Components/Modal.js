import React from 'react'
import "./Modal.css"

function Modal({ closeModal }) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titleCloseBtn'>
                <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title'>
                <h1>Would you like to continue? Think about it!</h1>
            </div>
            <div className='body'>
                <p>Don't miss out on what the next page has to offer!</p>
            </div>
            <div className='footer'>
                <button onClick={() => closeModal(false)} id='cancelBtn'>Cancel</button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Modal