import React from 'react';

class AddSongModal extends React.Component {

    constructor(props){
        super(props);

        //methodes declaration here
        this.handleDataChange = this.handleDataChange.bind(this);
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
                    <input className="input" type="text" name="username" value={this.props.username} placeholder="Your Username"          onChange={this.handleDataChange}/>
                    <input className="input" type="text" name="artist"   value={this.props.artist}   placeholder="The Original Artist"    onChange={this.handleDataChange}/>
                    <input className="input" type="text" name="songName" value={this.props.songName} placeholder="Your Awesome Song Name" onChange={this.handleDataChange}/>
                    <a className="button" onClick={this.props.onConfirm}>Click Me</a>
                </div>
                <button className="modal-close is-large" onClick={this.props.onCancel}></button>
            </div >
        );
    }

    handleDataChange(e) {
        if(e.target.name === "username"){
            this.props.onChangeUsername(e.target.value);            
        }
        if(e.target.name === "artist"){
            this.props.onChangeArtist(e.target.value);            
        }
        if(e.target.name === "songName"){
            this.props.onChangeSongName(e.target.value);            
        }
    }
    
}


export default AddSongModal;