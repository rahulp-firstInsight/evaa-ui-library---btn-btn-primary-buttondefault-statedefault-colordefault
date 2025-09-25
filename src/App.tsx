import React from "react";
import { CustomButton } from "./components/CustomButton/CustomButton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="container-fluid py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h1 className="text-center mb-5">Custom Button Design System</h1>
          
          {/* Main Button Example */}
          <div className="text-center mb-5">
            <h2 className="h4 mb-3">Primary Button (From Figma Design)</h2>
            <CustomButton
              label="Button"
              hasIcon={true}
              variant="primary"
              size="md"
              onClick={handleClick}
            />
          </div>

          {/* Variants Section */}
          <div className="mb-5">
            <h2 className="h4 mb-3">Button Variants</h2>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <CustomButton label="Primary" variant="primary" hasIcon={true} onClick={handleClick} />
              <CustomButton label="Secondary" variant="secondary" hasIcon={true} onClick={handleClick} />
              <CustomButton label="Success" variant="success" hasIcon={true} onClick={handleClick} />
              <CustomButton label="Danger" variant="danger" hasIcon={true} onClick={handleClick} />
              <CustomButton label="Warning" variant="warning" hasIcon={true} onClick={handleClick} />
              <CustomButton label="Info" variant="info" hasIcon={true} onClick={handleClick} />
            </div>
          </div>

          {/* Sizes Section */}
          <div className="mb-5">
            <h2 className="h4 mb-3">Button Sizes</h2>
            <div className="d-flex flex-column align-items-center gap-3">
              <CustomButton label="Small Button" size="sm" hasIcon={true} onClick={handleClick} />
              <CustomButton label="Medium Button" size="md" hasIcon={true} onClick={handleClick} />
              <CustomButton label="Large Button" size="lg" hasIcon={true} onClick={handleClick} />
            </div>
          </div>

          {/* States Section */}
          <div className="mb-5">
            <h2 className="h4 mb-3">Button States</h2>
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              <CustomButton label="With Icon" hasIcon={true} onClick={handleClick} />
              <CustomButton label="Without Icon" hasIcon={false} onClick={handleClick} />
              <CustomButton label="Disabled" hasIcon={true} disabled={true} />
            </div>
          </div>

          {/* Bootstrap Grid Example */}
          <div className="mb-5">
            <h2 className="h4 mb-3">Responsive Layout</h2>
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-4">
                <CustomButton label="Column 1" variant="primary" hasIcon={true} className="w-100" onClick={handleClick} />
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <CustomButton label="Column 2" variant="secondary" hasIcon={true} className="w-100" onClick={handleClick} />
              </div>
              <div className="col-12 col-sm-6 col-md-4">
                <CustomButton label="Column 3" variant="success" hasIcon={true} className="w-100" onClick={handleClick} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
