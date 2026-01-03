# 💼 **Job Board — React Interview Problem**

## 🎯 **Problem Statement**

Build a **Job Board** application that displays the **latest job postings**, similar to job listings from **Hacker News Jobs** or other public job feeds.

---

## 🧩 **Functional Requirements**

### 1. Job Listings

* Display a list of job postings
* Each job should show:

  * Job title
  * Company name
  * Location (or “Remote”)
  * Posting time (e.g. “3 hours ago”)
  * Link to job description

---

### 2. Data Source

* Jobs should be fetched from:

  * A public API (e.g. Hacker News Jobs API) **OR**
  * Mocked/static data (acceptable for interview)
* Fetch jobs on **initial render**

---

### 3. Pagination / Load More

* Display a limited number of jobs initially (e.g. 10)
* Provide a **“Load More”** button to fetch or show more jobs
* Newly loaded jobs should append to the list

---

### 4. Loading & Error States

* Show a loading indicator while fetching jobs
* Display an error message if the fetch fails
* Handle empty job list gracefully

---

### 5. Job Interaction

* Clicking a job:

  * Opens the job link in a new tab
  * OR expands job details (your choice)

---

## 🧠 **State Requirements**

You should manage:

* Job list data
* Loading state
* Error state
* Pagination state (page / offset / count)

Avoid redundant or derived state where possible.

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1: Initial Load**

**Expected**

* Loading indicator shown initially
* First batch of jobs rendered after fetch

---

### ✅ **Test Case 2: Load More Jobs**

**Action**

* Click “Load More”

**Expected**

* Additional jobs appended
* Existing jobs remain visible

---

### ❌ **Test Case 3: API Failure**

**Expected**

* Error message shown
* App does not crash

---

### ❌ **Test Case 4: Empty Job List**

**Expected**

* “No jobs available” message displayed

---

### ❌ **Test Case 5: Duplicate Jobs**

**Expected**

* Jobs should not be duplicated when loading more

---

## 🎨 **UI Requirements**

* Clean, readable list layout
* Job cards or rows clearly separated
* “Load More” button clearly visible
* Responsive for mobile and desktop
* External links open in new tab

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState** and **useEffect**
* No external UI libraries
* No direct DOM manipulation
* Fetch logic must be properly cleaned up (if needed)
