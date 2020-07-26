import React from "react";

const AboutCompany = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="about__text-box">
          <h2 className="heading-secondary u-margin-bottom">عن الشركة</h2>
          <div class="embed-responsive embed-responsive-16by9 ">
            <iframe
              title="about-company"
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/s3DXR6YZtOg"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
