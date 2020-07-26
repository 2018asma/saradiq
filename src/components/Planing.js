import React from "react";
import { connect } from "react-redux";
import { selectSeat } from "../actions";
class Planing extends React.Component {
  state = {
    a: null,
  };

  showFeatures = (feature, price) => {
    return (
      <ul  className='feature mt-3 d-flex flex-column  justify-content-center'>
        <li className=''>{feature}</li>
        <li className=''>{price} ريال</li>
      </ul>
    );
  };

  render() {
    const { locations } = this.props.event;

    const {event} =this.props
    return (
      <div className="planing d-flex flex-wrap " style={{ width: "200px" }}>
        {locations.map((location) => {
          return (
            <div
              
              className="planing__icon-box mb-2"
              style={{ width: "33.333px" }}
              onMouseOver={() => {
                this.setState({a:location.id})
            }}
             onMouseOut={()=>{
                this.setState({a:null})
            }} 
            >
              <i
                onClick={()=>this.props.selectSeat(event,location.id)}
                className={`planing__icon-${location.satus} fa fa-user fa-lg`}
              ></i>
              {this.state.a===location.id?
                this.showFeatures(location.feature,location.price):
                null
            }
            </div>
          );
        })}
      </div>
    );
  }
}
const maStateToProps = (state) => {
  const {eventId}=state

  return {
    event:state.allData5[eventId-1]
  };
};

export default connect(maStateToProps, {
  selectSeat,
})(Planing);
