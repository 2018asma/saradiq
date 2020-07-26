import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {eventInfo} from '../actions'
class Event extends React.Component {
  state = {};
  
  render() {
    return (
      <div className="col-lg-3  col-md-4    p-0">
        <div
          className={`current__card current__card--${this.props.id}`}
        >
          <div className="current__side">
            <img src={this.props.img} alt="" />
          </div>
          <Link to='/e'>
            <div className="overlay">
              <div className="text">{this.props.title}</div>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

const  mapStateToProps =(state)=>{
  return{
    
  }
}

export default connect(mapStateToProps)(Event);
