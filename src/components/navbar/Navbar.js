import CartWidget from "../cartWidget/CartWidget";
import Logo from '../cartWidget/assets/logo.JPG'

const NavBar = () => {
    return (
        // <nav>
        //     <h3>ECOMMERCE Psicomahue</h3>
        //     <div>
        //         <button>Cursos</button>
        //         <button>Capacitaciones</button>
        //         <button>Psicotecnicos</button>
        //     </div>
        //     <CartWidget />
        // </nav>

        <nav class="navBarCustom navbar navbar-expand-lg ">
  <div class="container-fluid ">
    <a class="navbar-brand mx-5" href="/#">
      <img width="250px" height="auto" className="img-responsive" src={Logo}  alt="logo" />
  
    </a>
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active " aria-current="page" href="/#">Cursos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">Capacitaciones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#" >Psicotecnicos</a>
        </li>
      </ul>
    </div>
    <div class="px-5">
    <CartWidget />
    </div>
    
  
  </div>
</nav>
    )
}
export default NavBar