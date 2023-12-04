import React, {useRef, useState} from "react";

export default function  FormValidation(){
    const name = useRef();
    const email = useRef();
    const message = useRef();
    const acceptAllCondition = useRef();
    const [formSent , setFormSent] = useState(false)
    const [errors ,setErrors]=useState([])

   const validateForm = ()=>{
       const nameValue = name.current.value;
       const emailValue = email.current.value;
       const messageValue = message.current.value;
       const acceptAllConditionValue = acceptAllCondition.current.checked;

       if(nameValue.trim() === ''){
           alert('field name required')
       }
   }
    const restForm = ()=>{
        name.current.value=''
        email.current.value=''
        message.current.value=''
        acceptAllCondition.current.checked=false
    }

    const submitForm = (e) => {
        e.preventDefault();
        validateForm()
        const nameValue = name.current.value;
        const emailValue = email.current.value;
        const messageValue = message.current.value;
        const acceptAllConditionValue = acceptAllCondition.current.checked;


       // setFormSent(true)
        //restForm()
    };
    return(
        <div className={'container-fluid w-75 mx-auto my-5'}>
            {formSent?  <div className="alert alert-success" role="alert">
                <strong> form send successfully</strong>
            </div>
                : ''
            }

            <form onSubmit={submitForm} >
                <h1>Contact form</h1>
                <hr/>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" ref={name}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="text" id="email" className="form-control" ref={email}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4" ref={message}></textarea>
                </div>

                <div className="form-check mb-4">
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions" ref={acceptAllCondition} />
                        <label className="form-check-label" htmlFor="acceptAllConditions">
                            Accept all conditions
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-4">Submit</button>
            </form>
        </div>
    )
}