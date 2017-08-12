import React from 'react';

import AddSongModal from "../../components/AddSongModal"
import SongTable from "../../components/SongTable"
import dummyData from "../../../config/dummyData"

export default class MainPage extends React.Component{

  constructor(props) {
    super(props);

    this.state = {

        //Main State
        data: [
            {
                id: 0,
                username: "Bigkis",
                artist: "Luis Fonsi",
                songName: "Despacito",
            },
                        {
                id: 1,
                username: "Episage",
                artist: "Queen",                
                songName: "We Will Rock You"
            },            
            {
                id: 2,
                username: "Shakira",
                artist: "Shakira",                
                songName: "Hips Don't Lie"
            },
            {
                id: 3,
                username: "PositoMori",
                artist: "Usher",                
                songName: "Yeah!"
            },
            {
                id: 4,
                username: "Kiki",
                artist: "Bruno Mars",                               
                songName: "Grenade"
            },
        ],

        //Modal State
        modalIsOpen: false,
        modalUsername: "",
        modalArtist: "",
        modalSongName: "",
        
    };

    //Modal Handlers
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeSongName = this.handleChangeSongName.bind(this);
    this.handleChangeArtist = this.handleChangeArtist.bind(this);    
    this.handleModalCancel = this.handleModalCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this); 
    this.modalReset = this.modalReset.bind(this);
    
  }

    render() {
        return (
            <div>
                <h1>Look for your fav song!</h1>
                <p>if its not there , be the one who creates it</p>

            <SongTable
                data={this.state.data}
                history={this.props.history}
                />

            <AddSongModal 
                isOpen={this.state.modalIsOpen}
                onChangeId={this.handleChangeId}
                onChangeUsername={this.handleChangeUsername}
                onChangeSongName={this.handleChangeSongName}
                onChangeArtist={this.handleChangeArtist}
                id={this.state.modalId}
                username={this.state.modalUsername}
                songName={this.state.modalSongName}
                artist={this.state.modalArtist}
                onCancel={this.handleModalCancel}
                onConfirm={this.handleModalConfirm}
                />

            <a className="button is-primary is-outlined" onClick={() => this.modalOpen()}>Click Me</a>

            </div>
        );
    }

  handleChangeUsername(username) {
      this.setState({modalUsername: username});
  }

  handleChangeSongName(songName) {
      this.setState({modalSongName: songName});
  }

  handleChangeArtist(artist) {
    this.setState({modalArtist: artist});
  }

  handleModalCancel() {
      this.setState({ modalIsOpen: false });
      this.modalReset();
  }

  handleModalConfirm() {
      this.setState({
          data: [
              ...this.state.data,
              {
                  id: this.state.modalId,
                  username: this.state.modalUsername,
                  artist: this.state.modalArtist,
                  songName: this.state.modalSongName,
              }
          ],
          modalIsOpen: false,
      });
      this.modalReset();
  }

  modalOpen() {
      this.setState(
          {
              modalIsOpen: !this.state.modalIsOpen,
          }
      )
  }

  modalReset(){
    this.setState({
        modalId: "",
        modalUsername: "",
        modalArtist: "",
        modalSongName: "",
      })
}

} 

