import {GET_USERS} from '../types'

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_USERS:
        return {
            ...state, //to have a copy from the object
            users:action.payload, //update users[]
            loading:false //update loading

        };
       
        default: return state
    }

}