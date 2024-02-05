import {createStore} from 'redux';

const reducerFunction = (state={counter: 0, stopdisplay: false}, action) => {
    // shoule be a synchronous function 
    // we should not mutate the orginal state 
    if(action.type === "INC"){
        return {counter: state.counter+1, stopdisplay: state.stopdisplay}
    }else if(action.type === "DEC"){
        return {counter: state.counter-1, stopdisplay: state.stopdisplay}
    }else if(action.type === "ADD"){
        return {counter: state.counter+action.payload, stopdisplay: state.stopdisplay}
    }else if(action.type === "SUB"){
        return {counter: state.counter-action.payload, stopdisplay: state.stopdisplay}
    }else if(action.type === "TOGGLE"){
        return {counter: state.counter, stopdisplay: !state.stopdisplay}
    }
    return state;
}


const counterStore = createStore(reducerFunction)


export default counterStore;