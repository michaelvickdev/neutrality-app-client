// // // // // // // // // // // // 
//
//	Candidates Services
//
// // // // // // // // // // // // 

import { 
    setCurrentState, 
    getCandidates, 
    displayCandidates, 
    clearCandidates 
} from 'actions/map';
import { getFullName } from 'utils/states';

let store;


export function updateState(state) {
    store.dispatch(setCurrentState(state));
    store.dispatch(clearCandidates);
    store.dispatch(getCandidates(getFullName(state)));
    store.dispatch(displayCandidates());
};


export default function(storeObj) {
    store = storeObj;

    // store.subscribe(() => {
    //     // let state = store.getState();
    //     // console.log(state.protectedData);
    // });
}