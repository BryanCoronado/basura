import axios  from 'axios'

export const obtenerPrincipal=()=>{
    return axios.get('http://127.0.0.1:8000/principal/api/v1/principal/')

}