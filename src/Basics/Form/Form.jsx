import {useState} from "react";

export default function Form(){
    const[formValue , setFormValue ]= useState({})
    const [inputCondition ,setInputCondition]=useState(false);

    const handleChange = (e)=>{
        const id = e.currentTarget.id;
        const value = e.currentTarget.value
        setFormValue(prevState => {
            return{...prevState,...{[id]:value}}
        })
    }

    const getCondition = ()=>{
        const conditionValue = document.querySelector("#accept").checked;
        setInputCondition(conditionValue);
    }
    return(

        <div className='container my-4'>
            {JSON.stringify(formValue)}
           <form>
               <div className="form-group">
                   <label>Name :</label>
                   <input type="text"  id="name" className="form-control" onChange={handleChange}/>
               </div>
               <div className="form-group">
                   <label>Age :</label>
                   <input type="text"  id="age" className="form-control" onChange={handleChange}/>
               </div>
               <div className="form-group">
                   <label>City :</label>
                   <input type="text"  id="city" className="form-control" onChange={handleChange}/>
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