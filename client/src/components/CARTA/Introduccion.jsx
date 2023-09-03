import '../../styles/introduccion.css'
import videoPortada from '../../galeria/ko.mp4';

const Introduccion = () => {
  return (
    <div className='contenedor-video'>
      <header>
        <video src={videoPortada} className="vid-bg" autoPlay loop muted></video>
      </header>
      
    </div>
    
  );
};

export default Introduccion;
