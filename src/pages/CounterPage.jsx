import { useReducer } from "react";
import produce from "immer";
import './counterPage.css'

const INCREMENT_COUNT = 'increment'; 
const DECREMENT_COUNT = 'decrement'; 
const SET_VALUE_TO_ADD = 'change_value_to_add'; 
const ADD_VALUE_TO_COUNT = 'add_value_to_count'; 



const reducer = (state, action) => {

    switch(action.type) {
        case INCREMENT_COUNT:
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count = state.count - 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return;
    }
};

const CounterPage = ({ initialCount }) => {

    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT,
        });
    };

    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT,
        });
    };

    const handleChange = (e) => {
        const value = parseInt(e.target.value) || 0;
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value 
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
    };

  return (
    <div className="container">
        <div className="counter">
            <h1>Count is {state.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <form className="form" onSubmit={handleSubmit}>
                <input 
                type="number"
                value={state.valueToAdd || ""}
                onChange={handleChange}
                />
                <button>Add it!</button>
            </form>
        </div>
    </div>
  );
};

export default CounterPage;