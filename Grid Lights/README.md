# 💡 **Grid Lights — Requirements**

## 🎯 **Problem Statement**

Build a **grid of clickable lights**.
When a light is clicked, it turns **ON**.
When deactivation starts, lights turn **OFF in the reverse order they were activated**.

This is essentially a **LIFO (stack-like) behavior** problem.

---

## 🧩 **Functional Requirements**

### 1. Grid Layout

* Render a grid of lights (e.g. `3 × 3`, `4 × 4`, or configurable).
* Each cell represents a **light**.
* Default state of every light is **OFF**.

---

### 2. Activating Lights

* Clicking a light:

  * Turns it **ON**
  * Records the order in which it was activated
* Clicking an already active light:

  * ❌ Should do nothing (no duplicate entries)

---

### 3. Deactivation Behavior

* When deactivation begins:

  * Lights must turn **OFF one by one**
  * In the **reverse order of activation**
* Deactivation should be:

  * Automatic (interval-based), OR
  * Triggered by a button (depending on your design)

---

### 4. Timing

* Deactivation should happen with a **visible delay** (e.g. 300–500ms per light)
* Lights should **not all turn off at once**

---

### 5. Interaction Rules

* Once deactivation starts:

  * Clicking lights should be **disabled**
* After all lights are OFF:

  * Interaction is enabled again

---

## 🧠 **State Management Expectations**

You must be able to answer:

* How do you track **activation order**?
* How do you prevent duplicate activation?
* How do you reverse the order safely?

Hints (not solutions):

* Think in terms of **stack behavior**
* Avoid storing redundant state
* Avoid mutating arrays

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Initial Render

* All lights are OFF
* No active lights recorded

---

### ✅ Test Case 2: Sequential Activation

**Action**

* Click lights in order: `A → B → C`

**Expected**

* A, B, C are ON
* Activation order stored as `[A, B, C]`

---

### ✅ Test Case 3: Reverse Deactivation

**Action**

* Start deactivation

**Expected**

* C turns OFF first
* Then B
* Then A
* All lights OFF at the end

---

### ❌ Test Case 4: Duplicate Click

**Action**

* Click the same light twice

**Expected**

* Activation order does NOT change
* No duplicate entry

---

### ❌ Test Case 5: Interaction During Deactivation

**Action**

* Try clicking lights during deactivation

**Expected**

* No effect
* UI remains stable

---

## 🎨 **UI Requirements**

* Clearly distinguish ON vs OFF state (color, opacity, etc.)
* Grid should be visually aligned
* Smooth transitions preferred (optional)

---

## ⚙️ **Technical Constraints**

* React functional components
* `useState` / `useEffect`
* No external state libraries
* No DOM manipulation
* No mutation of state arrays
