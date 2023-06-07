import React, { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import formSchema from './validation/formSchema';

const initialFormValues = {
  username: '',
  password: '',
  email: '', 
  tos: false
}


function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormValues)

  const handleSubmit = () => {
    // WIP
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))

  }




  const handleChange = (name, value) => {
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form values={formValues} change={handleChange}/>
    </div>
  );
}

export default App;



// stopped following at 15 min started just watching to grasp more