// 1. create state, action, reducer
import sampledata from "./generated.json";

// initial state
const initialState = {
    deletedArray: sampledata,

    data: sampledata
};

// actions
export let adduser = (userData) => ({ type: 'ADDUSER', userData: userData});
export let deleteuser = (newarray, deletedArray) => ({ type: 'DELETEUSER', newarray: newarray, deletedArray: deletedArray });
export let searchuser = (newarray) => ({ type: 'searchuser', newarray: newarray });

// reducer
export const counterR = (state = initialState, action) => {
    switch (action.type) {
        case 'ADDUSER':
            return {

                data: [...state.data, action.userData],

                deletedArray: [...state.deletedArray, action.userData]

            };

        case 'DELETEUSER':
            return {
                data: action.newarray,
                deletedArray: action.deletedArray
            };

        case 'searchuser':
            return {
                data: action.newarray,
                deletedArray: state.deletedArray
            };

        default:
            return initialState;
    }
};