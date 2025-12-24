# 🐦 **Tweet Component — React Interview Problem**

## 🎯 **Problem Statement**

Build a reusable React component that visually and functionally resembles a **Tweet** (as seen on Twitter/X).

---

## 🧩 **Functional Requirements**

### 1. Tweet Structure

The Tweet component must display:

1. **User Avatar**

   * Circular profile image
   * Fallback to initials if image fails (optional)

2. **User Information**

   * Display Name (e.g., *Elon Musk*)
   * Username (e.g., *@elonmusk*)
   * Timestamp (e.g., *2h*, *Mar 21*)

3. **Tweet Content**

   * Text content (supports multiline text)
   * URLs should appear visually distinct (no need to make them clickable)

4. **Tweet Actions**
   Display the following action buttons:

   * Reply
   * Retweet
   * Like
   * Share

---

## 🧠 **Data Requirements (Props)**

The Tweet component should accept props similar to:

```js
{
  avatarUrl: string,
  name: string,
  username: string,
  content: string,
  timestamp: string,
  likes: number,
  retweets: number,
  replies: number
}
```

---

## 🔁 **Interaction Requirements**

1. **Like Button**

   * Clicking Like toggles liked/unliked state
   * Like count increases/decreases accordingly

2. **Retweet Button**

   * Toggles retweet state
   * Retweet count updates

3. **Reply & Share**

   * Can be non-functional (console.log is fine)
   * Button must exist visually

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Basic Render**

**Input Props**

```js
{
  name: "Ada Lovelace",
  username: "@ada",
  content: "The Analytical Engine weaves algebraic patterns.",
  timestamp: "2h",
  likes: 10,
  retweets: 3,
  replies: 1
}
```

**Expected Output**

* Avatar shown
* Name + username displayed
* Content text visible
* Correct counts displayed

---

### ✅ **Test Case 2: Like Toggle**

**Action**

* Click Like button once

**Expected**

* Like count increases by 1
* Like icon visually changes

---

### ✅ **Test Case 3: Like Toggle Again**

**Action**

* Click Like button again

**Expected**

* Like count returns to original value
* Like icon resets

---

### ✅ **Test Case 4: Multiline Tweet**

**Input**

```
"Hello world\nThis is a new line"
```

**Expected**

* Text renders on multiple lines

---

### ❌ **Test Case 5: Missing Avatar**

**Input**

```js
avatarUrl: ""
```

**Expected**

* Fallback avatar (initials or placeholder)

---

## 🎨 **UI Requirements**

* Layout similar to Twitter:

  * Avatar on the left
  * Content on the right
* Proper spacing & alignment
* Icons aligned horizontally below content
* Hover states for action buttons
* Responsive layout (mobile-friendly)

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* No external UI libraries
* No backend/API calls
* CSS or inline styles allowed
