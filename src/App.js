import FormBuilder from "./components/FormBuilder";
import formConfig from "./config/formConfig";
import "./styles/form.css";

function App() {
  return (
    <div className="page-container">

      <div className="form-card">

        <h2 className="form-title">
          Dynamic Form Builder
        </h2>

        <FormBuilder config={formConfig} />

      </div>

    </div>
  );
}

export default App;