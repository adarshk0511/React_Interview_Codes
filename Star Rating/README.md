# ⭐ **Star Rating — React Interview Problem**

## 🎯 **Problem Statement**

Build a reusable **Star Rating component** that allows users to select a rating by choosing how many stars are filled.

---

## 🧩 **Functional Requirements**

### 1. Star Display

* Display a row of **5 stars** by default
* Stars can be:

  * **Filled** (selected)
  * **Unfilled** (unselected)

---

### 2. Selection Behavior

* Clicking on a star:

  * Sets the rating to that star’s position
  * All stars **up to and including** that star become filled
* Clicking the same star again:

  * Keeps the rating (no toggle-off required unless you choose to support it)

---

### 3. Hover Behavior

* On hover over a star:

  * Temporarily highlight stars up to that position
* On mouse leave:

  * Revert to the currently selected rating

---

### 4. Default State

* Initial rating should be **0** (no stars filled)
* Component should visually reflect this state

---

## 🧠 **Props Requirements**

The Star Rating component should support props such as:

```js
{
  maxStars?: number,   // default = 5
  value?: number,      // controlled value
  onChange?: function, // callback when rating changes
  readOnly?: boolean   // disables interaction
}
```

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Input**

```
value = 0
```

**Expected**

* All stars unfilled

---

### ✅ **Test Case 2: Click Rating**

**Action**

* Click on 3rd star

**Expected**

* Stars 1, 2, 3 → filled
* Stars 4, 5 → unfilled
* `onChange(3)` called

---

### ✅ **Test Case 3: Hover Preview**

**Action**

* Hover over 4th star

**Expected**

* Stars 1–4 highlighted (temporary)
* On mouse leave → revert to selected rating

---

### ❌ **Test Case 4: Read-Only Mode**

**Input**

```
readOnly = true
```

**Expected**

* Clicking stars does nothing
* Visual state remains unchanged

---

### ❌ **Test Case 5: Invalid Value**

**Input**

```
value = -1 OR value > maxStars
```

**Expected**

* Clamp value safely
* Component does not crash

---

## 🎨 **UI Requirements**

* Stars should be visually distinct (filled vs unfilled)
* Cursor should change to pointer on hover (unless read-only)
* Smooth hover/selection feedback
* Responsive layout

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* No external UI libraries
* No direct DOM manipulation
* Component must be reusable
* Proper `key` usage when rendering stars
