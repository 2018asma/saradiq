import React from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import Event from "./Event";
import {connect} from 'react-redux'
import {eventInfo} from '../actions'


const CurrentEvents = (props) => {
  return (
    <section className="current pt-5">
      <h2 className="heading-secondary u-margin-bottom current__heading ">
        الفعاليات الحالية
      </h2>
      <div className="container-fluid">
        <div className="row current__cards-box">
          {props.data.map((event) => 
            <div onClick={()=>props.eventInfo(event.id)}>
              <Event title={event.title} id={event.id} img={event.img} />
            </div>
          )}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

const  mapStateToProps =(state)=>{
  return{
    data:state.allData5
  }
}

export default connect(mapStateToProps,{
  eventInfo,
})(CurrentEvents);

/* <div className="col-lg-3  col-md-4 current__card current__card--2">
            <img src={play} alt="" />
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--3">
          <img src={play} alt="" />
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--4">
            <img src={play} alt="" />
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--4">
            <img src={play} alt="" />
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--3">
            <img src={play} alt="" />
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--2">
            <img src={play} alt="" />
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--1">
            <img src={play} alt="" />
          </div> */

/* 


          <div className="col-lg-3  col-md-4 current__card current__card--1">
            <div className="current__side">
            </div>
            <Link to='/events/1'>

            <div className="overlay">

              <div className="text"> WWE Super Showdown
             </div>
            </div>
            </Link>
          </div>

          <div className="col-lg-3  col-md-4 current__card current__card--2">
            <div className="current__side">
            </div>
            <div className="overlay">
              <div className="text">  شدو (shaadoow)

              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--3">
            <div className="current__side">
            </div>
            <div className="overlay">
              <div className="text"> بطولة شتاء الرياض للبلوت</div>
            </div>
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--4">
            <div className="current__side">
            </div>
            <div className="overlay">
              <div className="text">  بيبي شارك مسرحية
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--5">
            <div className="current__side">
            </div>
            <div className="overlay">
              <div className="text"> ووش</div>
            </div>
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--6">
            <div className="current__side">
            </div>
            <div className="overlay">
              <div className="text"> حلبة التزلج
   
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--7">
            <div className="current__side">
            </div>
            <div className="overlay">
              <div className="text"> حدوتة مصرية
              </div>
            </div>
          </div>
          <div className="col-lg-3  col-md-4 current__card current__card--8">
            <div className="current__side">
            </div>
            <div className="overlay">
              <div className="text"> الخدع الورقية
              </div>
            </div>
          </div>
*/
