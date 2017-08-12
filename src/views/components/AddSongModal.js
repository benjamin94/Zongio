import React from 'react';

class AddSongModal extends React.Component {

    constructor(props){
        super(props);

        //methodes declaration here
        this.handleUsernameChanged = this.handleUsernameChanged.bind(this);
        this.handleSongNameChanged = this.handleSongNameChanged.bind(this);
        this.handleArtistChanged = this.handleArtistChanged.bind(this);        

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
                    <input className="input" type="text" name="name" value={this.props.username} placeholder="Your Username" onChange={this.handleUsernameChanged}/>
                    <input className="input" type="text" name="name" value={this.props.artist} placeholder="The Original Artist" onChange={this.handleArtistChanged}/>
                    <input className="input" type="text" name="name" value={this.props.songName} placeholder="Your Awesome Song Name" onChange={this.handleSongNameChanged}/>
                    <a className="button" onClick={this.props.onConfirm}>Click Me</a>
                </div>
                <button className="modal-close is-large" onClick={this.props.onCancel}></button>
            </div >
        );
    }

    handleUsernameChanged(e) {
        this.props.onChangeUsername(e.target.value);
    }
    
    handleArtistChanged(e) {
        this.props.onChangeArtist(e.target.value);
    }

    handleSongNameChanged(e) {
        this.props.onChangeSongName(e.target.value);
    }


}


export default AddSongModal;