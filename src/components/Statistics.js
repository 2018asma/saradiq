import React from "react";
import { useCountUp } from "react-countup";
import ads from "../images/promotion.png";
import event from "../images/calendar.svg";
import apps from "../images/selfie.svg";
import site from "../images/3.svg";

const Statistics = () => {
  const adsCount = useCountUp({
    duration: 5,
    end: 1000,
  });
  const eventCount = useCountUp({
    duration: 5,
    end: 500,
  });
  const appCount = useCountUp({
    duration: 5,
    end: 200,
  });
  return (
    <section className="statistics" >
      <div className="container">
        <h2 className="heading-secondary u-margin-bottom">إحصائيات</h2>
        <div className="row statistics__card-container ">
          <div className="col-md-4">
            <div
              className="card statistics__card"
              onMouseOver={adsCount.start}
              onMouseLeave={() => adsCount.update(1000)}
            >
              <div className="statistics__card-img">
                <img className="card-img-top" src={ads} alt="Card image cap" />
              </div>

              <div className="card-body statistics__card-body">
                <div>
                  <h1 className="card-title">{adsCount.countUp}</h1>
                </div>
                <p className="card-text">حملة إعلانية</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card statistics__card"
              onMouseOver={eventCount.start}
              onMouseLeave={() => eventCount.update(500)}
            >
              <div className="statistics__card-img">
                <img
                  className="card-img-top"
                  src={event}
                  alt="Card image cap"
                />
              </div>
              <div className="card-body statistics__card-body">
                <h1 class="card-title">{eventCount.countUp}</h1>
                <p className="card-text">فعالية</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className="card statistics__card"
              onMouseOver={appCount.start}
              onMouseLeave={() => appCount.update(200)}
            >
              <div className="statistics__card-img">
                <img className="card-img-top" src={apps} alt="Card image cap" />
              </div>
              <div className="card-body statistics__card-body">
                <h1 class="card-title">{appCount.countUp}</h1>
                <p className="card-text">تطبيق جوال</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
