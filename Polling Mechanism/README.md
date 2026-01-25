# 💡 **Polling Mechanism — Requirements**

## 🎯 **Problem Statement**

Build a **polling mechanism** that periodically calls an API every **N seconds** to fetch updated data.

The polling must:

* Start automatically
* Stop cleanly when the component unmounts
* Avoid memory leaks or duplicate intervals

---

## 🧩 **Functional Requirements**

### 1. API Polling

* Fetch data from an API endpoint
* Poll every **N seconds** (configurable)
* Use the **latest response** to update the UI

---

### 2. Timing Behavior

* Polling should:

  * Start when the component mounts
  * Repeat at fixed intervals (`N` seconds)
* If `N` changes:

  * Polling should restart with the new interval

---

### 3. Cleanup & Safety

* Must **clean up** the polling when:

  * Component unmounts
  * Polling interval changes
* ❌ No memory leaks
* ❌ No multiple intervals running at once

---

### 4. UI States

* Show **loading** state for first fetch
* Show **error** if API fails
* Show **latest fetched data**

---

### 5. Optional Controls (Bonus)

(These may or may not be required — depends on interviewer)

* Start / Stop polling button
* Manual refresh button
* Pause polling when tab is inactive

---

## 🧠 **State Management Expectations**

You should be able to explain:

* Where the interval ID is stored
* Why cleanup is mandatory
* Why polling logic belongs in `useEffect`
* What happens if dependencies change

Hints (not solutions):

* Think in terms of **side effects**
* Use **cleanup functions**
* Avoid storing interval IDs in state
* Understand **closure behavior**

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Initial Mount

**Expected**

* API is called immediately (or after first interval)
* Data is rendered

---

### ✅ Test Case 2: Repeated Polling

**Expected**

* API is called every `N` seconds
* UI updates with latest data

---

### ✅ Test Case 3: Component Unmount

**Expected**

* Polling stops
* No console warnings
* No extra network calls

---

### ✅ Test Case 4: Interval Change

**Action**

* Change polling interval from `5s → 2s`

**Expected**

* Old interval cleared
* New interval starts correctly

---

### ❌ Test Case 5: Duplicate Intervals

**Expected**

* Only **one active interval** at any time

---

## 🎨 **UI Requirements**

* Simple text display is enough
* Clear indication of:

  * Loading
  * Error
  * Last updated time (optional)

---

## ⚙️ **Technical Constraints**

* React functional components
* `useEffect`
* `setInterval` + `clearInterval`
* No external polling libraries
* Clean, readable logic

---

## 🗣️ **Interview Signals (Very Important)**

Interviewers look for:

* Proper cleanup
* Correct dependency handling
* Awareness of stale closures
* Understanding why polling ≠ `setTimeout` loop
