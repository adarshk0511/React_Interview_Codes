import { useEffect, useState } from "react";
import { steps } from "../data/steps";

export default function FeatureTour() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [targetRect, setTargetRect] = useState(null);

  const len = steps.length;

  useEffect(() => {
    if (!isActive) return;

    const step = steps[currentStep];
    const element = document.querySelector(step.selector);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });

    // Wait for scroll to settle
    const timeout = setTimeout(() => {
      const rect = element.getBoundingClientRect();
      setTargetRect(rect);
    }, 300); // 300ms delay for smooth scroll

    return () => clearTimeout(timeout);
  }, [currentStep, isActive]);

  return (
    <div className="overlay">
      {targetRect && (
        <>
          <div
            className="highlight"
            style={{
              top: targetRect.top,
              left: targetRect.left,

              width: targetRect.width,
              height: targetRect.height,
            }}
          />

          <div
            className="tooltip"
            style={{
              top: targetRect.bottom + 10,
              left: targetRect.left,
            }}
          >
            <h4>{steps[currentStep].title}</h4>
            <p>{steps[currentStep].description}</p>

            <button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              disabled={currentStep === 0}
            >
              Back
            </button>

            <button
              onClick={() =>
                currentStep === steps.length - 1
                  ? setIsActive(false)
                  : setCurrentStep((prev) => prev + 1)
              }
              disabled={currentStep >= len - 1}
            >
              Next
            </button>

            <button onClick={() => setIsActive(false)}>Skip</button>
          </div>
        </>
      )}
    </div>
  );
}
