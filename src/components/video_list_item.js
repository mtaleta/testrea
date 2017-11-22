import React from 'react'
import styled from 'styled-components'
const Item = {
  'maxWidth': '64px'
}

const Group = styled.li`
  cursor:  pointer;
  &:hover {
    background-color: #eee;
  }
`

const VideoListItem = ({video, onVideoSelect}) => {
  const imageUrl = video.snippet.thumbnails.default.url

  return (
    <Group onClick={() => onVideoSelect(video)} className='list-group-item'>
      <div className='video-list media'>
        <div className='media-left'>
          <img style={Item} className='media-object' src={imageUrl} />
        </div>
        <div className='media-body'>
          <div className='media-heading'>{video.snippet.title}</div>
        </div>
      </div>
    </Group>
  )
}

export default VideoListItem
