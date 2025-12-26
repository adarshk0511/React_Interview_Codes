# 🪟 **Modal Dialog — React Interview Problem**

## 🎯 **Problem Statement**

Build a **reusable Modal Dialog component** that can be opened and closed, and displays arbitrary content passed to it.

---

## 🧩 **Functional Requirements**

### 1. Modal Structure

The modal must include:

* A **backdrop/overlay** covering the page
* A **modal container** centered on the screen
* A **content area** for custom JSX
* A **close button (✕)**

---

### 2. Open / Close Behavior

* Modal opens when triggered (e.g., button click)
* Modal closes when:

  * Close button is clicked
  * Backdrop is clicked
  * Escape (`Esc`) key is pressed

---

### 3. Visibility Rules

* Modal should **not render** when closed
* Modal should render **above all content** when open

---

### 4. Reusability

The modal must be reusable and accept:

* Custom content (children)
* A way to control open/close state

---

## 🧠 **Props Requirements**

The Modal component should support props similar to:

```js
{
  isOpen: boolean,
  onClose: function,
  title?: string,
  children: ReactNode
}
```

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Input**

```js
isOpen = false
```

**Expected Behavior**

* Modal is not visible
* Backdrop is not rendered

---

### ✅ **Test Case 2: Open Modal**

**Action**

* Set `isOpen = true`

**Expected Behavior**

* Modal appears centered
* Backdrop covers entire viewport
* Page content behind is inaccessible

---

### ✅ **Test Case 3: Close via Button**

**Action**

* Click close (✕) button

**Expected Behavior**

* `onClose` is called
* Modal disappears

---

### ✅ **Test Case 4: Close via Backdrop**

**Action**

* Click outside modal content

**Expected Behavior**

* Modal closes
* `onClose` is called

---

### ✅ **Test Case 5: Close via Escape Key**

**Action**

* Press `Esc` key

**Expected Behavior**

* Modal closes
* No errors thrown

---

### ❌ **Test Case 6: Event Bubbling**

**Action**

* Click inside modal content

**Expected Behavior**

* Modal does NOT close

---

## 🎨 **UI Requirements**

* Modal must be centered (horizontal & vertical)
* Backdrop should be semi-transparent
* Modal content should have padding
* Close button clearly visible
* Responsive on mobile and desktop

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState** and/or **useEffect**
* No external UI libraries
* No direct DOM manipulation
* Clean unmounting when modal closes
