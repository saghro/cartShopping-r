import {useRef} from "react";

export  default function FormRef(){

    const inputNameRef =useRef();
    const inputAgeRef = useRef();
    const inputCityRef = useRef();
    const inputCountryRef = useRef();
    const inputAcceptConditionRef = useRef();

    return(
        <div className='container my-4'>

            <form>
                <div className="form-group">
                    <label>Name :</label>
                    <input type="text"  id="name" className="form-control" ref={inputNameRef}/>
                </div>
                <div className="form-group">
                    <label>Age :</label>
                    <input type="text"  id="age" className="form-control" ref={inputAgeRef}/>
                </div>
                <div className="form-group">
                    <label>City :</label>
                    <input type="text"  id="city" className="form-control" ref={inputCityRef}/>
                </div>
                <div className="form-group">
                    <label>Country :</label>
                    <select className='form-control' id ='country' ref={inputCountryRef} >
                        <option value="MA">MAROC</option>
                        <option value="DZ">DZAIR</option>
                        <option value="BRD">BARDQIZ</option>
                        <option value="SBN">SBNYA</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-check">
                    <input type="checkbox"  id="accept" className="form-check-input" ref={inputAcceptConditionRef} />
                    <label htmlFor='accept' className="form-check-label">Accept our rules :</label>
                </div>
                <div>

                    <button type="button" className='btn btn-primary' onClick={(e)=>{
                        e.preventDefault()
                        console.log(inputNameRef.current.value)
                    }}> save</button>
                </div>

            </form>
        </div>
    )
}