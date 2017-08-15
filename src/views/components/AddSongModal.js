import React from 'react';

const hasGetUserMedia = !!(navigator.getUserMedia || 
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);

class AddSongModal extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            song: {
                username: "",
                artist: "",
                songName: ""
            },
            hasGetUserMedia: !!(navigator.getUserMedia || 
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia),
        }

        //methodes declaration here
        this.handleDataChange = this.handleDataChange.bind(this);
        this.confirm = this.confirm.bind(this);        
        this.cancel = this.cancel.bind(this);
        this.reset = this.reset.bind(this);
        
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
                    <input className="input" type="text" name="username" value={this.state.username} placeholder="Your Username"          onChange={this.handleDataChange}/>
                    <input className="input" type="text" name="artist"   value={this.state.artist}   placeholder="The Original Artist"    onChange={this.handleDataChange}/>
                    <input className="input" type="text" name="songName" value={this.state.songName} placeholder="Your Awesome Song Name" onChange={this.handleDataChange}/>
                    <a className="button" onClick={this.confirm}>Click Me</a>
                </div>
                <button className="modal-close is-large" onClick={this.cancel}></button>
            </div >
        );
    }

    handleDataChange(e) {
        const song = this.state.song;        
        if(e.target.name === "username"){
            song.username = e.target.value;
        }
        if(e.target.name === "artist"){
            song.artist = e.target.value;
        }
        if(e.target.name === "songName"){
            song.songName = e.target.value;
        }
        this.forceUpdate();
    }

    cancel() {
        this.props.onCancel();
        this.reset();
    }

    confirm() {
        const song = this.state.song
        this.props.onConfirm(song);
        this.reset();                
    }

    reset(){
        this.setState({
            modalId: "",
            modalUsername: "",
            modalArtist: "",
            modalSongName: "",
          })
    }

    
}

export default AddSongModal;