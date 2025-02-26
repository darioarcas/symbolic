
export const MenuButton = () => {
  return (
    <>

        <svg data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-label="Toggle navigation" className="menu-buttom" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" style={{fill: "rgb(255, 255, 255)",transform: "",msFilter:""}}><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path></svg>



        <nav className="navbar bg-transparent">
          {/* <div className="container-fluid"> */}
            {/* <a className="navbar-brand" href="#">Offcanvas dark navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div className="offcanvas offcanvas-start text-bg-dark w-50" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menú</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
              </div>
            </div>
          {/* </div> */}
        </nav>
    </>
  )
}
