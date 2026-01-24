# 💡 **Shopping Cart Logic — Requirements**

## 🎯 **Problem Statement**

Build the core logic for a **shopping cart** that can:

* Add items
* Remove items
* Update item quantities

This tests **state management, immutability, and basic business rules** in a frontend app.

---

## 🧩 **Functional Requirements**

### 1. Cart structure

* The cart stores a list of items.
* Each item has:

  * `id` (unique identifier)
  * `name`
  * `price`
  * `quantity` (integer ≥ 1)
* Optionally: other fields like `imageUrl`, `variant`, etc. but not required.

---

### 2. Add item to cart

* When a user adds a product:

  * If the product is **not yet in the cart**, insert it with `quantity = 1`.
  * If the product **already exists**, increase its `quantity` by 1 (or by a specified amount).
* Ensure the cart list stays immutable (no direct mutation).

---

### 3. Remove item from cart

* Remove an item entirely from the cart, regardless of its quantity.
* This action should update the cart list immutably.

---

### 4. Update quantity

* User can change the quantity directly, e.g.:

  * Increment (+1)
  * Decrement (-1)
  * Set to a specific value
* Quantity must never drop below 1.

  * If decrementing from 1, the behavior can be either:

    * Keep at 1, or
    * Remove the item (choose one approach consistently)
* Update must preserve immutability.

---

### 5. Total calculation

* Provide a way to derive:

  * `subtotal` = sum of `price × quantity` for all items
  * Optional: taxes, shipping, etc. But at minimum, maintain subtotal or total.

---

## 🧠 **State / Logic Expectations**

You must be able to explain:

* How items are stored and identified (by `id`)
* Why immutability matters when updating arrays
* How to update one item in an array without mutating the whole list
* Handling edge cases like invalid quantity or missing item

Hints (not solution code):

* Use array methods that create new arrays, not mutate (e.g., `map`, `filter`, `slice`, etc.). MDN confirms `slice()` returns a new array and does not modify the original. ([MDN Web Docs][1])
* Use consistent checks to prevent invalid state.

---

## 🧪 **Test Cases (Must Pass)**

### ✅ Test Case 1: Empty cart

* Initial cart is empty.
* Subtotal is 0.

---

### ✅ Test Case 2: Add single item

**Action**

* Add product `P1`.

**Expected**

* Cart contains `[ { id: P1, quantity: 1 } ]`
* Subtotal reflects price of `P1`.

---

### ✅ Test Case 3: Add same item twice

**Action**

* Add product `P1`.
* Add product `P1` again (same id).

**Expected**

* Cart contains `[ { id: P1, quantity: 2 } ]`
* Subtotal = `2 × price(P1)`.

---

### ✅ Test Case 4: Add another item

**Action**

* Add product `P2` after two `P1`s.

**Expected**

* Cart contains `[ {P1, qty:2}, {P2, qty:1} ]`
* Subtotal = `2 × price(P1) + 1 × price(P2)`.

---

### ✅ Test Case 5: Decrement quantity

**Action**

* Decrement quantity of `P1` from 2 to 1.

**Expected**

* Cart has `[ {P1, qty:1}, {P2, qty:1} ]`
* Subtotal updates accordingly.

---

### ❌ Test Case 6: Excess decrement or invalid

**Action**

* Decrement quantity of `P1` from 1 to 0 (if that logic is allowed).

**Expected**

* Either:

  * `P1` remains at quantity 1 (if you disallow 0), or
  * `P1` is removed from cart (if you allow removal on zero).
* No negative quantities.

---

### ✅ Test Case 7: Remove item

**Action**

* Remove `P2`.

**Expected**

* Cart contains only `P1`.
* Subtotal updates accordingly.

---

## 🎨 **UI Requirements**

* Cart shows list of items with name, price, quantity, subtotal for that item.
* Buttons or controls:

  * Add item
  * Remove item
  * Increase / decrease quantity
* Disable or handle invalid operations cleanly (e.g., prevent negative quantities).
* Showing total or subtotal clearly.

---

## ⚙️ **Technical Constraints**

* React functional components (or plain JS logic if used in any environment).
* State management with `useState`, `useReducer`, or similar.
* No direct mutation of state arrays.
* Clean separation of business logic from UI render where possible.

---

## 🗣️ **Interview Signals This Problem Tests**

A strong solution demonstrates:

* Precise state modeling for a real-world ecommerce pattern.
* Solid use of immutable updates in arrays.
* Clear, defensive handling of edge cases.
* Ability to derive totals or computed values from state.
* Awareness of UX considerations like disabling invalid actions.

---

## ⭐ Difficulty Level

**Medium**
Good for a strong frontend candidate; slightly harder if you add features like discounts, inventory limits, or promotions.
