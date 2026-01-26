# 💡 **Retry Logic for API Calls — Exponential Backoff**

---

## 🎯 **Problem Statement**

Build a mechanism that **retries a failed API request** automatically using **exponential backoff**.

If the API keeps failing:

* Wait longer between each retry
* Stop retrying after a maximum number of attempts
* Surface a clear error state to the user

---

## 🧩 **Functional Requirements**

### 1. API Request

* Make an API request (real or mocked)
* The request may **fail intermittently**
* Failure should trigger retry logic

---

### 2. Retry Behavior

* Retry the request automatically when it fails
* Retry attempts should be **limited** (e.g. max 3–5 retries)

---

### 3. Exponential Backoff Timing

* Delay should **increase exponentially** after each failure

Example pattern:

```
Attempt 1 → wait 1s
Attempt 2 → wait 2s
Attempt 3 → wait 4s
Attempt 4 → wait 8s
```

Formula hint:

```
delay = baseDelay × (2 ^ attemptNumber)
```

---

### 4. Termination Conditions

Stop retrying when:

* Request succeeds ✅
* Maximum retries reached ❌

---

### 5. UI States

You must show:

* **Loading** (while retrying)
* **Retry count** (optional but impressive)
* **Success** (when data is received)
* **Failure** (after all retries exhausted)

---

## 🧠 **State Management Expectations**

You should be able to explain:

* How retry count is tracked
* Why retry logic should not cause infinite loops
* Why `setTimeout` is preferred over `setInterval`
* How exponential backoff avoids server overload

Hints (not solutions):

* Think **recursive or loop-based retry**
* Avoid retrying inside render
* Avoid retrying in dependency loops
* Delay logic should be **outside state updates**

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Immediate Success

**Expected**

* API succeeds on first try
* No retries
* UI shows success

---

### ❌ Test Case 2: Temporary Failure

**Expected**

* API fails initially
* Retries with increasing delays
* Eventually succeeds
* UI updates correctly

---

### ❌ Test Case 3: Permanent Failure

**Expected**

* API fails all attempts
* Retries stop after max attempts
* UI shows error state

---

### ❌ Test Case 4: Cleanup Safety

**Action**

* Component unmounts mid-retry

**Expected**

* No state updates after unmount
* No memory leaks

---

## 🎨 **UI Requirements**

* Simple UI is enough
* Must clearly indicate:

  * Attempt number
  * Retry delay (optional)
  * Final status

---

## ⚙️ **Technical Constraints**

* React functional components
* `useEffect`
* `setTimeout`
* No external retry libraries
* No infinite loops
* Clean cleanup logic

---

## 🗣️ **Interview Signals (Very Important)**

Interviewers are looking for:

* Understanding of **network instability**
* Controlled retry strategy
* Awareness of **server load**
* Avoidance of naive retry loops

---

## 🧠 **Conceptual Hint (Very Important)**

> Polling ≠ Retry
> Retry is **reactive**, polling is **proactive**

Retry only happens **after failure**, not on a fixed schedule.

----grade frontend architecture** — excellent choice 🔥
