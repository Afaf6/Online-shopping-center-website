import { useState } from "react";
import * as yup from "yup";
import "../Form/Form.css"
function Form () {
    const [formData, setFormData] = useState ({
        firstName: "",
        email: "",
        subject: "",
        massage:"",
    });
 
  const [errorsubject, setErrorsubject] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

 const userSchema =yup.object().shape({
        firstName: yup.string().required(),
         email: yup.string().email("Please enter a valid email address").required("Email is required"),
         subject: yup.string(),
         message: yup.string().required(),
     });


async function testValidation(){

  try {
    await userSchema.validate(formData, { abortEarly: false });
    console.log("Is Valid Object");
    setSuccessMessage("Registration successful!");
    // Reset the form data
    setFormData({ firstName: "", email: "", subject: "", message: "" });
    setErrorsubject({}); // Reset any existing errors
   } 
   
   catch (err) {
    var errors = {};
    console.log(err.inner)
    err.inner.forEach((error) => {
      console.log( ` ${error.path} : ${error.message} `);
      errors[error.path] = error.message
    });
    setErrorsubject(errors);
    console.log(errors)
  }
  
}
function handleOnFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    testValidation()
   
 }

 function handleOnChange(event){
    const keyName = event.target.name ;
    var keyValue = event.target.value;
  
    setFormData({
      ...formData,
      [keyName]: keyValue,
    });
  }

 // Clear success message on focus
  function handleOnFocus() {
    setSuccessMessage(""); 
}

return (
    <>
     <form onSubmit={handleOnFormSubmit}>
    
      <div id="Name">
        <label htmlFor="firstName"> Your name </label>
       <input 
       id="firstName"
       placeholder="Abc"
       onChange={handleOnChange}
       onFocus={handleOnFocus}
       value={formData.firstName}
       name="firstName"
       ></input>
       {errorsubject.firstName ? <p>{errorsubject.firstName}</p> : null}
      </div>

      <div className="contentlebal">
       <label htmlFor="email"> Email </label>
       <input
       placeholder="Abc@def.com"
       onChange={handleOnChange}
       onFocus={handleOnFocus}
       value={formData.email}
       name="email"
       type="email"
       ></input>
       {errorsubject.email ? <p>{errorsubject.email}</p> : null}
      </div>

       <div className="contentlebal">
      <label htmlFor="message"> Massage  </label>
       <textarea
       placeholder="This is an aptinal"
       onChange={handleOnChange}
       onFocus={handleOnFocus}
       value={formData.message}
       name="message"
       ></textarea>
       {errorsubject.message ? <p>{errorsubject.message}</p> : null}
      </div>

      <div className="contentlebal">
      <label htmlFor="subject"> Subject </label>
       <textarea
       placeholder="Hi! i'd like to ask about"
       onChange={handleOnChange}
       onFocus={handleOnFocus}
       value={formData.subject}
       name="subject"
       ></textarea>
      </div>
      
      <button id="submitbtn" type="submit">Submit</button>
     </form>
     {successMessage && <p>{successMessage}</p>}
    </>
  )
};
export default Form;