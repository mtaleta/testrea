import _ from 'lodash'
import React, { Component } from 'react'
import YTSearch from 'youtube-api-search'
import SearchBar from './search_bar'
import VideoList from './video.list'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyCsUDc3pNpI4JwZ3wwwNHvvLsoT16bSjtI'

export default class VideoIndex extends Component {
  constructor (props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.videoSearch('(500) day summer')
  }

  videoSearch (term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render () {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 3000)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}
