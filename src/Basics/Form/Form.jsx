import {useState} from "react";

export default function Form(){
    const[formValue , setFormValue ]= useState({})
    const [inputCondition ,setInputCondition]=useState(false);

    const handleChange = (e)=>{
        const currentTarget = e.currentTarget
        const id = currentTarget.id;
        let value =currentTarget.value;
         if (currentTarget.type === 'checkbox') {
            value = currentTarget.checked;
        }
        setFormValue(prevState => {
            return{...prevState,...{[id]:value}}
        })
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
               <div className="form-group">
                   <label>Country :</label>
                   <select className='form-control' id ='country' onClick={handleChange} >
                       <option value="MA">MAROC</option>
                       <option value="DZ">DZAIR</option>
                       <option value="BRD">BARDQIZ</option>
                       <option value="SBN">SBNYA</option>
                       <option value="other">Other</option>
                   </select>
               </div>
               <div className="form-check">
                   <input type="checkbox"  id="accept" className="form-check-input" onClick={handleChange} />
                   <label htmlFor='accept' className="form-check-label">Accept our rules :</label>
               </div>
               <div>

                   <button type="button" className='btn btn-primary'> save</button>
               </div>

           </form>
        </div>
    )
}