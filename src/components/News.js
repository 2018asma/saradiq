import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import InstagramEmbed from "react-instagram-embed";

const News = () => {
  return (
    <section className="news ">
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="news__twitter-img twitter-img"></div>
        </div>
        <div className="col-md-6  px-0">
          <div className="news__twitter-timline py-5">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="saradiqsa"
              options={{
                height: "400",
              }}
              theme="light"
              noHeader="true"
              noBorders="true"
              noFooter="true"
            ></TwitterTimelineEmbed>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 px-0">
          <div className="news__instagram-timeline py-5">
            <InstagramEmbed
              url="https://www.instagram.com/p/CAjaTJAjpUn"
              maxWidth={320}
              hideCaption={false}
              containerTagName="div"
              protocol=""
              injectScript
              onLoading={() => {}}
              onSuccess={() => {}}
              onAfterRender={() => {}}
              onFailure={() => {}}
            />
          </div>
        </div>
        <div className="col-md-6 px-0">
          <div className="news__instagram-img instagram-img"></div>
        </div>
      </div>
    </section>
  );
};

export default News;

/* <div className="">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="saradiqsa"
              options={{
                height: "400",
              }}
              theme="light"
              noHeader="true"
              noBorders="true"
              noFooter="true"
            ></TwitterTimelineEmbed>
          </div> */
