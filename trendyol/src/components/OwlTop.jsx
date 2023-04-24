import React from 'react'
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
            items:3,
          },    
        600: {
            items: 3,
        },
        700: {
            items: 5,
        },
        1000: {
            items: 10,

        }
    },
};


function OwlTop() {
    return (
        <div className='OwlTop' >
            <div class='container' >
                <OwlCarousel items={10}
                    className="owl-theme"
                    loop
                    margin={12} 
                    {...options}>
                    <div class="owlItem">
                        <a href="#">
                            <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/En_Cok_Satanlar_202302142041.png" />
                            Sen De Al!
                        </a>
                    </div>
                    <div class="owlItem">
                    <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/14/Senin_Icin_Sectik_202302142041.png" />
                        Sana Özel</a>
                    </div>
                    <div class="owlItem">
                    <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/2/15/Widget_202302151451.png" />
                        Kodlar ve Hizmetler</a>
                    </div>
                    <div class="owlItem">
                    <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Lenovo_202301270444.png" />
                        Lenovo</a>
                    </div>
                    <div class="owlItem">
                    <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Apple_202301262111.jpg" />
                        Apple</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Trendyolmilla_202301280120.jpg" />
                        TrendyolMilla</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg" />
                        Puma</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png" />
                        Adidas</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg" />
                        Nike</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg" />
                        Xiaomi</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Trendyolmilla_202301280120.jpg" />
                        TrendyolMilla</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg" />
                        Puma</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png" />
                        Adidas</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg" />
                        Nike</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg" />
                        Xiaomi</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Trendyolmilla_202301280120.jpg" />
                        TrendyolMilla</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg" />
                        Puma</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png" />
                        Adidas</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg" />
                        Nike</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg" />
                        Xiaomi</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Trendyolmilla_202301280120.jpg" />
                        TrendyolMilla</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg" />
                        Puma</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png" />
                        Adidas</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg" />
                        Nike</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg" />
                        Xiaomi</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Trendyolmilla_202301280120.jpg" />
                        TrendyolMilla</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Puma_202301271558.jpg" />
                        Puma</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/26/Adidas_202301262144.png" />
                        Adidas</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/27/Nike_202301271540.jpg" />
                        Nike</a>
                    </div>
                    <div class="owlItem">
                        <a href="#">
                        <img src="https://cdn.dsmcdn.com/mnresize/200/200/marketing/datascience/automation/2023/1/28/Xiaomi_202301280236.jpg" />
                        Xiaomi</a>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}


export default OwlTop