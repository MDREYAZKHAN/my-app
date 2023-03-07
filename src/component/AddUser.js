import React, { useState ,useEffect} from 'react'
import axios from "axios"
import './AddUser.css'
import UserDashboard from './UserDasbord';

const AddUser =()=>{
    const [data,setData]=useState([{}]);
     useEffect(()=>{
        getUser()
        console.log(data)
     },[]);
     const getUser =async()=>{
        await axios.get("http://localhost:3000/posts" )
               .then((res)=>setData(res.data));
     };
   
    const[formData,setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        marks:"",
    });
    const[UpdateDate,setUpdateData] = useState({
        name:"",
        email:"",
        phone:"",
        marks:"",
    });
    
    const handleFormSubmit = async(e) => {
         let response = await axios.post ('http://localhost:3000/posts',formData)

         if(response){
            alert("data submitted successfully")
         }
         else{
            alert("something went wrong");
         }
     setFormData({
        name:"",
        email:"",
        phone:"",
        marks:"",
     })
     getUser()
    };
   

const handleDelete =async(id)=>{
            await axios.delete("http://localhost:3000/posts/"+id)
            .then((res)=> alert("deleted success"))
            
            getUser()
           };
         const handleUpdate= async()=>{
            await axios.put("http://localhost:3000/posts")
            
         }
    
    return(
        <div className='container'>
               <div className='row'>
                    <div className='col-md-7'>
                        <h1>Add Student form</h1>

                        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Student Name</label>
  <input type="Student" class="form-control" id="exampleFormControlInput1" placeholder=""
     value={formData.name}
     onChange={(e)=> setFormData({ ...formData,name:e.target.value})}/>
</div>             

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""
  value={formData.email}
     onChange={(e)=> setFormData({ ...formData,email:e.target.value})}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone No</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""
  value={formData.phone }
     onChange={(e)=> setFormData({ ...formData,phone:e.target.value})}/>
</div> 

           <div class="mb-3">
                <select class="form-select" name="Marks" id="" value={formData.marks }
     onChange={(e)=> setFormData({ ...formData,marks:e.target.value})}  >
                  <option value="">Marks</option>
                  <option value="">Pass</option>
                  <option value="">faile</option>
                </select >
                
              </div>


           <div class="mb-3">
            <button className = " btn btn-success" onClick={handleFormSubmit}>Add Student</button>
           </div>
                          </div>
               </div>{""}

               <div>
            <h1> User Dashboard </h1>
            <table class="table  table-dark table-hover">
            
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Division</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    { data &&
        data.map((user)=>(
            <tr>
            <th scope="row">{user.id}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.Division}</td>
            <td
                style={{display:"flex", justifyContent:"space-between"}}>

                    <button className="btn btn-info" data-toggle="modal" data-target="#exampleModal" onClick={()=>setUpdateData({
                        name:user.name,
                        email:user.email,
                        phone: user.phone,
                         Division:user.Division,
                    })} >Edit</button>

                    <button className="btn btn-danger"  onClick={()=> handleDelete(user.id)}>Delete</button>
            </td>
          </tr>
        ))
    }
  </tbody>
</table>
     </div>   
     <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update User</h5>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
    
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Student Name</label>
  <input type="Student" class="form-control" id="exampleFormControlInput1" placeholder=""
     value={UpdateDate.name}
     onChange={(e)=> setUpdateData({ ...UpdateDate,name:e.target.value})}/>
</div>             

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""
  value={UpdateDate.email}
     onChange={(e)=>setUpdateData({ ...UpdateDate,email:e.target.value})}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone No</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder=""
  value={UpdateDate.phone }
     onChange={(e)=> setUpdateData({ ...UpdateDate,phone:e.target.value})}/>
</div> 

           <div class="mb-3">
                <select class="form-select" name="Marks" id="" value={UpdateDate.marks }
     onChange={(e)=> setUpdateData({ ...UpdateDate,marks:e.target.value})}  >
                  <option value="">Marks</option>
                  <option value="">Pass</option>
                  <option value="">faile</option>
                </select >
                
              </div>



      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary"     onClick={()=>handleUpdate()} >Update User</button>
      </div>
    </div>
  </div>
</div>        
        </div>
    );
};
export default AddUser;


















