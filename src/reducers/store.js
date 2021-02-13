import {state} from "./state";
const {createStore} = redux;

const store = createStore(reducers);
export default store;
store.subsrcibe(() => {
    console.log(store.getState());
})