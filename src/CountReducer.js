import { useReducer } from "react"

const counterReducer  = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return{
                ...state,
                count: state.count + 1
            }
        case "DECREMENT":
            return{
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}

const CountReducer = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })

    return(
        <div>
            <p>Count:{state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT"})}>Increment</button>
            <button onClick={() => dispatch({ type: "DECREMENT"})}>Decrement</button>
        </div>
    )
}

export default CountReducer;