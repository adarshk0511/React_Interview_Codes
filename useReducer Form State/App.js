import { useReducer } from "react";
import { formReducer, initialState, ACTIONS } from "./hooks/formReducer";
import "./styles.css";

export default function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: ACTIONS.UPDATE_FIELD,
      field: name,
      value,
    });
  };

  function validate(values) {
    const errors = [];

    if (!values.email) {
      errors.email = "Email is required";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("in");
    const errors = validate(state.values);

    if (Object.keys(errors).length > 0) {
      dispatch({ type: ACTIONS.SET_ERRORS, errors });
      return;
    }

    dispatch({ type: ACTIONS.SUBMIT_START });

    setTimeout(() => {
      alert("Form Submitted" + state.value);
      dispatch({ type: ACTIONS.SUBMIT_SUCCESS });
    }, 1000);
  };
  return (
    <div className="App">
      <h1>useReducer Form State</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          value={state.values.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {state.errors.email && <p>{state.errors.email}</p>}
        <input
          type="text"
          name="password"
          value={state.values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {state.errors.password && <p>{state.errors.password}</p>}

        <button disabled={state.isSubmitting}>
          {state.isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
