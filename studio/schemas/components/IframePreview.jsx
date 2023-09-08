import React from 'react'

const IframePreview = ({url, height}) => {
  return <iframe src={url} width="100%" height={`${height}px`} />
}

export default IframePreview
