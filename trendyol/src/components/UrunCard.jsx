import React from 'react'

function UrunCard(props) {
  return (
        <div className="col-md-4 card UrunCard">
            <img src={props.Image} alt="" />
            <div className="cardTitle">
                <a href="">{props.Title} </a>
            </div>
        </div>
  )
}

export default UrunCard