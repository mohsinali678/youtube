
import {useState} from "react";
import "./Comment.css"
import React from 'react'
import YouTube from 'react-youtube'

function Comment(props) {
  const textBoxStyle = {
    height:"30px",
    width:"500px",
    fontSize:"18px",
    borderRadius:"10px"
  }
  const opts = {
    height:'390',
    width: '640',
    playerVars : {
      autoplay: 1,
    },
  }

  let [name, setName] = useState("")
  let [comment, setComment] = useState("")
  let [data, setData] = useState([])
  let [videoID, setVideoID] = useState(props.match.params.id)

  const handleTextChange = (event) => {
    const {value} = event.target;

    if(event.target.name === "name"){
      setName(name = value)
    }else if(event.target.name === "comment"){
      setComment(comment = value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(data = [...data, {name, comment}])
  }


  return (

    <div className='section'>
      <YouTube className='player' videoId={videoID} opts={opts} />


      <div className="Comment">

        <form onSubmit={handleSubmit} style={{marginTop:"50px"}}>
          <label htmlFor="Name">Name</label>
          <br/><br/>
          
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={name}
            style={textBoxStyle} 
            placeholder="Name..."
            onChange={handleTextChange}

          />

          <br/><br/>
          <label htmlFor="comment">Comment</label>
          <br/><br/>

          <input 
            type="text" 
            id="comment" 
            name="comment"
            value={comment}
            style={textBoxStyle} 
            placeholder="..."
            onChange={handleTextChange}

            />

          <br/><br/>
          <button type="submit" className="btn">Submit</button>
        </form>

        <hr style={{marginRight:"200px"}}/>
        
        <div>
          {data.lenght === 0 ? "" : data.map((item, i) => {
            return(
              <div key={i}>
                <h1>Name: {item.name}</h1>
                <p>Comment: {item.comment}</p>
              </div>
            ) 
          })}
        </div>

      </div>
    </div>
  );
}

export default Comment;

