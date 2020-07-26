import {combineReducers} from 'redux';
import {allData5, eventId} from './data'
import authReducer from './authReducer'

 export  default combineReducers({
    allData5,
    eventId,
    auth:authReducer,
})


/* export const event = (state = null, action) => {
  switch (action.type) {
    case "EVENT_INFO":
      return action.payload;
     case "SELECT_SEAT":
       console.log(state)
      return {
        ...state,
        locations: state.locations.map((lo) =>
          lo.id === action.id ? { ...lo, satus: 'yours' } : lo
        ),
      }; 
    default:
      return state;
  }
};
 */