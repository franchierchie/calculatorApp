import { ACTIONS } from "./CalculatorApp"

export const DigitButton = ({ dispatch, digit }) => {
  return (
    <button 
        className="button number"
        onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit }} )}
    >
        { digit }
    </button>
  )
}
