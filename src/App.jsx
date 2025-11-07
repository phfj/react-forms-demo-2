import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

/**
 * Dynamically updates the form data state with the current value of the
 * form field that triggered the event.
 *
 * @param {Event} e - The event triggered by the form field change.
 */
  const handleChange = (e) => {
    const { name, value } = e.target; //dynamic field update
    setFormData({ ...formData, [name]: value}); // [name]: value syntax is used to careat a new property in the formData object with the `name` as the property key and the `value` as the property value (updates the form data dynamically) - If we had put name: value syntax, this would not update dynamically and only upated the first occurence of the name-> value of formData, in this case, name input.
  }

/**
 * Handles form submission by preventing the page from reloading,
 * logging the submitted form data to the console, and displaying
 * a welcome alert with the user's name.
 * @param {Event} e - The form submission event.
 */
  const handleSubmit = (e) => {
    e.preventDefault(); // prevents page reload
    console.log("Form data submitted: ", formData);
    alert(`Welcome, ${formData.name}!`);
  };

  return (
    <div className="form-container">
      <h2>Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input name="password" type="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;

/**
 * Explanation:
 * We store all the inputs in a single object formData.
 * The handleChange function dynamically updated whichever field is being types in using [name]: value
 * This is efficient and scalable for large forms
 * 
 * The formData is updated as the user enters values into the input field, and not when the form is submitted.
 */