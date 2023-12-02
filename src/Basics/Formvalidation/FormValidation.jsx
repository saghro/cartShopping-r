import React, {useRef, useState} from 'react';

export default function FormValidation() {
    const inputName=useRef();
    const inputEmail = useRef();
    const inputMessage = useRef();
    const inputAcceptCondition = useRef();
    const [errors,setErrors]=useState([]);

    const validateForm = () => {
      const nameValue = inputName.current.value;
      const emailValue = inputEmail.current.value;
      const messageValue = inputMessage.current.value;
      const acceptConditionValue = inputAcceptCondition.current.checked;
      let isFormValid = true ;
      if(nameValue.trim() === ''){
          setErrors(prevState => {
              return [...prevState,'name required']
          })
         isFormValid=false;
      }
        if(emailValue.trim() === ''){
            setErrors(prevState => {
                return [...prevState,'email required']
            })

            isFormValid=false;
        }else if(emailValue.match(/^\s+@\.\s+$/)){
            setErrors(prevState => {
                return [...prevState,'email invalid']
            })
            isFormValid=false;
        }
        if(messageValue.trim() === ''){
            setErrors(prevState => {
                return [...prevState,'message required']
            })
            isFormValid=false;
        }
        if(!acceptConditionValue){
            setErrors(prevState => {
                return [...prevState,'accept condition required']
            })
            isFormValid=false;
        }
      return isFormValid;
    };
    const handleSubmit = (e) => {
        setErrors([])
       if (!validateForm()){
           e.preventDefault()
       }
    };

    return (
        <div className={'container-fluid w-75 mx-auto my-5'}>

            {errors.length>0 ?
                <div class="alert alert-danger" role="alert">
                    <strong>Error</strong>
                    <ul>
                        {errors.map((error,key) => <li key={key}>{error}</li>)}
                    </ul>
                </div>
                : ''}
            <form onSubmit={handleSubmit}>
                <h1>Contact form</h1>
                <hr/>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" ref={inputName}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="text" id="email" className="form-control" ref={inputEmail}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" ref={inputMessage}></textarea>
                </div>

                <div className="form-check mb-4">
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions" ref={inputAcceptCondition}/>
                        <label className="form-check-label" htmlFor="acceptAllConditions">
                            Accept all conditions
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
            </form>
        </div>
    );
}
