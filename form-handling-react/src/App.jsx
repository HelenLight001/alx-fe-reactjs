import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";
// import FormikForm from "./components/formikForm.js";




function App() {
  return (
    <div>
      <fieldset>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
          <div className="w-full max-w-md space-y-10">
            <RegistrationForm />
         
            <FormikForm />
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default App;
