# 🌡️ **Temperature Converter — React Interview Problem**

## 🎯 **Problem Statement**

Build a React component that converts temperature values between **Celsius (°C)** and **Fahrenheit (°F)**.

---

## 🧩 **Functional Requirements**

### 1. Inputs

The UI must contain:

* A numeric input field for **temperature value**
* A dropdown or toggle to select:

  * **Celsius → Fahrenheit**
  * **Fahrenheit → Celsius**

---

### 2. Conversion Behavior

* Conversion should happen:

  * On input change **OR**
  * On clicking a **Convert** button
    *(you choose — be ready to justify)*

---

### 3. Conversion Formulae

* Celsius → Fahrenheit

  ```
  F = (C × 9/5) + 32
  ```

* Fahrenheit → Celsius

  ```
  C = (F − 32) × 5/9
  ```

---

### 4. Output

* Display the converted temperature clearly.
* Result should be rounded to **2 decimal places**.
* Show the correct unit symbol (°C / °F).

---

## 🧪 **Test Cases (Must Pass)**

### ✅ **Test Case 1**

**Input**

```
Value: 0
Conversion: Celsius → Fahrenheit
```

**Output**

```
32 °F
```

---

### ✅ **Test Case 2**

**Input**

```
Value: 100
Conversion: Celsius → Fahrenheit
```

**Output**

```
212 °F
```

---

### ✅ **Test Case 3**

**Input**

```
Value: 32
Conversion: Fahrenheit → Celsius
```

**Output**

```
0 °C
```

---

### ✅ **Test Case 4**

**Input**

```
Value: -40
Conversion: Celsius → Fahrenheit
```

**Output**

```
-40 °F
```

---

### ❌ **Test Case 5 (Invalid Input)**

**Input**

```
Value: "abc"
```

**Expected Behavior**

* Show error message: **"Please enter a valid number"**
* Do not display result

---

### ❌ **Test Case 6 (Empty Input)**

**Input**

```
Value: ""
```

**Expected Behavior**

* No conversion performed
* No result shown

---

## 🎨 **UI Requirements**

* Clean, minimal UI
* Input should accept decimals
* Error messages should be visually distinct
* Result should update clearly without page reload

---

## ⚙️ **Technical Constraints**

* Use **React functional components**
* Use **useState**
* Controlled inputs
* No external libraries
* No DOM manipulation (`document.getElementById`, etc.)

