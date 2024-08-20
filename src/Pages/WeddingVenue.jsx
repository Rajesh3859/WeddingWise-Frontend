 
import { Link } from 'react-router-dom';



const WeddingVenue = () => {
    return (
      <div>
        <div className="bg-orange-100">
          <h1 className="text-3xl font-bold">Wedding Venue</h1>
          <br />
          <h3 className="text-xl font-semibold">
            {" "}
            Explore Wedding Venue by category
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-black">
          <div className="max-w-sm mt-10 mb-5 ml-5 mr-5 p-6 hover:bg-violet-300 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-black">
            <Link to="/WeddingVenue/Banquet">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500  ">
                Banquet Halls
              </h5>
            </Link>
            <img
              className="mt-3 h-60 w-96"
              src="https://content.jdmagicbox.com/comp/pune/r2/020pxx20.xx20.210715155158.i9r2/catalogue/veer-banquet-s-ac-hall-dhayari-pune-banquet-halls-rafwje36as.jpg"
              alt="banquet image"
            />
            <br />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Find the banquet halls near you of your choice.
            </p>

            <Link
              to="/WeddingVenue/Banquet"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Start Searching Banquet Halls
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
          <div className="max-w-sm mt-10 mb-5 ml-5 mr-5 p-6 hover:bg-violet-300 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-black">
            <Link to="/WeddingVenue/WeddingResort">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500  ">
                Wedding Resorts
              </h5>
            </Link>
            <img
              className="mt-3 h-60 w-96"
              src="https://cdn0.weddingwire.in/vendor/5442/3_2/640/jpeg/whatsapp-image-2018-08-27-at-1-03-01-pm_15_65442-160999585214207.jpeg"
              alt="resort image"
            />
            <br />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Find the resorts near you of your choice.
            </p>
            <br />
            <Link
              to="/WeddingVenue/WeddingResort"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Start Searching Wedding Resorts
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>

          <div className="max-w-sm mt-10 mb-5 ml-5 mr-5 p-6 hover:bg-violet-300 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-black">
            <Link to="/WeddingVenue/Mandapam">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-500  ">
                Marriage Halls
              </h5>
            </Link>
            <img
              className="mt-3 h-60 w-96"
              src="https://5.imimg.com/data5/NK/AW/GLADMIN-33559172/marriage-hall-500x500.jpg"
              alt="mandapam image"
            />
            <br />
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Find the kalyana mandapam of your choice.
            </p>
            <br />
            <Link
              to="/WeddingVenue/Mandapam"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Start Searching Kalyana Mandapam
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default WeddingVenue;