import React from 'react'

const RichTextViewer = ({content}) => {
  return (
    <div className='desc'
    dangerouslySetInnerHTML={{ __html: content }}
  />
  )
}

export default RichTextViewer