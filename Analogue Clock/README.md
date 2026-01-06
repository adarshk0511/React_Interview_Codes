# 🕰️ **Analog Clock — React Interview Problem**

## 🎯 **Problem Statement**

Build an **analog clock component** that visually represents the **current time** using rotating hour, minute, and second hands, updating in real time like a physical clock.

---

## 🧩 **Functional Requirements**

### 1. Clock Face

* Circular clock face
* Clearly visible center pivot
* Optional hour markers (12, 3, 6, 9)

---

### 2. Clock Hands

You must render **three hands**:

* **Hour hand**
* **Minute hand**
* **Second hand**

Each hand:

* Rotates around the center
* Has a distinct length and thickness
* Moves smoothly (or per second for seconds hand)

---

### 3. Time Source

* Use the **current system time**
* Clock must stay in sync with real time

---

### 4. Hand Movement Rules

| Hand        | Rotation Formula                            |
| ----------- | ------------------------------------------- |
| Second hand | `(seconds / 60) * 360`                      |
| Minute hand | `(minutes / 60) * 360 + (seconds / 60) * 6` |
| Hour hand   | `(hours / 12) * 360 + (minutes / 60) * 30`  |

> Hour hand must move **smoothly**, not jump every hour.

---

### 5. Update Frequency

* Clock should update:

  * At least once per second
  * Optionally smoother using smaller intervals
* Only **one timer** should run

---

## 🧠 **State Requirements**

You may store:

* Current `Date` object **OR**
* Individual time units (hours, minutes, seconds)

Avoid duplicated or derived state where possible.

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Expected**

* Clock shows correct current time
* Hands positioned correctly on load

---

### ✅ **Test Case 2: Real-Time Update**

**Expected**

* Second hand advances every second
* Minute and hour hands adjust smoothly

---

### ❌ **Test Case 3: Multiple Timers**

**Expected**

* Only one interval is active
* No accelerated hand movement

---

### ❌ **Test Case 4: Component Unmount**

**Expected**

* Timer is cleared
* No memory leaks
* No state updates after unmount

---

### ❌ **Test Case 5: Time Accuracy**

**Expected**

* Clock remains accurate over time
* No visible drift after several minutes

---

## 🎨 **UI Requirements**

* Clock is centered
* Hands rotate from center origin
* Smooth CSS transitions (optional)
* Responsive scaling
* Clear contrast between hands

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* Use **useEffect**
* Use CSS transforms (`rotate`)
* No external date/time libraries
* No canvas (pure HTML/CSS)

* Math correctness
* React patterns
* Cleanup logic
* Visual accuracy
  — exactly like a frontend interview.
