import React from "react";
import { connect } from "react-redux";
import Planing from "./Planing";
class EventDetails extends React.Component {
  render() {
    const { img, video, title, des } = this.props.event;
    console.log(this.props.event);
    return (
      <section className="details py-5">
        <div className="container">
          <div
            className="details__header  mb-5"
            style={{
              backgroundImage: `url(${img})`,
            }}
          ></div>
          <div className="row  ">
            <div className="col-md-6">
              <h5 className="text-right pb-2">{title}</h5>
              <p className="lead text-right">{des}</p>
            </div>
            <div className="col-md-6">
              <div class="embed-responsive embed-responsive-16by9 ">
                <iframe
                  width="560"
                  height="315"
                  src={video}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-5">
            <Planing />
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  const {eventId}=state
  return {
    event: state.allData5[eventId-1],
  };
};
export default connect(mapStateToProps)(EventDetails);
