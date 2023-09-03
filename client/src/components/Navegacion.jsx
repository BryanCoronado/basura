
import '../styles/navegacion.css'; // Importa tu archivo de estilos CSS

export function Navegacion() {



/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
  return (
    <div className="contenedor-navbar">
    <nav className="nav container">
      <a href="#" className="nav__logo">antojitos del mar</a>

      <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/principal" className="nav__link ">
              <i className='bx bx-home-alt nav__icon'></i>
              <span className="nav__name">Principal</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="/blog" className="nav__link">
              <i className='bx bx-user nav__icon'></i>
              <span className="nav__name">Blog</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="/carta" className="nav__link">
              <i className='bx bx-book-alt nav__icon'></i>
              <span className="nav__name">Carta</span>
            </a>
          </li>
          <li className="nav__item">
            <a href="http://localhost:8000/admin/login/?next=/admin/" className="nav__link">
              <i className='bx bx-book-alt nav__icon'></i>
              <span className="nav__name">admin</span>
            </a>
          </li>

        </ul>
      </div>

      <img src="assets/img/perfil.png" alt="" className="nav__img" />
    </nav>
    </div>
  );
  }