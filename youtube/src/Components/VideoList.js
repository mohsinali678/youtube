
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { v4 as uuid } from "uuid";
import './VideoList.css'
export default class VideoList extends Component {
    render() {
        return (
            <div className='list'>
                {this.props.videos.map((video, i) => {
                    return (
                        <Link className='video' key={uuid()} to={`/video/${video.id.videoId}`}>
                            <img src={video.snippet.thumbnails.default.url}></img>
                            <h2>{video.snippet.title}</h2>
                        </Link>

                    )
                })}
            </div>
        )
    }
}