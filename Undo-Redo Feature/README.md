# 💡 **Undo / Redo Feature — Requirements**

## 🎯 **Problem Statement**

Build an **Undo / Redo system** that allows users to:

* Undo the most recent action
* Redo an undone action

This problem tests understanding of:

* State history
* Stack-based data structures
* Predictable state transitions

---

## 🧩 **Functional Requirements**

### 1. Actions

* User can perform **actions** that change state

  * Example: text input, counter increment, drawing, form edits
* Each action must be **recorded in history**

---

### 2. Undo Behavior

* Triggered by:

  * Undo button
  * Keyboard shortcut (optional)
* Undo should:

  * Revert state to the **previous value**
  * Remove the latest state from history
* Undo beyond the first state:

  * ❌ Should do nothing

---

### 3. Redo Behavior

* Triggered by:

  * Redo button
  * Keyboard shortcut (optional)
* Redo should:

  * Restore the **most recently undone state**
* Redo after a new action:

  * ❌ Should be cleared

---

### 4. History Rules

* History must behave like **two stacks**:

  * `past` (undo stack)
  * `future` (redo stack)
* Only the **current state** is active
* New actions invalidate the redo stack

---

### 5. Limits (Optional but Recommended)

* History size may be limited (e.g. last 50 actions)
* Oldest history entries may be discarded

---

## 🧠 **State Management Expectations**

You must be able to explain:

* Why **two stacks** are needed
* Why redo stack is cleared on new action
* How immutability is preserved

Hints (not solutions):

* Think in terms of **LIFO**
* Avoid mutating arrays
* State transitions must be predictable

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Initial State

* No undo possible
* No redo possible

---

### ✅ Test Case 2: Perform Actions

**Action**

* Perform actions: `A → B → C`

**Expected**

* Current state: `C`
* Undo stack: `[A, B]`
* Redo stack: `[]`

---

### ✅ Test Case 3: Undo Once

**Action**

* Undo

**Expected**

* Current state: `B`
* Undo stack: `[A]`
* Redo stack: `[C]`

---

### ✅ Test Case 4: Undo All

**Action**

* Undo twice

**Expected**

* Current state: `A`
* Further undo does nothing

---

### ✅ Test Case 5: Redo

**Action**

* Redo once

**Expected**

* Current state: `B`
* Undo stack: `[A]`
* Redo stack: `[C]`

---

### ❌ Test Case 6: New Action After Undo

**Action**

* Undo to `B`
* Perform new action `D`

**Expected**

* Current state: `D`
* Undo stack: `[A, B]`
* Redo stack: `[]` (cleared)

---

## 🎨 **UI Requirements**

* Undo and Redo buttons
* Buttons should be:

  * Disabled when unavailable
* Current state should be clearly visible

---

## ⚙️ **Technical Constraints**

* React functional components
* `useState` / `useReducer`
* No external state libraries
* No mutation of history arrays

---

## 🗣️ **Interview Signals This Problem Tests**

A strong solution demonstrates:

* Understanding of **stack-based history**
* Clean state transitions
* Correct edge-case handling
* Predictable state management

---

## ⭐ Difficulty Level

**Medium**
(Strong frontend candidates should solve this confidently)
