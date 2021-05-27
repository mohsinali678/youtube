
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { v4 as uuid } from "uuid";
export default class VideoList extends Component {
    render() {
        return (
            <div>
                {this.props.videos.map((video, i) => {
                    return (
                        <Link key={uuid()} to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.default.url}></img>
                            <h2>{video.snippet.title}</h2>
                        </Link>
                    )
                })}
            </div>
        )
    }
}