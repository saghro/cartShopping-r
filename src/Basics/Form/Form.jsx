import {useState} from "react";

export default function Form(){
    const[inputName ,setInputName]=useState();
    const [inputAge ,setInputAge]=useState('');
    const [inputCondition ,setInputCondition]=useState(false);

    const getName = ()=>{
        const nameValue = document.querySelector('#name').value;
        console.log(nameValue)
        setInputName(nameValue);
    }
    const getAge = ()=>{
        const ageValue = document.querySelector('#age').value;
        console.log(ageValue)
        setInputAge(ageValue);
    }
    const getCondition = ()=>{
        const conditionValue = document.querySelector("#accept").checked
        console.log(conditionValue)
        setInputCondition(conditionValue);
    }
    return(
        <div className='container my-4'>
           <form>
               <div className="form-group">
                   <label>Name :</label>
                   <input type="text"  id="name" className="form-control" onChange={getName}/>
               </div>
               <div className="form-group">
                   <label>Age :</label>
                   <input type="text"  id="age" className="form-control" onChange={getAge}/>
               </div>
               <div className="form-check">
                   <input type="checkbox"  id="accept" className="form-check-input" onClick={getCondition} />
                   <label htmlFor='accept' className="form-check-label">Accept our rules :</label>
               </div>
               <div>

                   <button type="button" className='btn btn-primary'> save</button>
               </div>

           </form>
        </div>
    )
}