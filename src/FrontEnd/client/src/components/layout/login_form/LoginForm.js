import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/estilos.css';

export default function LoginForm() {

  const [datos, setDatos] = useState({
      user: '',
      password: ''
  })

  const handleInputChange = (event)=> {

    //console.log(event.target.value)

    setDatos({
      ...datos,
      [event.target.name] : event.target.value
  })

  }

  const enviarDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...' + datos.user + ' ' + datos.password)
  }
  
    return (
      <div>

         <div className="container " >

           <div className="row">
             <div className="col-md-12  form-group bg-dark p-md-5">

               <form className="p-5" action="" onSubmit={enviarDatos}>

                 <h1 className="mb-5 text-white text-center display-4"><b>Sing in</b></h1>

                 <input className="form-control d-block  w-100 mt-4 mb-3 " type="email" name="user" id="" placeholder="User"  onChange={handleInputChange}  required/>
                 <input className="form-control d-block  w-100 mb-5"  type="password" name="password" id=""  placeholder="Password"  onChange={handleInputChange} required/>
                 <button className="btn btn-danger d-block w-100 mb-3" type="submit">Login</button>

               </form>
    

             </div>
           </div>

        </div>

            
      </div>
    )
}
