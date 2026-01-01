# 🖼️ **Image Carousel — React Interview Problem**

## 🎯 **Problem Statement**

Build an **Image Carousel** component that displays a sequence of images and allows users to navigate through them.

---

## 🧩 **Functional Requirements**

### 1. Image Display

* Display **one image at a time**
* Images should be centered within the carousel
* Image should scale responsively while maintaining aspect ratio

---

### 2. Navigation Controls

The carousel must provide:

* **Next** button → moves to the next image
* **Previous** button → moves to the previous image

---

### 3. Navigation Rules

* Clicking **Next** on the last image:

  * Loops back to the **first image**
* Clicking **Previous** on the first image:

  * Loops back to the **last image**

---

### 4. Indicators (Dots)

* Display navigation dots (one per image)
* Active dot represents the current image
* Clicking a dot jumps directly to that image

---

### 5. Initial State

* Carousel should start at the **first image**
* Active dot should reflect this state

---

## 🧠 **Data Requirements (Props)**

The carousel should accept input like:

```js
{
  images: string[],   // array of image URLs
  autoPlay?: boolean,
  interval?: number   // milliseconds
}
```

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Render**

**Expected**

* First image is visible
* First dot is active

---

### ✅ **Test Case 2: Next Navigation**

**Action**

* Click Next button

**Expected**

* Second image is shown
* Active dot moves to second position

---

### ✅ **Test Case 3: Previous Navigation**

**Action**

* Click Previous button from first image

**Expected**

* Last image is shown
* Last dot becomes active

---

### ✅ **Test Case 4: Dot Navigation**

**Action**

* Click on dot at index `i`

**Expected**

* Image at index `i` is displayed
* Active dot updates correctly

---

### ❌ **Test Case 5: Empty Images**

**Input**

```js
images = []
```

**Expected**

* Carousel renders nothing or fallback UI
* No runtime errors

---

### ❌ **Test Case 6: Single Image**

**Input**

```js
images = ["img1.jpg"]
```

**Expected**

* Image displayed
* Navigation buttons optionally hidden or disabled

---

## 🎨 **UI Requirements**

* Navigation buttons clearly visible
* Active image visually distinct
* Dots aligned horizontally below image
* Smooth transition between images (optional)
* Responsive on mobile and desktop

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* Use **useEffect** (only if auto-play is implemented)
* No external UI libraries
* No direct DOM manipulation
* Proper cleanup for timers (if any)
