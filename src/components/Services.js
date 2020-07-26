import React from "react";
import ad from '../images/1.svg'
import social from '../images/2.svg'
import famous from '../images/3.svg'
import seo from '../images/4.svg'
import email from '../images/6.svg'
import googleAd from '../images/5.svg'

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="heading-secondary u-margin-bottom ">التسويق الرقمي</h2>
        <div className="row services__text-box">
          <div className="col-md-3">
            <div className="services__service">
              <img src={ad} alt=""/>
              <p>إدارة الحملات الإعلانية</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="services__service">
              <img src={social} alt=""/>
              <p>إدارة حسابات التواصل الإجتماعي</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="services__service">
              <img src={famous} alt=""/>
              <p>الإعلان عبر المؤثرين</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="services__service">
              <img src={seo} alt=""/>
              <p>التسويق عبر محركات البحث (SEO)</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="services__service">
              <img src={googleAd} alt=""/>
              <p>التسويق عبر  GOOGLE ADWORDS & ADSENSE</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="services__service">
              <img src={email} alt=""/>
              <p>التسويق بالبريد الإلكتروني</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
