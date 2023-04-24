import React from 'react'

function FooterUl(props) {
  return (
    <ul className='FooterUl col-md-3'>
      <h5><a href="#">{props.FooterUlTitle}</a> </h5>
      <li><a href="#">{props.FooterUlli1} </a></li>
      <li><a href="#">{props.FooterUlli2} </a></li>
      <li><a href="#">{props.FooterUlli3} </a></li>
      <li><a href="#">{props.FooterUlli4} </a></li>
    </ul>
  )
}

export default FooterUl