import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <footer className="bg-orange-200 text-dark mt-auto">
      <div className="container bg-warning m-0 position">
        <div className="row justify-content-between">
          <div className="col-md-3 mt-5">
            <a href="#" className="d-flex justify-content-center">
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2023/06/22/Golden-rings-Marriage-symbol-Realistic-Graphics-72728488-1-1-580x387.png"
                alt="WeddingWise Logo"
                width="100"
                className="rounded"
              />
            </a>
            <h5 className="d-flex justify-content-center">WeddingWise</h5>
          </div>
          <div className="col-md-3 mt-4 border-start border-warning-subtle">
            <h5 className="text-danger">About</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="https://getbootstrap.com/" className="text-muted">
                  Bootstrap
                </a>
              </li>
              <li>
                <a href="https://react.dev/" className="text-muted">
                  React
                </a>
              </li>
              <li>
                <a href="https://redux.js.org/" className="text-muted">
                  Redux
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-4 border-start border-warning-subtle">
            <h5 className="text-danger">Follow us</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="https://github.com/Rajesh3859" className="text-muted">
                  Github
                </a>
              </li>
              <li>
                <a href="#" className="text-muted">
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rajesh-m-207b78320/"
                  className="text-muted"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-4 border-start border-warning-subtle">
            <h5 className="text-danger">Legal</h5>
            <ul className="list-unstyled text-muted">
              <li>
                <a href="#" className="text-muted">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 font-weight-bold">
            &copy; {new Date().getFullYear()} RM Rajesh™
          </p>
          <div>
            <a href="#" className="text-muted mx-2" aria-label="Facebook">
              <BsFacebook />
            </a>
            <a href="#" className="text-muted mx-2" aria-label="Instagram">
              <BsInstagram />
            </a>
            <a href="#" className="text-muted mx-2" aria-label="Twitter">
              <BsTwitter />
            </a>
            <a
              href="https://github.com/Rajesh3859"
              className="text-muted mx-2"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
            <a href="#" className="text-muted mx-2" aria-label="Dribbble">
              <BsDribbble />
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh-m-207b78320/"
              className="text-muted mx-2"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCom;
