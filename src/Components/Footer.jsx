import { Footer } from "flowbite-react";
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
    <Footer container className=" dark:bg-black-800 bg-orange-200 ">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="#"
              src="https://www.creativefabrica.com/wp-content/uploads/2023/06/22/Golden-rings-Marriage-symbol-Realistic-Graphics-72728488-1-1-580x387.png"
              alt="Logo"
              name="WeddingWise"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-500">
            <div>
              <Footer.Title title="about" className="text-red-500" />
              <Footer.LinkGroup col className="text-gray-700">
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
                <Footer.Link href="#">React</Footer.Link>
                <Footer.Link href="#">Redux</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" className="text-red-500" />
              <Footer.LinkGroup col className="text-gray-700">
                <Footer.Link href="https://github.com/Rajesh3859">
                  Github
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
                <Footer.Link href="https://www.linkedin.com/in/rajesh-m-207b78320/">
                  LinkedIn
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-red-500" />
              <Footer.LinkGroup col className="text-gray-700">
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between font-bold">
          <Footer.Copyright
            className="text-gray-800"
            href="#"
            by="RM Rajesh™"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/Rajesh3859" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
            <Footer.Icon
              href="https://www.linkedin.com/in/rajesh-m-207b78320/"
              icon={BsLinkedin}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
