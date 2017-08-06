import React from "react";
import PropTypes from "prop-types";

import AddSongModal from "./AddSongModal"
import SongTable from "./SongTable"

import 'bulma/css/bulma.css';

// const SongEntryModel = {
//   id: { type: Number },
//   username: { type: String },
//   songName: { type: String }
// };
// >

export default class SongList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        //Component State
        data: [
            {
                id: 0,
                username: "test",
                songName: "test"
            },
        ],

        //Modal State
        modalIsOpen: false,
        modalId: null,
        modalUsername: null,
        modalSongName: null,

    };

    //Modal Handlers
    this.handleChangeId = this.handleChangeId.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeSongName = this.handleChangeSongName.bind(this);
    this.handleModalCancel = this.handleModalCancel.bind(this);
    this.handleModalConfirm = this.handleModalConfirm.bind(this); 
    this.modalReset = this.modalReset.bind(this);
  }

  render() {
    return (
        <div>
            <SongTable
                data={this.state.data}/>

            <AddSongModal 
                isOpen={this.state.modalIsOpen}
                onChangeId={this.handleChangeId}
                onChangeUsername={this.handleChangeUsername}
                onChangeSongName={this.handleChangeSongName}
                id={this.state.modalId}
                username={this.state.modalUsername}
                songName={this.state.modalSongName}
                onCancel={this.handleModalCancel}
                onConfirm={this.handleModalConfirm}
                />

        <button onClick={() => this.dupa()}>the new guy</button>
      </div>
    );
  }

  handleChangeId(id) {
      this.setState({modalId: id});
  }

  handleChangeUsername(username) {
      this.setState({modalUsername: username});
  }

  handleChangeSongName(songName) {
      this.setState({modalSongName: songName});
  }

  modalReset(){
      this.setState({
          modalId: null,
          modalUsername: null,
          modalSongName: null,
        })
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
                  songName: this.state.modalSongName,
              }
          ],
          modalIsOpen: false,
      });
      this.modalReset();
  }

  dupa() {
      this.setState(
          {
              modalIsOpen: !this.state.modalIsOpen,
          }
      )
  }
}
