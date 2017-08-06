import React from 'react';

const AddSongModal = ({ isOpen, onCancelCallback, onConfirmCallback }) => (
    isOpen ?
        < div className="modal is-active" >
            <div className="modal-background"></div>
                <div className="modal-content">
                    <input className="input" type="text" name="name" placeholder="Your Song Id" />
                    <input className="input" type="text" name="name" placeholder="Your Username" />
                    <input className="input" type="text" name="name" placeholder="Your Awesome Song Name" />
                    <a className="button" onClick={onConfirm}></a>
            </div>
            <button className="modal-close is-large" onClick={onCancelCallback}></button>
        </div >
        : null
)

onConfirm = () => {
  onConfirmCallback(this.state.name);
}


export default AddSongModal;