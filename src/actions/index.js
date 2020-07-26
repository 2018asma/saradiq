export const eventInfo=(payload)=>{
    return{
        type:'EVENT_INFO',
        payload,
    }
}
export const fetchData=(payload)=>{
    return{
        type:'FETCH_DATA',
        payload,
    }
}
export const selectSeat=(event,id)=>{
    return{
        type:"SELECT_SEAT",
        id,
        event,
    }
}
export const signIn=(userId)=>{
    return{
        type:"SIGN_IN",
        payload:userId
    }
}
export const signOut=()=>{
    return{
        type:"SIGN_OUT"
    }
}