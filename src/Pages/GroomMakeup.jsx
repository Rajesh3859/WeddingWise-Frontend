
import { useState } from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'flowbite-react' 
import {  Tooltip, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';



const MakeupArtists = () => {
    const [text] = useState('+9197953282436');
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
<div className=" flex flex-col lg:flex-row w-full h-max max-w-full  bg-fuchsia-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
        <img className="p-8 rounded-t-lg h-96 max-w-96" src="https://www.wedium.com/bhubaneswar/wp-content/uploads/2022/03/groom-makeup-in-bbsr.jpg" alt="Photography image" />
    </Link>
    <div className="px-5 pb-5 ">
        <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">Ashwini Makeup Artist</h5>
        </Link>
        <br />
        <p>Ashwini Makeup Artist is a famous bridal makeup service provider based in Mumbai. For every bride-to-be, it becomes imperative to look stunning for their special day. Makeup is one of the most important aspects of a bridal makeover; hence, it must be done by an expert. Therefore, if you are looking for a team of makeup artists who offer you a wide range of services for all your wedding functions, then Ashwini Makeup Artist is the choice that you should make. She is someone who has turned her passion into a profession and believes in bringing out natural beauty in her brides. </p>
        <div className="flex items-center mt-24">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <br />
        <div className="flex items-center justify-between" >
            <span className="text-xl text-gray-900 font-light dark:text-white">From Rs.10,000</span>
    
    <Button onClick={toggleModal} className='sm:ml-80'>
        Request Pricing
      </Button>
      <Modal show={isOpen} onClose={toggleModal} >
        <ModalHeader className='mb-6 bg-stone-500'>
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
          <Button onClick={toggleModal}>
            Close
          </Button>
          
        </ModalFooter>
      </Modal>
    
  
  </div>

        </div>
</div>

<div className=" flex flex-col lg:flex-row w-full h-max max-w-full   bg-fuchsia-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
        <img className="p-8 rounded-t-lg h-96 max-w-96" src="https://i.pinimg.com/736x/c4/54/c7/c454c71bec68ace68d7241c83081b3b8.jpg" alt="Photography image" />
    </Link>
    <div className="px-5 pb-5 ">
        <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">Dhanu Gupta Makeovers </h5>
        </Link>
        <br />
        <p>Dhanu Gupta Makeovers is a talented and exquisite makeup artist based out of Delhi. Makeup is that one feature which stays with you when the rest of thing start fading and makes you feel enlighted and feel glam and if you are planning a wedding ceremony then it becomes important to opt for a good and amazing makeup artist who can upgrade your looks to the fullest. If you are planning one such function and looking for one such person then Dhanu Gupta Makeovers can help you in availing top-notched beauty services with ease and happiness. </p>
        <div className="flex items-center mt-24">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <br />
        <div className="flex items-center justify-between" >
            <span className="text-xl text-gray-900 font-light dark:text-white">From Rs.15,000</span>
             
            <Button onClick={toggleModal} className='sm:ml-80'>
        Request Pricing
      </Button>
            <Modal show={isOpen} onClose={toggleModal} >
        <ModalHeader className='mb-6  bg-stone-500'>
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
          <Button onClick={toggleModal}>
            Close
          </Button>
          
        </ModalFooter>
      </Modal>
        </div>
    </div>
</div>

<div className=" flex flex-col lg:flex-row w-full h-max max-w-full  bg-fuchsia-400 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link to="#">
        <img className="p-8 rounded-t-lg h-96 max-w-96" src="https://www.wedium.com/wp-content/uploads/2022/03/best-groom-makeup-in-bhubaneswar.jpg" alt="Photography image" />
    </Link>
    <div className="px-5 pb-5 ">
        <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">Sakshi Makeup Artistry</h5>
        </Link>
        <br />
        <p>Sakshi Makeup Artistry, a seasoned professional in makeup and hairstyling, operates from Lucknow. With meticulous attention to detail, every look she creates is tailored to the clients unique skin type, texture, and preferences, ensuring a seamless and flattering result. Her refined makeup techniques and exquisite hairstyling have garnered immense praise from satisfied clients, particularly for pre-bridal and bridal functions. Offering flexibility and convenience, Sakshi is prepared to travel nationwide to cater to clients at their preferred venues, delivering her expert beauty, makeup, and hairstyling services with finesse and dedication.</p>
        <div className="flex items-center mt-24">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <br />
        <div className="flex items-center justify-between" >
            <span className="text-xl text-gray-900 font-light dark:text-white">From Rs.20,000</span>
             

            <Button onClick={toggleModal} className='sm:ml-80'>
        Request Pricing
      </Button>
            <Modal show={isOpen} onClose={toggleModal} >
        <ModalHeader className='mb-6 bg-stone-500'>
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
          <Button onClick={toggleModal}>
            Close
          </Button>
          
        </ModalFooter>
      </Modal>
    
</div>
        
    </div>
</div>
</div>

       
    );
};

export default MakeupArtists;