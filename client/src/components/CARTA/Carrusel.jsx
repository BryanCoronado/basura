import '../../styles/carrusel.css'
import uno from '../../galeria/ceviche-carrusel.png'
import { Carousel } from 'primereact/carousel';

const Carrusel = () => {
    const images = [
        { src: uno, alt: 'Imagen 1' },
        { src: uno, alt: 'Imagen 2' },
        { src: uno, alt: 'Imagen 3' },
        { src: uno, alt: 'Imagen 4' },
        { src: uno, alt: 'Imagen 5' },
        { src: uno, alt: 'Imagen 5' },
    ];

    const imageTemplate = (imageGroup) => {
        return (
            <div className="image-group">
                {imageGroup.map((image, index) => (
                    <div key={index} className="image-container">
                        <img src={image.src} alt={image.alt} className="carousel-image" />
                    </div>
                ))}
            </div>
        );
    };

    // Agrupar las imágenes en grupos de 3
    const imageGroups = [];
    for (let i = 0; i < images.length; i += 3) {
        imageGroups.push(images.slice(i, i + 3));
    }

    return (
        <div className='contenedor-carrusel'>
            <Carousel value={imageGroups} numScroll={1} numVisible={1} itemTemplate={imageTemplate} />
        </div>
    );
}

export default Carrusel;
