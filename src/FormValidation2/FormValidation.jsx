import React, {useRef} from "react";

export default function  FormValidation(){
    const name=useRef();
    const email = useRef();
    const message = useRef();
    const AcceptAllCondition = useRef();
    const submitForm = (e) =>{
        e.preventDefault()
        const nameValue = name.current.value;
        const emailValue = email.current.value;
        console.log(nameValue)
    }
    return(
        <div className={'container-fluid w-75 mx-auto my-5'}>
            <form onSubmit={submitForm} >
                <h1>Contact form</h1>
                <hr/>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input type="text" id="name" className="form-control" onChange={submitForm}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input type="text" id="email" className="form-control" />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea className="form-control" id="message" rows="4"></textarea>
                </div>

                <div className="form-check mb-4">
                    <div className="d-flex">
                        <input className="form-check-input me-2" type="checkbox" id="acceptAllConditions" />
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