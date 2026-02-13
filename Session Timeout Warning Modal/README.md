## ⏳ Session Timeout Warning Modal — React Interview Problem

**Difficulty:** ⭐⭐⭐⭐☆ (Medium → Hard)
**Category:** Timers · Side Effects · UX · State Management · Security Awareness

---

## 🎯 Problem Statement

Build a **Session Timeout Warning Modal** that:

* Detects user inactivity
* Shows a warning modal before session expiration
* Logs the user out if no action is taken
* Resets timer on user activity

This pattern is commonly used in:

* Banking apps
* Admin dashboards
* Healthcare systems
* Enterprise SaaS platforms

---

## 🧩 Functional Requirements

### 1️⃣ Inactivity Detection

* Detect user inactivity (no mouse, keyboard, scroll, etc.)
* Start inactivity timer when component mounts
* Reset timer on user activity

Example inactivity duration:

```js
INACTIVITY_LIMIT = 30 seconds
```

---

### 2️⃣ Warning Modal

* Show modal **before actual logout**
* Example:

```
Inactivity: 25 seconds
Warning: Show modal at 20 seconds
Logout at: 30 seconds
```

Modal should display:

* Countdown timer
* “Stay Logged In” button

---

### 3️⃣ Auto Logout

If user does not respond:

* Automatically trigger logout
* Clear timers
* Close modal

---

### 4️⃣ Activity Reset

If user clicks “Stay Logged In”:

* Close modal
* Reset inactivity timer
* Continue session

---

### 5️⃣ Cleanup & Safety

* Clear all timers on unmount
* Prevent duplicate timers
* Avoid memory leaks

---

## 🧠 Component / State Design

Recommended state:

```js
const [showModal, setShowModal] = useState(false);
const [countdown, setCountdown] = useState(0);
```

Use refs for:

```js
const inactivityTimerRef = useRef(null);
const countdownTimerRef = useRef(null);
```

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Activity Reset

**Scenario**

User moves mouse before timeout

**Expected**

Timer resets

---

### ✅ Test Case 2: Warning Trigger

**Scenario**

User inactive for warning threshold

**Expected**

Modal appears with countdown

---

### ✅ Test Case 3: User Stays Logged In

**Scenario**

User clicks “Stay Logged In”

**Expected**

Modal closes
Timers reset

---

### ✅ Test Case 4: No Response

**Scenario**

User ignores modal

**Expected**

Logout triggered

---

### ❌ Test Case 5: Unmount

**Scenario**

Component unmounts

**Expected**

Timers cleared
No memory leaks

---

## 🧠 Key Concepts Being Tested

| Concept              | Why                  |
| -------------------- | -------------------- |
| `useEffect`          | Timer lifecycle      |
| `useRef`             | Stable timer storage |
| Event listeners      | Activity detection   |
| Cleanup              | Prevent leaks        |
| UX state transitions | Modal handling       |
| Timer coordination   | Warning vs logout    |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Creating multiple overlapping timers
❌ Forgetting to clear timers
❌ Using state for timer IDs
❌ Not resetting timers properly
❌ Triggering logout multiple times

---

## 🎨 Example Use Cases

* Online banking inactivity timeout
* Corporate dashboards
* Secure admin panels
* SaaS authentication sessions

---

## ⚙️ Technical Constraints

* React functional components only
* No external timeout libraries
* Must use proper cleanup
* Clean separation of timer logic
* Realistic UX behavior

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Timer management correctness
* Proper inactivity detection
* Clean state transitions
* Memory safety
* Real-world thinking
* Edge-case awareness
