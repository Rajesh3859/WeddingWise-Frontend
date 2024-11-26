import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Slice/themeSlice";
import { signOutSuccess } from "../Redux/Slice/userSlice";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { selectCurrentUser } from "../Redux/Slice/userSlice";
import { useNavigate } from "react-router-dom"; // Import the memoized selector

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentuser = useSelector(selectCurrentUser); // Use memoized selector
  const { theme } = useSelector((state) => state.theme || {});
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  const handleSignout = () => {
    dispatch(signOutSuccess(alert("Sign out successfully")));
    localStorage.removeItem("token");
  };

  return (
    <Navbar
      bg={theme === "light" ? "dark" : "light"}
      expand="lg"
      className="border-bottom border-2 sticky-top"
    >
      <Navbar.Brand as={Link} to="/" className="font-weight-bold text-lg">
        <span className="bg-gradient-to-r from bg-yellow-600 via-orange-500 to-red-600 text-transparent bg-clip-text">
          WeddingWise
        </span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

      <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        show={showOffcanvas}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-row-right grid gap-4 ">
            {/* Navigation Links */}
            <Nav.Link onClick={() => navigate(`/SubBrands}`)}>
              Planning Tool
            </Nav.Link>
            <Nav.Link onClick={() => navigate(`/SubBrands}`)}>
              Wedding Vendor
            </Nav.Link>
            <Nav.Link onClick={() => navigate(`/SubBrands}`)}>
              Wedding Venue
            </Nav.Link>
            <Nav.Link onClick={() => navigate(`/SubBrands}`)}>Bride</Nav.Link>
            <Nav.Link onClick={() => navigate(`/SubBrands}`)}>Groom</Nav.Link>

            {/* User Authentication */}
            {currentuser ? (
              <NavDropdown
                align="end"
                title={
                  <img
                    src="" // Fallback image if profilePicture is not available
                    alt="👤user"
                    className="rounded-circle"
                    style={{ width: "30px", height: "30px" }}
                  />
                }
                id="dropdown-avatar"
              >
                <NavDropdown.Header>
                  <strong> 👤{currentuser.rest?.username || "Guest"}</strong>
                  <br />
                  📧 {currentuser.rest?.email || "No Email"}
                </NavDropdown.Header>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  as={Link}
                  to="/Signin"
                  onClick={handleSignout}
                >
                  ⬅️ <strong className="text-danger">Sign out</strong>
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/Signin" className="btn btn-outline-info">
                Sign In
              </Nav.Link>
            )}

            {/* Theme Toggle */}
            <button
              className="btn btn-outline-info ml-3"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>

            {/* Cart Icon */}
            <Nav.Link as={Link} to="/Cart" className="position-relative">
              <FaShoppingCart size={20} />
              {
                <span
                  className="badge badge-pill badge-danger position-absolute"
                  style={{
                    top: "-5px",
                    right: "-10px",
                    fontSize: "12px",
                  }}
                ></span>
              }
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Header;
