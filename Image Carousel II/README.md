# 🎠 **Image Carousel II — Smooth Transitions**

## 🎯 Problem Statement

Build an **image carousel** that:

* Displays one image at a time
* Transitions **smoothly** between images
* Supports navigation controls

This problem tests:

* Animation thinking
* State-driven UI
* CSS vs JS responsibilities

---

## ✅ Functional Requirements

### 1️⃣ Images

* Carousel receives an array of image URLs via props
* Display **one image at a time**

---

### 2️⃣ Navigation

* **Next** button → go to next image
* **Previous** button → go to previous image
* Loop behavior:

  * From last → first
  * From first → last

---

### 3️⃣ Smooth Transition (CORE REQUIREMENT)

* Transition must be **smooth**, not a hard switch
* No flickering
* No re-mounting images on every change

---

### 4️⃣ Indicators (Optional but Common)

* Dots showing total images
* Active dot highlights current image
* Clicking a dot navigates to that image

---

### 5️⃣ Accessibility

* Buttons are keyboard accessible
* Images have `alt` text

---

## 🧠 Technical Constraints

* React functional components
* No carousel libraries
* CSS animations/transitions allowed
* No direct DOM manipulation
* Avoid timers for animation (CSS should handle it)

---

## 🧪 Required Test Cases

### ✅ Case 1: Initial Load

* First image visible
* No animation glitch

---

### ✅ Case 2: Next

* Smooth slide to next image
* Index increments correctly

---

### ✅ Case 3: Previous

* Smooth slide back
* Index decrements correctly

---

### ✅ Case 4: Looping

* Last → First
* First → Last

---

### ❌ Case 5: No Images

* Gracefully show fallback text


Reply with the number — we’ll continue step by step, interview-style 👍
