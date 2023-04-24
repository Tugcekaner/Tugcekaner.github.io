import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';

function CardUrun(props) {
    return (
        <div className='CardUrun'>
            <img className='urunFoto' src={props.Image} alt="" />
            <img className='cokSatan' src={props.satan} alt="" />
            <img className='kargo' src={props.kargo} alt="" />
            <img className='teslimat' src={props.teslimat} alt="" />
            <span className='fav'><AiOutlineHeart></AiOutlineHeart></span>
            <div className="cardTitle">
                <p><b>{props.Title}</b> {props.tanitim} </p>
                <h6 className='fiyat'>{props.fiyat} </h6>
            </div>
        </div>
    )
}

export default CardUrun