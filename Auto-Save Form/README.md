## 💾 Auto-Save Form — Save on Idle (React Interview Problem)

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** Side Effects · Debouncing · UX · React Hooks

---

## 🎯 Problem Statement

Build an **Auto-Save Form** that automatically saves user input **after the user stops typing for a short period** (idle time), instead of requiring a manual save button.

This pattern is commonly used in:

* Google Docs–style editors
* Draft emails
* Profile settings forms
* Note-taking apps

---

## 🧩 Functional Requirements

### 1. Form Inputs

* One or more controlled form inputs (e.g., text, textarea)
* Input values stored in React state

Example:

```js
const [value, setValue] = useState("");
```

---

### 2. Idle Detection

* Auto-save should trigger **only after the user stops typing**
* Use a delay (e.g., 500–1000 ms)
* Reset the timer on every keystroke

---

### 3. Save Behavior

* Save function should be called only when:

  * Input value changes
  * User is idle for the configured delay
* No unnecessary saves while typing

---

### 4. UI Feedback

* Show save status:

  * “Saving…”
  * “Saved”
* Optional timestamp of last save

---

### 5. Performance & Cleanup (Bonus)

* Cancel pending save on new input
* Clean up timers on unmount
* Avoid memory leaks

---

## 🧠 Component / State Design

Recommended state structure:

```js
const [value, setValue] = useState("");
const [status, setStatus] = useState("idle"); // idle | saving | saved
```

Timers should **not** live in state.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Typing Continuously

**Scenario**

* User types without stopping

**Expected**

* Auto-save does NOT trigger

---

### ✅ Test Case 2: User Stops Typing

**Scenario**

* User types and pauses for 800ms

**Expected**

* Save function is triggered once

---

### ✅ Test Case 3: Multiple Edits

**Scenario**

* User types → pauses → types again

**Expected**

* Auto-save triggers once per pause
* No duplicate saves

---

### ❌ Test Case 4: Memory Leak

**Scenario**

* Component unmounts during typing

**Expected**

* Timers are cleaned up
* No state updates after unmount

---

### ❌ Test Case 5: Redundant Saves

**Scenario**

* Input value unchanged

**Expected**

* Save function is NOT called

---

## 🧠 Key Concepts Being Tested

| Concept           | Why                              |
| ----------------- | -------------------------------- |
| Debouncing        | Save only after idle             |
| `useEffect`       | Side-effect management           |
| Cleanup functions | Prevent memory leaks             |
| Controlled inputs | Reliable state sync              |
| UX optimization   | Reduce unnecessary network calls |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Saving on every keystroke
❌ Using `setInterval` instead of debounce
❌ Forgetting to clear timers
❌ Storing timers in state
❌ Triggering save on initial render

---

## 🎨 Example Use Cases

* Draft email auto-save
* Blog editor drafts
* Profile form auto-save
* Notes app
* Settings pages

---

## ⚙️ Technical Constraints

* React functional components only
* No external debounce libraries
* Must use `useEffect`
* Proper cleanup required
* Clean and readable logic

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct debounce implementation
* Proper effect cleanup
* UX awareness
* State management clarity
* Edge-case handling
