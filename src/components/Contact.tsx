import {BsGoogle,BsFacebook,BsTwitterX,BsInstagram,BsYoutube} from 'react-icons/bs';

function Contact() {
    return (
        <div id='contact' className='w-full text-sm border-t-2  bg-white'>
            <footer className="lg:flex w-screen ">

                <div className="lg:w-2/5 p-4 m-auto ">
                    <h1 className="text-2xl font-bold ml-4 mb-4"> Developer {`</>`} </h1><hr className='border-green' /> 
                    <span className="flex gap-8 text-2xl m-4 ">
                        <i><BsGoogle className='text-black'/></i>
                        <i><BsInstagram className='text-black'/></i>
                        <i><BsFacebook className='text-black'/></i>
                        <i><BsYoutube className='text-black'/></i>
                        <i><BsTwitterX className='text-black'/></i>
                    </span>
                </div>

                <div className="lg:w-3/5 w-full p-2 lg:flex gap-4 list-none ">
                    <div className="m-2 flex flex-col gap-4">
                        <li className="font-medium ">Useful Links</li>
                    </div>
                    <hr />
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium  text-gray-800">Information</li>
                        <li className=''>About Us</li>
                        <li className=''>Privacy Policy</li>
                        <li className=''>Terms & Conditions</li>
                        <li className=''>What info we collect ?</li>
                    </div>
                    <hr />
                    <div className="m-2 flex flex-col gap-2">
                        <li className="font-medium ">Contact Us</li>
                        <li className=''>Mangaon, Raigad</li>
                        <li className=''>Phone - </li>
                        <li className=' hover:underline'>Email - <a href='mailto:'>dalvishrikant5456@gmail.com</a></li>
                        <li className=''>FAQ</li>
                    </div>
                    <hr />
                </div>
            </footer>
            <div className=" p-2 text-center font-semibold ">
                <p className='text-sm my-4'>Designed &👩🏻‍💻by Developer | © All Rights Reserved {new Date().getFullYear()} </p>
            </div>
        </div>
    )
}

export default Contact;
