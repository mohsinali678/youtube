import React, { Component } from 'react'

import Display from './Display'
export default class Home extends Component {
    constructor(){
        super()
        this.state = {
            input: "",
            result: "",
            videos: [],
            visibility: false,
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value,
        })
    }
    getYoutubeVideos = async (keyWord)  =>{
        //apiKey is AIzaSyA2hz8e-TNG95kuho8zXFIOQGeOcs3VsL4
        const videoData = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&kind=video&q=${keyWord}&key=${process.env.AIzaSyA2hz8e-TNG95kuho8zXFIOQGeOcs3VsL4 }`)
        const videoList = videoData.data.items
        this.setState({
            videos: videoList,
        })
    }
    visibility = () => {
        this.setState({
            visibility: !this.state.visibility,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.getYoutubeVideos(this.state.input)
        this.setState({
            input: '',
        })
    }
    render() {
        return (
            <div classname='home-page'>
                <h2>Search for some videos</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='input'></label>
                    <input type='text' placeholder='What video would you like to watch?' value= {this.state.input} id='input' onChange={this.handleChange} /> 
                    <button>Submit</button>
                </form>
                <Display visibility={this.state.visibility} videos={this.state.videos}/>
            </div>
        )
    }
}
