function header() {
  const navbar = document.createElement('nav');
  navbar.innerHTML = ` <a class="navbar-brand" id="logo-navbar" href="#">
                        <img src="images/beesley.png" alt="logo">
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse ">
                            <div class="navbar-nav navbar-sections" >
                            <a class="nav-item nav-link active" id="menu-navbar" href="#">Menu</a>
                            <a class="nav-item nav-link" href="#">Locations</a>
                            <a class="nav-item nav-link" href="#">Our Story</a>
                            <a class="nav-item nav-link" id= "contact-navbar"href="#">Contact Us</a>
                            </div>
                        </div>`;
  navbar.className = 'navbar navbar-expand-lg navbar-light bg-light ';
  return navbar;
}

export default header;