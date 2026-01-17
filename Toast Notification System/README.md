# 🍞 Toast Notification System (Stackable + Auto-Dismiss)

## 🎯 Problem Statement (Interview Style)

Build a toast notification system that:

* Shows temporary messages
* Supports multiple toasts at once (stacked)
* Automatically dismisses after a timeout
* Allows manual dismissal

---

# ✅ Functional Requirements

### 1️⃣ Toast Creation

* A toast has:

  ```js
  {
    id,
    message,
    type,      // "success" | "error" | "info"
    duration   // ms
  }
  ```
* New toasts appear **on top** or **bottom** consistently

---

### 2️⃣ Stacking

* Multiple toasts can be visible at once
* They stack vertically
* Each toast is independent

---

### 3️⃣ Auto-Dismiss

* Each toast disappears after `duration`
* Timers must be cleaned up properly

---

### 4️⃣ Manual Dismiss

* Each toast has a ❌ button
* Clicking it removes that toast immediately

---

### 5️⃣ Positioning (Optional but good)

* Top-right (most common)
* Bottom-right
* Center

---

# 🧠 State Design (MOST IMPORTANT)

### ❌ What NOT to do

* Do NOT store timers in state
* Do NOT mutate toast arrays
* Do NOT rely on array index as id

---

### ✅ Minimum State

```js
const [toasts, setToasts] = useState([]);
```

That’s it.

Each toast object contains its own metadata.

---

# 🧩 Toast Lifecycle (Key Insight)

### Adding a toast

```
addToast → push toast into array → schedule removal
```

### Removing a toast

```
removeToast(id) → filter it out
```

Timers should be created **when the toast mounts**, not globally.

---

# 🧪 Edge Cases Interviewers LOVE

* Rapidly adding many toasts
* Different durations per toast
* Removing toast before timeout
* Cleanup on unmount
* Stable animation when stack changes

---

# 🚀 Implementation Order (DO THIS IN ORDER)

### Step 1️⃣

Basic Toast component (message + close button)

### Step 2️⃣

Toast container with stacking

### Step 3️⃣

Auto-dismiss using `useEffect`

### Step 4️⃣

Expose `addToast` via context

### Step 5️⃣

Add transitions (optional)

---

# 🔥 Common Mistakes (Avoid These)

❌ Using `setTimeout` in parent for all toasts
❌ Using array index as toast id
❌ Forgetting cleanup on unmount
❌ Mutating state directly
❌ Overengineering too early

---

# ⭐ Difficulty Level (Interview)

| Level  | Verdict |
| ------ | ------- |
| Junior | ❌       |
| Mid    | ✅       |
| Senior | ⭐⭐⭐     |

This is **mid-to-senior frontend territory**.
