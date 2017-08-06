import React from 'react';

class AddSongModal extends React.Component {

    constructor(props){
        super(props);

        //methodes declaration here
        this.handleIdChanged = this.handleIdChanged.bind(this);
        this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
        this.handleSongNameChanged = this.handleSongNameChanged.bind(this);

    }

    render(){

        const isOpen = this.props.isOpen;

        if (!isOpen) {
            return null;
        }

        return (
            < div className="modal is-active" >
                <div className="modal-background"></div>
                <div className="modal-content">
                    <input className="input" type="text" name="name" value={this.props.id} placeholder="Your Song Id" onChange={this.handleIdChanged}/>
                    <input className="input" type="text" name="name" value={this.props.username} placeholder="Your Username" onChange={this.handleUsernameChanged}/>
                    <input className="input" type="text" name="name" value={this.props.songName} placeholder="Your Awesome Song Name" onChange={this.handleSongNameChanged}/>
                    <a className="button" onClick={this.props.onConfirm}>Click Me</a>
                </div>
                <button className="modal-close is-large" onClick={this.props.onCancel}></button>
            </div >
        );
    }

    handleIdChanged(e) {
        this.props.onChangeId(e.target.value);
    }

    handleUsernameChanged(e) {
        this.props.onChangeUsername(e.target.value);
    }
    
    handleSongNameChanged(e) {
        this.props.onChangeSongName(e.target.value);
    }

}


export default AddSongModal;