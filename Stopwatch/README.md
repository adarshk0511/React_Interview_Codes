# ⏱️ **Stopwatch — React Interview Problem**

## 🎯 **Problem Statement**

Build a **Stopwatch widget** that allows users to **start**, **pause**, **resume**, and **reset** a timer to measure elapsed time accurately.

---

## 🧩 **Functional Requirements**

### 1. Time Display

* Display elapsed time in the format:

  ```
  MM : SS : MS
  ```

  where:

  * MM → minutes
  * SS → seconds
  * MS → milliseconds (or centiseconds, your choice)

---

### 2. Controls

The stopwatch must provide the following buttons:

* **Start**

  * Begins counting time from `00:00:00`
* **Pause**

  * Stops time but preserves elapsed value
* **Resume**

  * Continues from paused time
* **Reset**

  * Resets time back to zero
  * Stops the timer if running

---

### 3. Timer Behavior

* Time should increment at a fixed interval (e.g. every 10ms or 100ms)
* Timer must be **accurate across pauses and resumes**
* Only **one timer** should run at any time

---

### 4. Initial State

* Stopwatch starts at `00:00:00`
* Timer is not running
* Only **Start** button is enabled

---

### 5. Button State Rules

| State       | Enabled Buttons |
| ----------- | --------------- |
| Not started | Start           |
| Running     | Pause, Reset    |
| Paused      | Resume, Reset   |

---

## 🧠 **State Requirements**

You should manage:

* Elapsed time
* Running / paused status
* Timer reference (interval id)

Avoid duplicated or derived state where possible.

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Expected**

* Time shows `00:00:00`
* Start button enabled
* Pause & Reset disabled

---

### ✅ **Test Case 2: Start Stopwatch**

**Action**

* Click Start

**Expected**

* Time begins incrementing
* Start disabled
* Pause enabled

---

### ✅ **Test Case 3: Pause Stopwatch**

**Action**

* Click Pause

**Expected**

* Time stops incrementing
* Display freezes at current value
* Resume enabled

---

### ✅ **Test Case 4: Resume Stopwatch**

**Action**

* Click Resume

**Expected**

* Time continues from paused value
* No reset occurs

---

### ✅ **Test Case 5: Reset Stopwatch**

**Action**

* Click Reset

**Expected**

* Time resets to `00:00:00`
* Timer stops
* Start enabled

---

### ❌ **Test Case 6: Multiple Starts**

**Action**

* Click Start multiple times

**Expected**

* Only one timer runs
* No acceleration of time

---

### ❌ **Test Case 7: Component Unmount**

**Expected**

* Timer is cleared
* No memory leaks
* No state updates after unmount

---

## 🎨 **UI Requirements**

* Clear and readable timer display
* Buttons clearly labeled
* Disabled buttons visually distinct
* Responsive layout

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* Use **useEffect**
* No external libraries
* No direct DOM manipulation
* Timers must be cleaned up properly
exactly like a real frontend interview.
