# 🧩 Tooltip Component — Hover / Focus Based with Positioning

## 🎯 Problem Statement (Interview Style)

Build a **Tooltip** component that:

* Shows extra information on **hover or focus**
* Positions itself relative to the trigger element
* Works with **keyboard navigation**
* Does not break layout

---

# ✅ Functional Requirements

### 1️⃣ Visibility

* Tooltip appears on:

  * `mouseenter`
  * `focus`
* Tooltip disappears on:

  * `mouseleave`
  * `blur`

👉 This ensures **mouse + keyboard accessibility**.

---

### 2️⃣ Positioning

Support at least:

* `top`
* `bottom`
* `left`
* `right`

Position relative to the trigger element.

---

### 3️⃣ Accessibility (VERY IMPORTANT)

* Tooltip must be accessible via keyboard
* Tooltip content should be announced by screen readers

---

### 4️⃣ Reusability

* Tooltip should wrap **any element**
* Accept content via props

---

# 🧠 State Design (Minimal & Correct)

```js
const [visible, setVisible] = useState(false);
```

That’s it.

❌ No need to store position in state
❌ No need for effects initially

---

# 🧱 Component API (Clean)

```jsx
<Tooltip content="This is a tooltip" position="top">
  <button>Hover me</button>
</Tooltip>
```

This is **interview-approved**.

---

# 🧠 Event Handling Logic

| Event        | Action       |
| ------------ | ------------ |
| onMouseEnter | show tooltip |
| onMouseLeave | hide tooltip |
| onFocus      | show tooltip |
| onBlur       | hide tooltip |

Same logic → **consistent behavior**

---

# 🧩 Positioning Strategy (CSS-based)

You’ll:

* Wrap trigger in `position: relative`
* Tooltip is `position: absolute`
* Offset using `top / left / transform`

### Example mapping (conceptual):

```js
position === "top"    → bottom: 100%; left: 50%; transformX(-50%)
position === "bottom" → top: 100%; left: 50%; transformX(-50%)
position === "left"   → right: 100%; top: 50%; transformY(-50%)
position === "right"  → left: 100%; top: 50%; transformY(-50%)
```

---

# 🧪 Edge Cases Interviewers Like

* Tooltip should not steal focus
* Tooltip should not break layout
* Tooltip works with keyboard only
* Tooltip disappears on blur
* Tooltip text wraps correctly

---


# 🚀 Implementation Order (DO THIS)

### Step 1️⃣

Basic tooltip show/hide on hover

### Step 2️⃣

Add focus/blur support

### Step 3️⃣

Add position prop (top/bottom/left/right)
