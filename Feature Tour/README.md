## 🧭 Feature Tour / Walkthrough Overlay — React Interview Problem

**Difficulty:** ⭐⭐⭐⭐☆ (Medium → Hard)
**Category:** UI State Machines · Portals · Positioning · UX Systems

---

## 🎯 Problem Statement

Build a **Feature Tour / Walkthrough Overlay** that:

* Highlights UI elements step-by-step
* Shows a tooltip explaining each feature
* Allows navigation (Next / Back / Skip)
* Dims the background
* Scrolls target element into view

This mimics onboarding tours used in:

* SaaS dashboards
* Product onboarding flows
* Admin panels
* Analytics tools

No external tour libraries allowed.

---

## 🧩 Functional Requirements

### 1️⃣ Step Configuration

Tour steps should be configurable:

```js
const steps = [
  {
    selector: "#revenue-card",
    title: "Revenue Overview",
    description: "Track your monthly revenue here.",
  },
  {
    selector: "#user-chart",
    title: "User Growth",
    description: "See user acquisition trends.",
  },
];
```

---

### 2️⃣ Overlay Behavior

* Dim background
* Highlight current target element
* Show tooltip near highlighted element
* Smooth transitions between steps

---

### 3️⃣ Navigation

* Next
* Previous
* Skip
* Finish

Tour should stop after last step.

---

### 4️⃣ Scroll Handling

If target is outside viewport:

* Scroll it into view smoothly

---

### 5️⃣ Cleanup

* Remove overlay on completion
* Remove event listeners
* Avoid memory leaks

---

## 🧠 Component / State Design

Recommended state:

```js
const [currentStep, setCurrentStep] = useState(0);
const [isTourActive, setIsTourActive] = useState(true);
```

Optional:

```js
const [targetRect, setTargetRect] = useState(null);
```

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Tour Starts

First element is highlighted.

---

### ✅ Test Case 2: Next Step

Highlight moves to next element.

---

### ✅ Test Case 3: Scroll Into View

Hidden element scrolls into view automatically.

---

### ✅ Test Case 4: Finish

Overlay disappears and cleanup runs.

---

### ❌ Test Case 5: Missing Element

If selector not found:

* Skip safely
* No crash

---

## 🧠 Key Concepts Being Tested

| Concept           | Why                       |
| ----------------- | ------------------------- |
| DOM measurement   | `getBoundingClientRect()` |
| Overlay layering  | Z-index & portals         |
| State transitions | Multi-step flow           |
| Side effects      | Scroll + measurement      |
| Cleanup           | Prevent leaks             |
| UX flow control   | Guided interaction        |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Not handling missing DOM elements
❌ Tooltip positioning bugs
❌ Not recalculating on resize
❌ Overlay blocking clicks incorrectly
❌ Hardcoding pixel values

---

## 🎨 Example Use Cases

* First-time onboarding
* Admin dashboard tutorials
* Product updates walkthrough
* Feature discovery
* SaaS education flows

---

## ⚙️ Technical Constraints

* React functional components only
* No external tour libraries
* Must calculate element position dynamically
* Must clean up properly
* Must handle window resize

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Clean architecture
* Correct positioning logic
* State flow clarity
* Cleanup correctness
* Real-world robustness
