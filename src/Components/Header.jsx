import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../Redux/Slice/themeSlice";
import { signOutSuccess } from "../Redux/Slice/userSlice";
import { Navbar, Nav, NavDropdown, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { selectCurrentUser } from "../Redux/Slice/userSlice"; // Import the memoized selector

const Header = () => {
  const path = useLocation().pathname;
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
      className="border-bottom border-2 sticky"
    >
      <Navbar.Brand as={Link} to="/Home"
        className="font-weight-bold text-lg">
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
            <Nav.Link
              as={Link}
              to="/PlanningTool"
              active={path === "/PlanningTool"}
            >
              Planning Tool
            </Nav.Link>
            <NavDropdown title="Wedding Vendor" id="wedding-vendor-dropdown">
              <NavDropdown.Item
                as={Link}
                to="/WeddingVendor/WeddingPhotographers"
              >
                Wedding Photographers
              </NavDropdown.Item>
              <NavDropdown.Item
                as={Link}
                to="/WeddingVendor/WeddingVideographers"
              >
                Wedding Videographers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/WeddingVendor/WeddingPlanners">
                Wedding Planners
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/WeddingVendor/Caterers">
                Caterers
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Wedding Venue" id="wedding-venue-dropdown">
              <NavDropdown.Item as={Link} to="/WeddingVenue/Banquet">
                Banquet Halls
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/WeddingVenue/WeddingResort">
                Wedding Resorts
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/WeddingVenue/Mandapam">
                Kalyana Mandapams
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bride" id="bride-dropdown">
              <NavDropdown.Item as={Link} to="/Bride/MehndiArtists">
                Mehndi Artists
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Bride/MakeupArtists">
                Bridal Makeup Artists
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Groom" id="groom-dropdown">
              <NavDropdown.Item as={Link} to="/Groom/Dress">
                Sherwani
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Groom/GroomMakeup">
                Groom Makeup Artists
              </NavDropdown.Item>
            </NavDropdown>
            {currentuser ? (
              <NavDropdown
                align="end"
                title={
                  <img
                    src={
                      currentuser.rest?.profilePicture ||
                      "/path/to/default-image.jpg"
                    } // Fallback image if profilePicture is not available
                    alt="user"
                    className="rounded-circle"
                    style={{ width: "30px", height: "30px" }}
                  />
                }
                id="dropdown-avatar"
              >
                <NavDropdown.Header>
                  <strong>👤 {currentuser.rest?.username || "Guest"}</strong>{" "}
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

            <button
              className="btn btn-outline-info ml-3"
              onClick={() => dispatch(toggleTheme())}
            >
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default Header;
