import { createStore } from "redux";

const counterReducer =(state={counter : 0},action)=>{
if(action.type=='add'){
    return {
        counter : state.counter + 2
    }
}
else if(action.type =='rem'){
    return {
        counter : state.counter - 2
    }
}
return state
}

const store = createStore(counterReducer)
export default store
