import React from 'react'
import shopping from '../images/tech-1.svg';
import site from '../images/tech-2.svg';
import app from '../images/tech-3.svg';
import design from '../images/tech-4.svg';
import commerce from '../images/tech-5.svg';

const Techtech = ()=>{
    return(
        <section className="tech">
      <div className="container">
        <h2 className="heading-secondary u-margin-bottom "> خدمات تقنية</h2>
        <div className="row tech__text-box">
          <div className="col-md-3">
            <div className="tech__service">
              <img src={shopping} alt=""/>
              <p>تصميم المتاجر الإلكترونية</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tech__service">
              <img src={site} alt=""/>
              <p>تصميم المواقع الإلكترونية</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tech__service">
              <img src={app} alt=""/>
              <p>تصميم تطبيقات الجوال</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tech__service">
              <img src={design} alt=""/>
              <p>صناعة الهوية</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="tech__service">
              <img src={commerce} alt=""/>
              <p>تصميم هوية تجارية</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Techtech;