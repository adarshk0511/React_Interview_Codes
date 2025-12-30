# 🚦 **Traffic Light — React Interview Problem**

## 🎯 **Problem Statement**

Build a **Traffic Light component** that cycles through **green → yellow → red** at predetermined intervals and loops **indefinitely**.

---

## 🧩 **Functional Requirements**

### 1. Light States

The traffic light must have **three states**:

* 🟢 **Green**
* 🟡 **Yellow**
* 🔴 **Red**

Only **one light** can be active at any given time.

---

### 2. Cycling Order

The lights must cycle in the following fixed order:

```
Green → Yellow → Red → Green → ...
```

This cycle must repeat **forever**.

---

### 3. Timing Rules

Each light should stay active for a predefined duration:

| Light  | Duration  |
| ------ | --------- |
| Green  | 5 seconds |
| Yellow | 5 seconds |
| Red    | 5 seconds |

*(Durations may be configurable via props — optional)*

---

### 4. Automatic Behavior

* The transition between lights must happen **automatically**
* No user interaction is required to change the light
* The component should start cycling when it mounts

---

### 5. Initial State

* The traffic light should start in the **Green** state by default

---

## 🧠 **State Requirements**

You should manage:

* The **current active light**
* The **timing logic** that controls transitions

Avoid duplicated or derived state where possible.

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Expected**

* Green light is active
* Yellow and Red are inactive

---

### ✅ **Test Case 2: Green → Yellow**

**After 5 seconds**

* Yellow becomes active
* Green turns inactive

---

### ✅ **Test Case 3: Yellow → Red**

**After 5 seconds**

* Red becomes active
* Yellow turns inactive

---

### ✅ **Test Case 4: Red → Green**

**After 5 seconds**

* Green becomes active again
* Cycle restarts

---

### ❌ **Test Case 5: Multiple Timers**

**Expected**

* Only **one timer** should be active at any time
* No memory leaks
* No overlapping intervals/timeouts

---

### ❌ **Test Case 6: Component Unmount**

**Expected**

* All timers are cleaned up properly
* No state updates after unmount

---

## 🎨 **UI Requirements**

* Display three vertically aligned lights
* Inactive lights appear dimmed
* Active light appears bright
* Clearly indicate the active state visually
* Layout should be responsive

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState** and **useEffect**
* No external UI libraries
* No direct DOM manipulation
* Timers must be properly cleaned up
