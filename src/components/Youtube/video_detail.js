import React from 'react'
import Loading from '../Loading'

const Detail = {
  'marginTop': '10px',
  'padding': '10px',
  'border': '1px solid #ddd',
  'borderRadius': '4px'
}

const { AnimalCircle, LoadingCircle } = Loading
const VideoDetail = ({video}) => {
  if (!video) {
    return <div>
      <AnimalCircle>
        <LoadingCircle />
      </AnimalCircle>
    </div>
  }

  const videoId = video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div style={Detail}>
      <div className='embed-responsive-16y9'>
        <iframe className='embed-responsive-item' src={url} />
      </div>
      <div style={Detail}>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail
