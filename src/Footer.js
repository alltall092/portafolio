import React,{useState } from 'react'
import axios from 'axios';
import './Footer.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Footer=({id})=>{
const [datos,setDatos]=useState({nombre:"",correo:"",mensaje:""});
const getDatos=()=>{

    axios.get("https://proyect-16007.firebaseio.com/contacto.json").then((res)=>setDatos(res.data))
}
const enviar=(e)=>{

e.preventDefault();
axios.post("https://proyect-16007.firebaseio.com/contacto.json",JSON.stringify(datos)).then(()=>{
toast("Wow so easy!");
getDatos();
}).catch(err=>console.log(err));


}


return (<>
<div className="container-fluid .container-footer">
    <div className="row" id={id}>
<div className="col-md-6">
<dl>
  <dt>contacto</dt>
  <dd>
  <i className="fa fa-phone"></i>+18298046401
  </dd>
  <dt>whatsapp</dt>
  <dd>
  <i className="fa-brands fa-whatsapp"></i>+18298046401
  </dd>
  <dt>correo</dt>
  <dd>
  <i className="fa fa-envelope"></i> piyoyo279@gmail.com
  </dd>

</dl>
</div>

<div className="col-md-6">
    <h2>Formulario de Contacto</h2>
<form onSubmit={enviar} method="post">
<div className="form-group">
<label className="form control-label">Nombre</label>
<input  type="text" className="form-control" onChange={(e)=>setDatos(e.target.value)} value={datos.nombre}/>
</div>
<div className="form-group">
<label className=" form control-label">Correo</label>
<input  type="email" className="form-control" onChange={(e)=>setDatos(e.target.value)}  value={datos.correo}/>
</div>

<div className="form-group">
<label className=" form control-label">Comentario</label>
<textarea class="form-control" col="20"row="20" aria-label="With textarea" onChange={(e)=>setDatos(e.target.value)} value={datos.mensaje}></textarea>
</div>
<input type="submit" className=" btn btn-success" value="Enviar" style={{width:"100%"}}/>
    </form>
    </div>
        </div>
    </div>
    <ToastContainer />

</>)


}
export default Footer;