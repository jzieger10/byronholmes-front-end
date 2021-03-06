import axios from 'axios';

export const FETCHING_INV = "FETCHING_INV";
export const FETCH_INV_SUCCESS = "FETCH_INV_SUCCESS";
export const FETCH_INV_FAILURE = "FETCH_INV_FAILURE";
export const FETCHING_INV_ITEM = "FETCHING_INV_ITEM";
export const FETCH_INV_ITEM_SUCCESS = "FETCH_INV_ITEM_SUCCESS";
export const FETCH_INV_ITEM_FAILURE = "FETCH_INV_ITEM_FAILURE";
export const POSTING_INV = "POSTING_INV";
export const POST_INV_SUCCESS = "POST_INV_SUCCESS";
export const POST_INV_FAILURE = "POST_INV_FAILURE";
export const DELETING_INV = "DELETING_INV";
export const DELETE_INV_SUCCESS = "DELETE_INV_SUCCESS";
export const DELETE_INV_FAILURE = "DELETE_INV_FAILURE";
export const UPDATING_INV = "UPDATING_INV";
export const UPDATE_INV_SUCCESS = "UPDATE_INV_SUCCESS";
export const UPDATE_INV_FAILURE = "UPDATE_FAILURE";


export const getInv = () => {
  axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");
    const promise = axios.get(`https://ill-serve-soup2-db.herokuapp.com/api/inventory`);
    return dispatch=>{
      dispatch({type: FETCHING_INV});
      promise
        .then(response=>{
          console.log(response.data)
          dispatch({type:FETCH_INV_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: FETCH_INV_FAILURE})})


    }
}
export const getItem = (id) => {
    const promise = axios.get(`https://ill-serve-soup2-db.herokuapp.com/api/inventory/${id}`);
    return dispatch=>{
      dispatch({type: FETCHING_INV_ITEM});
      promise
        .then(response=>{
          dispatch({type:FETCH_INV_ITEM_SUCCESS, payload: response.data})
        })
        .catch(err=>{
          dispatch({type: FETCH_INV_ITEM_FAILURE})})


    }
}
export const addInv = (item) => {

    const promise = axios.post(`https://ill-serve-soup2-db.herokuapp.com/api/inventory`, item)
    return dispatch=>{
      console.log('in addInv')
      dispatch({type:POSTING_INV});
      promise
        .then(response=>{
          console.log('response')
          console.log(response.data)
          dispatch({type: POST_INV_SUCCESS, payload: item})
        })
        .catch(err=>{
          dispatch({type: POST_INV_FAILURE})
        })
    };
}

export const deleteInv = (index, invId) => {
    const promise = axios.delete(`https://ill-serve-soup2-db.herokuapp.com/api/inventory/${invId}`)
    return dispatch=>{

      dispatch({type: DELETING_INV})
      promise
        .then(response=>{
          dispatch({type: DELETE_INV_SUCCESS, payload: index})
        })
        .catch(err=>{
          dispatch({type: DELETE_INV_FAILURE})
        })
    }
}
export const updateInv = (index,id, item) => {
    const promise = axios.put(`https://ill-serve-soup2-db.herokuapp.com/api/inventory/${id}`, item)
    return dispatch =>{
      dispatch({type: UPDATING_INV})
      promise
        .then(response =>{
          dispatch({type: UPDATE_INV_SUCCESS, payload: {index: index, item: item}})
        })
        .catch(err=>{
          dispatch({type: UPDATE_INV_FAILURE, error: "Error"})
        })
     }
}
