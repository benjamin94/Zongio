import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import { browserHistory } from 'react-router'

import 'bulma/css/bulma.css';

export default class SongTable extends React.Component {

    goToContribute(song) {
        var {id: a,username} = song;
        //const songId = {song.id};
        this.props.history.push(`/contribute/${a}`, {song});    
        
      }

    renderTableBody(data) {
        return data.map((song, index) => {
            return (
                <tr key={index} data-item={song} onClick={() => this.goToContribute(song)}>
                    <th data-title="Index">{index}</th>
                    <td data-title="Username">{song.username}</td>
                    <td data-title="SongName">{song.songName}</td>
                    <td>
                        <span className="icon">
                            <i className="fa fa-play-circle-o"></i>
                        </span>
                    </td>
                </tr>
            );
        }
        );
    }

    render() {
        const data = this.props.data;
        return (
            <div>
                <table className="table is-fullwdth">
                    <thead>
                        <tr>
                            <th><abbr title="Id">Id</abbr></th>
                            <th><abbr title="Username">Username</abbr></th>
                            <th><abbr title="SongName">Song Name</abbr></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableBody(this.props.data)}
                    </tbody>
                </table>
                <Link to='/contribute/69'>Que pex hermano</Link>
            </div>
        );
    }
}