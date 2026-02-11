## ⏱️ Rate-Limited API Requests — React Interview Problem

**Difficulty:** ⭐⭐⭐⭐☆ (Medium → Hard)
**Category:** Async Control · Performance · Networking · React Hooks

---

## 🎯 Problem Statement

Build a **rate-limited API request mechanism** that prevents making too many API calls within a short time window.

This is commonly required to:

* Prevent API throttling
* Reduce backend load
* Avoid accidental request storms
* Respect third-party API limits

The solution should work **on the frontend** and be reusable.

---

## 🧩 Functional Requirements

### 1. Rate Limit Definition

* Allow **N requests per time window**
* Example:

  * Max **5 requests per 10 seconds**

---

### 2. Request Control

* When rate limit is reached:

  * Block new requests **or**
  * Queue them for later execution
* No requests should exceed the defined limit

---

### 3. Request Execution

* Allowed requests should execute immediately
* Blocked/queued requests should wait until:

  * Time window resets
  * Slot becomes available

---

### 4. UI Feedback (Bonus)

* Show rate-limit status:

  * “Request sent”
  * “Rate limit exceeded”
  * “Retry after X seconds”

---

### 5. Cleanup & Safety

* No memory leaks
* Timers cleaned up properly
* Requests must not execute after unmount

---

## 🧠 API / Hook Design

The solution should be reusable, for example:

```js
const rateLimitedFetch = useRateLimitedRequest({
  limit: 5,
  interval: 10000,
});
```

Usage:

```js
rateLimitedFetch(() => fetch("/api/data"));
```

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Within Limit

**Scenario**

* 3 requests fired quickly (limit = 5)

**Expected**

* All requests execute immediately

---

### ✅ Test Case 2: Exceed Limit

**Scenario**

* 6 requests fired within window

**Expected**

* First 5 execute
* 6th is blocked or queued

---

### ✅ Test Case 3: Window Reset

**Scenario**

* After time window expires

**Expected**

* New requests are allowed

---

### ❌ Test Case 4: Memory Leak

**Scenario**

* Component unmounts during rate-limit window

**Expected**

* Timers cleared
* No delayed execution

---

### ❌ Test Case 5: Duplicate Execution

**Scenario**

* Queued requests release

**Expected**

* Each request runs exactly once

---

## 🧠 Key Concepts Being Tested

| Concept         | Why                         |
| --------------- | --------------------------- |
| Rate limiting   | Prevent API abuse           |
| Queuing logic   | Deferred execution          |
| Closures & refs | Preserve request state      |
| Timers          | Window reset handling       |
| Async control   | Predictable execution order |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Using `useState` for counters that change rapidly
❌ Forgetting to reset the rate window
❌ Allowing requests after unmount
❌ Executing queued requests multiple times
❌ Hard-coding API logic into components

---

## 🎨 Example Use Cases

* Search autocomplete APIs
* Infinite scroll data fetching
* Analytics/event tracking
* Public API integrations
* AI / LLM API calls

---

## ⚙️ Technical Constraints

* React functional components only
* No external rate-limiting libraries
* Must handle async requests safely
* Reusable logic preferred (hook or utility)
* Clean and readable implementation

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct rate-limit logic
* Queue handling (if implemented)
* Async correctness
* Cleanup & safety
* Reusability
* Real-world applicability
