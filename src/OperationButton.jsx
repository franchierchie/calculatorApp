import { ACTIONS } from "./CalculatorApp"

export const OperationButton = ({ dispatch, operation }) => {
  return (
    <button 
        className="button action"
        onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation }} )}
    >
        { operation }
    </button>
  )
}
