import React, { useState } from 'react';

const Step1 = ({next})=>(
  <div>
    <h5>Step1</h5>
    <button onClick={next}>Next</button>
  </div>
);

const Step2 = ({next, prev})=>(
  <div>
    <h5>Step2</h5>
    <button onClick={next}>Next</button>
    <button onClick={prev}>Prev</button>
  </div>
);

const Step3 = ({prev})=>(
  <div>
    <h5>Step3</h5>
    <button onClick={prev}>Prev</button>
    <button type="submit">Submit</button>
  </div>
);

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  
  const nextStep = () => setStep(step+1);
  const prevStep = () => setStep(step-1);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <form onSubmit={handleSubmit}>
      {step == 1 && <Step1 next={nextStep}/>}
      {step == 2 && <Step2 next={nextStep} prev={prevStep}/>}
      {step == 3 && <Step3 prev={prevStep}/>}
    </form>
  );
};

const App = () => {


   return (
    <div>
      <h1>Multi-Step Form</h1>
      <MultiStepForm />
    </div>
  );
};
export default App;
