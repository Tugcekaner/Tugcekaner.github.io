import React from 'react'
import FooterUl from './FooterUl'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <FooterUl
                            FooterUlTitle="Trendyol"
                            FooterUlli1="Biz kimiz"
                            FooterUlli2="Kariyer"
                            FooterUlli3="İletişim"
                            FooterUlli4="Trendyol'da Satış Yap"
                        ></FooterUl>
                        <div className="FooterImage1">
                        <img src="https://cdn.dsmcdn.com/frontend/web/assets/images/troy-logo-transparent.png" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/footer-master-card.png" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/footer-visa-black.png" alt="" />
                        <img src="https://cdn.dsmcdn.com/web/production/footer-amex.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-3">
                        <FooterUl
                            FooterUlTitle="About Us"
                            FooterUlli1="Who we are"
                            FooterUlli2="Careers"
                            FooterUlli3="Contact Us"
                            FooterUlli4="Sustainability"
                        ></FooterUl>
                        <ul>
                            <h5>Mobil Uygulamalar</h5>
                            <li className='FooterImage2'><img src="https://cdn.dsmcdn.com/web/production/iosV2.svg" alt="" /></li>
                            <li className='FooterImage2'><img src="https://cdn.dsmcdn.com/web/production/googleV2.svg" alt="" /></li>
                            <li className='FooterImage2'><img src="https://cdn.dsmcdn.com/web/production/huaweiV2.svg" alt="" /></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <FooterUl
                            FooterUlTitle="Kampanyalar"
                            FooterUlli1="Aktif Kampanyalar"
                            FooterUlli2="Hediye Fikirleri"
                            FooterUlli3="Trendyol Fırsatları"
                            FooterUlli4="Elite Üyelik"
                        ></FooterUl>
                        <ul>
                            <li><h5>Sosyal Medya</h5></li>
                        </ul>
                        <ul className='d-flex FooterImage3'>
                            <li><FaFacebookF></FaFacebookF></li>
                            <li><FaInstagram></FaInstagram></li>
                            <li><FaTwitter></FaTwitter></li>
                            <li><FaYoutube></FaYoutube></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <FooterUl
                            FooterUlTitle="Yardım"
                            FooterUlli1="Sıkça Sorulan Sorular"
                            FooterUlli2="Canlı Yardım"
                            FooterUlli3="İade Rehberi"
                            FooterUlli4="İşlem Rehberi"
                        ></FooterUl>
                        <img className='FooterImage4'  src="https://cdn.dsmcdn.com/web/production/etbis-qr.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer