import React from "react";
import PropTypes from "prop-types";

import 'bulma/css/bulma.css';

export default class SongTable extends React.Component {

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
                        {data.map((item, idx) => (
                            <tr>
                                <th>{idx}</th>
                                <td>{item.username}</td>
                                <td>{item.songName}</td>
                                <td>
                                    <span className="icon">
                                        <i className="fa fa-play-circle-o"></i>
                                    </span>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

