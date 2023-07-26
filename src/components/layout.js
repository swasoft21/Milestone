import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" class="nav-link"></Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"></a>
              </li>

              <li class="nav-item">
                <a class="nav-link disabled"></a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <Link to="/" class="nav-link"></Link>
                  </li>
                  {/* <li class="nav-item">
                    <Link to="/aboutus" class="nav-link">About</Link>
                  </li > */}
                  <li lass="nav-item"><Link to="/menu" class="nav-link"></Link>
                  </li>
                </ul>

              </div>


            </form>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;