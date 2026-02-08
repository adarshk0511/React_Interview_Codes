## 📤 File Upload with Progress Bar — React Interview Problem

**Difficulty:** ⭐⭐⭐☆☆ (Medium)
**Category:** Browser APIs · Async State · UI Feedback · React Hooks

---

## 🎯 Problem Statement

Build a **File Upload component** that allows users to select a file and upload it while displaying a **real-time progress bar**.

This problem focuses on:

* Handling file input
* Managing async upload state
* Displaying upload progress correctly
* Keeping UI and state in sync

No backend implementation is required — upload progress can be **simulated** or handled via browser APIs.

---

## 🧩 Functional Requirements

### 1. File Selection

* User should be able to select a file using an `<input type="file" />`
* Only one file needs to be handled
* Selected file details should be stored in state

---

### 2. Upload Action

* Upload starts when user clicks an **Upload** button
* Upload should be asynchronous
* Multiple uploads should not overlap

---

### 3. Progress Tracking

* Display a progress bar from **0% → 100%**
* Progress should update incrementally during upload
* UI should reflect current upload state

---

### 4. Upload States

The component should handle:

* Idle (no file selected)
* Uploading (in progress)
* Completed (100%)
* Error (optional bonus)

---

### 5. Performance & UX (Bonus)

* Disable upload button during upload
* Prevent uploading without selecting a file
* Reset progress after completion if needed

---

## 🧠 Component / State Design

State should be managed like this:

```js
const [file, setFile] = useState(null);
const [progress, setProgress] = useState(0);
const [isUploading, setIsUploading] = useState(false);
```

Single source of truth for upload state.

---

## 🧪 Test Cases (Must Pass)

### ✅ Test Case 1: Select File

**Scenario**

* User selects a file

**Expected**

* File is stored in state
* Upload button becomes enabled

---

### ✅ Test Case 2: Start Upload

**Scenario**

* User clicks Upload

**Expected**

* Upload starts
* Progress bar appears at 0%

---

### ✅ Test Case 3: Progress Updates

**Scenario**

* Upload is in progress

**Expected**

* Progress bar increments smoothly
* UI re-renders correctly

---

### ✅ Test Case 4: Upload Complete

**Scenario**

* Upload reaches 100%

**Expected**

* Progress bar shows 100%
* Upload state resets or completes

---

### ❌ Test Case 5: Invalid Actions

**Scenario**

* User clicks Upload without selecting a file

**Expected**

* Upload does not start
* No errors thrown

---

## 🧠 Key Concepts Being Tested

| Concept             | Why                       |
| ------------------- | ------------------------- |
| File input handling | Browser file APIs         |
| Async state         | Progress tracking         |
| UI synchronization  | Accurate progress display |
| State management    | Upload lifecycle handling |
| UX considerations   | Prevent invalid actions   |

---

## 🧠 Common Pitfalls (Interview Traps)

❌ Mutating progress state directly
❌ Allowing multiple uploads simultaneously
❌ Not disabling upload button
❌ Blocking UI during upload
❌ Forgetting cleanup for timers

---

## 🎨 Example Use Cases

* Profile picture upload
* Document upload forms
* Media upload dashboards
* Cloud storage interfaces
* Resume / attachment uploads

---

## ⚙️ Technical Constraints

* React functional components only
* No external upload libraries
* Progress can be simulated
* Clean and readable code
* Proper state handling required

---

## 🗣️ Interview Evaluation Criteria

You’ll be evaluated on:

* Correct file handling
* Accurate progress tracking
* Async logic correctness
* UI responsiveness
* Code clarity
* Edge-case handling
