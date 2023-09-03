import '../../styles/galeria.css'; // Asegúrate de tener el archivo CSS correspondiente
import uno from './../../galeria/galeria1.jpg';

const Galeria = () => {
  return (
    <div className="grid-container">
      <div className="grid-item tall delete_two" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item delete_two" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item wide" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item tall" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
      <div className="grid-item tall wide " style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la igen 6</p>
        </div>
      </div>
      <div className="grid-item" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 5</p>
        </div>
      </div>
      <div className="grid-item delete_one" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 5</p>
        </div>
      </div>
      <div className="grid-item delete" style={{ backgroundImage: `url(${uno})` }}>
        <div className="overlay">
        <p className='overlay-text'>Descripción de la imagen 6</p>
        </div>
      </div>
    </div>
  );
}

export default Galeria;
