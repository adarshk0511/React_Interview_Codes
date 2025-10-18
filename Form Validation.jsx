import React, { useState } from 'react';

function App() {
  
  const[formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
  });
  
  const [errors, setErrors] = useState("");
  
  const validate = () => {
    
    let tempError = {};
    if(!formData.name.trim()){
      tempError.name = "Name is required";
    }
    
    if(!formData.email){
      tempError.email = "email is required";
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
      tempError.email = "Invalid email format";
    }
    
    if (!formData.password) {
      tempError.password = "Password is required";
    } else if (formData.password.length < 8) {
      tempError.password = "Password must be at least 8 characters";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/.test(formData.password)
    ) {
      tempError.password =
        "Password must include uppercase, lowercase, number & special character";
    }

    
    setErrors(tempError);
    
    return Object.keys(tempError).length==0;

    
  }
  
  const handleSubmit = (e) => {
     e.preventDefault();
    if(validate()){
      alert("Form submitted successfully");
    }
  };
  
  const handleChange = (e) =>{
    setFormData({...formData, [e.target.name]: [e.target.value]});
  }

  return (
    <div>
      <h1>Hello Timer!</h1>
      <form onSubmit={handleSubmit}>
       <div>
        <label>Name:</label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: "block", width: "100%" }}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
        
        
         <div >
        <label>Email:</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: "block", width: "100%" }}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      
      
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          style={{ display: "block", width: "100%" }}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      
        
        <button type="submit">Submit</button>
       
      </form>
      
      
    </div>
  );
}

export default App;
