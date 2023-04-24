import React from 'react'
import CardUrun from './CardUrun'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
  margin: 30,
  responsiveClass: true,
  nav: false,
  dots: false,
  autoplay: false,
  smartSpeed: 1000,
  responsive: {
      0:{
        items:1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 3,
      },
      1000: {
          items: 5,

      }
  },
};


function OwlUrunler() {
  return (
    <div className='OwlUrunler'>
      <div className="container my-3">
        <div className="row urunlerOwl">
          <h3>Çok Satan Ürünler</h3>
          <OwlCarousel items={5}
            className="owl-theme"
            loop
            margin={12}
            {...options} >
            <CardUrun
              Image="https://cdn.dsmcdn.com/ty797/product/media/images/20230325/13/311758697/504734244/1/1_org.jpg"
              satan="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"
              Title="Şampuan"
              tanitim="Saçlarınız için gereken her şey..."
              fiyat="200 TL"
            ></CardUrun>
            <CardUrun
              Image="https://cdn.dsmcdn.com/ty395/product/media/images/20220412/10/88986437/172244894/2/2_org.jpg"
              satan="https://cdn.dsmcdn.com/mnresize/250/250/marketing/datascience/automation/2020/12/9/EnCokSatan_202012091129.png"
              Title="TrendyolMilla"
              tanitim="Siyah Wide Leg pantolon..."
              fiyat="1500 TL"
            ></CardUrun>
          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}

export default OwlUrunler