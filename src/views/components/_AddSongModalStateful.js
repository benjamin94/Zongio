import React, {Component} from 'react';

class AddSongModal extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
            idInput: null,
            idUsername: null,
            idSongName: null,
        }

        this.onIdChanged = this.onIdChanged.bind(this);
        this.onUsernameChanged = this.onUsernameChanged.bind(this);
        this.onSongNameChanged = this.onSongNameChanged.bind(this);
        this.onConfirm = this.onConfirm.bind(this);

    }

    render() {
        const isOpen = this.props.isOpen;

        if (!isOpen) {
            return null;
        }

        return (
            < div className="modal is-active" >
                <div className="modal-background"></div>
                <div className="modal-content">
                    <input className="input" type="text" name="name" placeholder="Your Song Id" onChange={this.onIdChanged}/>
                    <input className="input" type="text" name="name" placeholder="Your Username" onChange={this.onUsernameChanged}/>
                    <input className="input" type="text" name="name" placeholder="Your Awesome Song Name" onChange={this.onSongNameChanged}/>
                    <a className="button" onClick={this.onConfirm}>Click Me</a>
                </div>
                <button className="modal-close is-large" onClick={this.props.onCancel}></button>
            </div >
        );
    }

    onIdChanged(e) {
        this.setState({idInput: e.target.value})
    }

    onUsernameChanged(e) {
        this.setState({ idUsername: e.target.value })
    }
    
    onSongNameChanged(e) {
        this.setState({idSongName: e.target.value})
    }

    onConfirm(){
        this.props.onConfirm(
            this.state.idInput,
            this.state.idUsername,
            this.state.idSongName
        );
    }

}

export default AddSongModal;