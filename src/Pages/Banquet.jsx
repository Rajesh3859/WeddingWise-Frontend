
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react' 
import {  Tooltip, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';



const Banquet = () => {
    const [text] = useState('+919932541987');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
    return (
      <div>
        <div className=" flex flex-col lg:flex-row w-full h-max max-w-full bg-400 border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="#">
            <img
              className="p-8 rounded-t-lg h-96 max-w-96"
              src="https://cdn0.weddingwire.in/vendor/4008/3_2/640/jpg/file-1676115706836_15_434008-167611570862825.webp"
              alt="Photography image"
            />
          </Link>
          <div className="px-5 pb-5 ">
            <Link to="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
                The White Palace
              </h5>
            </Link>
            <br />
            <p>
              The White Palace is a wedding venue based in Noida. Picking a
              wedding venue is one of the crucial things in wedding planning. If
              you are looking for a fabulous venue to host your wedding
              functions. Then go for The White Palace. It offers many facilities
              and services, making it a suitable platform for weddings and
              related events. The staff provides various personalized services
              and amenities to make your special day comfortable and elegant.
              The experienced team of The White Palace helps you with all the
              minute details, such as selecting the menu and decor, so your
              nuptial ceremony is grand, eventful and worth remembering for a
              lifetime.{" "}
            </p>
            <div className="flex items-center mt-24">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <br />
            <div className="flex items-center justify-between">
              <span className="text-xl text-gray-900 font-light dark:text-white">
                From Rs.2500
              </span>

              <Button onClick={toggleModal} className="sm:ml-80">
                Request Pricing
              </Button>
              <Modal show={isOpen} onClose={toggleModal}>
                <ModalHeader className="mb-6  bg-teal-500">
                  Request Details
                </ModalHeader>
                <ModalBody>
                  <div className="relative flex items-center space-x-2 ring-offset-blue-600">
                    <TextInput
                      type="text"
                      value={text}
                      className="flex-grow bg-slate-500 font-bold"
                    />
                    <Button
                      onClick={handleCopy}
                      color="primary"
                      className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Copy
                    </Button>
                    {copied && (
                      <Tooltip content="Copied!" placement="top" open>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">
                          Copied!
                        </span>
                      </Tooltip>
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={toggleModal}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row w-full h-max max-w-full   bg-400 border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="#">
            <img
              className="p-8 rounded-t-lg h-96 max-w-96"
              src="https://cdn0.weddingwire.in/vendor/4704/3_2/640/jpeg/wedding-venue-ganeshwaram-hotel-and-banquet-stage-decor_15_464704-170911754875609.webp"
              alt="Photography image"
            />
          </Link>
          <div className="px-5 pb-5 ">
            <Link to="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
                Ganeshwaram hotel and banquet{" "}
              </h5>
            </Link>
            <br />
            <p>
              Located in Noida, Ganeshwaram Hotel and Banquet is a wedding
              banquet hall for hosting your regal wedding. It is conveniently
              situated within close proximity to popular landmarks such as
              Swaminarayan Akshardham (13 km) and Tughlaqabad Fort (15 km). The
              venue of a stunning banquet hall and a hotel facilitating guest
              accommodation for your big fat wedding. This 3-star venue features
              air-conditioned rooms with complimentary WiFi and private
              bathrooms. The interior of Ganeshwaram Hotel and Banquet is
              modernised and of top-notch quality. The dedicated staff of the
              banquet organise the entire event as per your suggested needs and
              preferences.{" "}
            </p>
            <div className="flex items-center mt-24">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <br />
            <div className="flex items-center justify-between">
              <span className="text-xl text-gray-900 font-light dark:text-white">
                From Rs.1599
              </span>

              <Button onClick={toggleModal} className="sm:ml-80">
                Request Pricing
              </Button>
              <Modal show={isOpen} onClose={toggleModal}>
                <ModalHeader className="mb-6   bg-teal-500">
                  Request Details
                </ModalHeader>
                <ModalBody>
                  <div className="relative flex items-center space-x-2 ring-offset-blue-600">
                    <TextInput
                      type="text"
                      value={text}
                      className="flex-grow bg-slate-500 font-bold"
                    />
                    <Button
                      onClick={handleCopy}
                      color="primary"
                      className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Copy
                    </Button>
                    {copied && (
                      <Tooltip content="Copied!" placement="top" open>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">
                          Copied!
                        </span>
                      </Tooltip>
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={toggleModal}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row w-full h-max max-w-full bg-400 border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="#">
            <img
              className="p-8 rounded-t-lg h-96 max-w-96"
              src="https://cdn0.weddingwire.in/vendor/2508/3_2/640/jpg/img-3770_15_102508-159542830842371.webp"
              alt="Photography image"
            />
          </Link>
          <div className="px-5 pb-5 ">
            <Link to="#">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
                Saffron Banquet
              </h5>
            </Link>
            <br />
            <p>
              Selecting the perfect venue for pre-wedding or wedding events in
              the city of Noida can be a daunting task. Choosing a venue that
              suits your preferences and meets all your requirements for a
              flawless celebration is crucial. Saffron Banquet emerges as an
              ideal one-stop destination for hosting various functions. Whether
              its a pre-wedding ceremony or the wedding itself, Saffron Banquet
              offers all the essential amenities to ensure a seamless and
              enjoyable event for you and your loved ones.
            </p>
            <div className="flex items-center mt-24">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <br />
            <div className="flex items-center justify-between">
              <span className="text-xl text-gray-900 font-light dark:text-white">
                From Rs.3000
              </span>

              <Button onClick={toggleModal} className="sm:ml-80">
                Request Pricing
              </Button>
              <Modal show={isOpen} onClose={toggleModal}>
                <ModalHeader className="mb-6 bg-teal-500">
                  Request Details
                </ModalHeader>
                <ModalBody>
                  <div className="relative flex items-center space-x-2 ring-offset-blue-600">
                    <TextInput
                      type="text"
                      value={text}
                      className="flex-grow bg-slate-500 font-bold"
                    />
                    <Button
                      onClick={handleCopy}
                      color="primary"
                      className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Copy
                    </Button>
                    {copied && (
                      <Tooltip content="Copied!" placement="top" open>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1">
                          Copied!
                        </span>
                      </Tooltip>
                    )}
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={toggleModal}>Close</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banquet;