import data from "../data.json";
import { bindActionCreators } from "redux";


export const allData5 = (state = data.events, action) => {
  switch (action.type) {
    case "SELECT_SEAT":
      const { id } = action.event;
      return state.map((event) =>
        event.id === id
          ? {...event,locations:event.locations.map((location) => {
            const s=location.satus

          return  location.id === action.id
              ? { ...location, satus:s==='available'?'busy':s }
              : location
          })}
          : event
      );
    default:
      return state;
  }
};

export const eventId = (state = null, action) => {
  switch (action.type) {
    case "EVENT_INFO":
      return action.payload;
    default:
      return state;
  }
}; 

 
/* 

event.locations.map((location) => 
              location.id === action.id
                ? { ...location, satus: "55555555555555555555555" }
                : location
            )
 */