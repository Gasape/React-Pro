import { CounterAction } from "../actions/actions";
import { InitialCounterState } from "../interfaces/interfaces";

export const counterReducer = (state: InitialCounterState, action: CounterAction): InitialCounterState => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1,
                previous: state.counter,
                changes: state.changes + 1,
            }
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0,
            }
        case 'increaseBy':
            return {
                ...state,
                counter: state.counter + action.payload,
                previous: state.counter,
                changes: state.changes + 1,
            }
        default:
            return state;
    }
}