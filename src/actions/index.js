export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchStart = () => {
    return ({type:FETCH_START});
}
export const fetchSuccess = (user) => {
    return ({type:FETCH_START, payload:user});
}
export const fetchFail = (error) => {
    return ({type:FETCH_START, payload:error});
}