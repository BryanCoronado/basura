import { Link } from "react-router-dom"

export function  Navegacion (){
  return (
    <div>
      <h1>cevicheria</h1>
      <Link to='/carta'>CARTA</Link><br />
      <Link to='/principal'>PRINCIPAL</Link>

    </div>
  )
}


