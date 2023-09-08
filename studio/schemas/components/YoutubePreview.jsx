import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'




const YoutubePreview = ({ url }) => {
  const id = getYouTubeId(url)
  return <YouTube videoId={id} />
}

export default YoutubePreview