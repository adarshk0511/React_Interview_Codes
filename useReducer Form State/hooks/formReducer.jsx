export const ACTIONS = {
  UPDATE_FIELD: "UPDATE_FIELD",
  SET_ERRORS: "SET_ERRORS",
  SUBMIT_START: "SUBMIT_START",
  SUBMIT_SUCCESS: "SUBMIT_SUCCESS",
  RESET_FORM: "RESET_FORM",
};

export const initialState = {
  values: {
    email: "",
    password: "",
  },
  errors: {},
  isSubmitting: false,
};

export function formReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        values: {
          ...state.values,
          [action.field]: action.value,
        },

        errors: {
          ...state.errors,
          [action.field]: undefined,
        },
      };

    case ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.errors,
      };

    case ACTIONS.SUBMIT_START:
      return {
        ...state,
        isSubmitting: true,
      };

    case ACTIONS.SUBMIT_SUCCESS:
      return {
        ...state,
        isSubmitting: false,
      };

    case ACTIONS.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}
