## 📝 useReducer Form State — React Interview Problem

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** React Hooks · State Management · Forms

---

## 🎯 Problem Statement

Build a form state management solution using **`useReducer`** to handle **complex forms** with multiple fields, validation, and state transitions in a predictable way.

This approach is commonly used when:

* Forms have many inputs
* Validation logic is non-trivial
* State updates depend on previous state
* `useState` becomes hard to manage

---

## 🧩 Functional Requirements

### 1. Form State Structure

The form state should support:

* Multiple input fields
* Field values
* Validation errors
* Submission state (loading / submitted)

Example shape:

```js
{
  values: {},
  errors: {},
  isSubmitting: false
}
```

---

### 2. Actions

The reducer should handle actions such as:

* Updating a field value
* Setting validation errors
* Resetting the form
* Handling submit start / success / failure

---

### 3. State Updates

* All state changes must go through the reducer
* State updates must be predictable and immutable
* Logic must be centralized in the reducer function

---

### 4. Validation Handling

* Support synchronous validation
* Store validation errors in state
* Clear errors when inputs are corrected

---

### 5. Performance (Bonus)

* Avoid unnecessary re-renders
* Avoid creating multiple `useState` hooks
* Keep state logic centralized and testable

---

## 🧠 Hook / Pattern API Design

The form should be managed like this:

```js
const [state, dispatch] = useReducer(formReducer, initialState);
```

Field update example:

```js
dispatch({
  type: "UPDATE_FIELD",
  field: "email",
  value: "test@example.com"
});
```

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Update Field Value

**Scenario**

* User types into an input field

**Expected**

* Corresponding field value updates in state
* Other fields remain unchanged

---

### ✅ Test Case 2: Validation Error

**Scenario**

* User submits form with invalid data

**Expected**

* Errors object is populated
* Form submission is blocked

---

### ✅ Test Case 3: Clear Error on Fix

**Scenario**

* User fixes an invalid input

**Expected**

* Error for that field is removed

---

### ✅ Test Case 4: Form Submit

**Scenario**

* User submits a valid form

**Expected**

* `isSubmitting` becomes `true`
* Submission state is handled correctly

---

### ❌ Test Case 5: Reset Form

**Scenario**

* User resets the form

**Expected**

* State returns to initial values
* Errors are cleared
* Submission state resets

---

## 🧠 Key Concepts Being Tested

| Concept      | Why                            |
| ------------ | ------------------------------ |
| `useReducer` | Predictable state transitions  |
| Actions      | Explicit state changes         |
| Immutability | Safe state updates             |
| Form logic   | Real-world complexity handling |
| State design | Scalable form architecture     |
| Validation   | Controlled error management    |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Using many `useState` hooks for each input
❌ Mixing validation logic inside components
❌ Mutating state inside reducer
❌ Over-engineering reducer actions
❌ Not resetting form correctly

---

## 🎨 Example Use Cases

* Login / Signup forms
* Multi-step forms
* Admin dashboards
* Settings pages
* Forms with conditional fields

---

## ⚙️ Technical Constraints

* React functional components only
* Must use `useReducer`
* No external form libraries
* Reducer must be pure
* Clean and readable action types

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Proper use of `useReducer`
* Reducer clarity and predictability
* Action design
* Validation handling
* Code readability
* Real-world applicability
