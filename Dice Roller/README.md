# 🎲 **Dice Roller — React Interview Problem**

## 🎯 **Problem Statement**

Build a React app that simulates rolling a **6-sided dice** and displays the result visually.

---

## 🧩 **Functional Requirements**

### 1. Dice Display

* Display a single dice face
* Dice face must show values from **1 to 6**
* Value should be clearly visible (number or dots)

---

### 2. Roll Action

* Provide a **“Roll Dice”** button
* On click:

  * Generate a **random number between 1 and 6**
  * Update the dice face accordingly

---

### 3. State Behavior

* Dice value should persist until the next roll
* Rolling again should **replace**, not append, the value

---

### 4. Initial State

* On first load:

  * Dice may show a placeholder
  * OR start with a random value
    *(your choice — justify it)*

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Roll Once**

**Action**

* Click “Roll Dice”

**Expected**

* Dice shows a number between **1 and 6**

---

### ✅ **Test Case 2: Multiple Rolls**

**Action**

* Click “Roll Dice” multiple times

**Expected**

* Each roll generates a new value
* Values always remain in range **1–6**

---

### ❌ **Test Case 3: Invalid Value**

**Expected**

* Dice should never display `0`, `7`, or non-numeric values

---

### ❌ **Test Case 4: No Interaction**

**Expected**

* Dice value should not change unless button is clicked

---

## 🎨 **UI Requirements**

* Dice face should look **dice-like** (square, border, centered value)
* Button clearly visible
* Simple animation on roll is optional
* Layout should be responsive

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* No external libraries
* No direct DOM manipulation
* Random generation must be done in JavaScript
