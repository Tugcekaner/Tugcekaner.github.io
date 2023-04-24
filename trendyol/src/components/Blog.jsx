import React from 'react'

function Blog(props) {
  return (
    <div>
        <div className="row">
            <h5>{props.blogTitle} </h5>
            <p>{props.blogContent} </p>
        </div>
    </div>
  )
}

export default Blog