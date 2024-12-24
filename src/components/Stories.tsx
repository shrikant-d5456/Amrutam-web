import { BsStar, BsStarFill } from "react-icons/bs"

const Stories = () => {

    const array = [
        {
            tagLine:"Consulted for Skin",
            name:"Sophie Moore",
            desc:"Chennai",
            date:"11/12/2003",
            star:5,
            heading:"“One of a kind service”",
            subHeading:"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
        },
        {
            tagLine:"Consulted for Skin",
            name:"Sophie Moore",
            desc:"Chennai",
            date:"11/12/2003",
            star:5,
            heading:"“One of a kind service”",
            subHeading:"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
        },
        {
            tagLine:"Consulted for Skin",
            name:"Sophie Moore",
            desc:"Chennai",
            date:"11/12/2003",
            star:5,
            heading:"“One of a kind service”",
            subHeading:"Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
        },
    ]

    return (
        <main id="review" className="bg-yellow-50 py-8">
            <div className='header-section sm:p-1 px-1'>
                <p className='heading'>STORIES FROM OUR VALUED CUSTOMERS!</p>
                <p className='sub-heading'>At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions. </p>
            </div>

            <div className='w-10/12 sm:flex gap-8 items-center justify-center m-auto '>

                {
                    array.map((item) => (
                        <div className=' sm:w-1/4 my-4 w-full flex flex-col shadow-xl rounded-xl overflow-hidden'>
                            <div className=' text-sm font-semibold bg-[#F5F3FC] p-2'>
                                <p>{item.tagLine}</p>
                            </div>

                            <div className=' p-8 bg-white'>
                                <div className='flex gap-1 justify-between'>
                                    <div className=" w-full flex">
                                    <span className=' bg-green-200 w-10 h-10 rounded-full mr-2'>
                                        <img src="" alt=""/>
                                    </span>
                                    <span>
                                        <p>{item.name}</p>
                                        <p className=' text-sm text-nowrap text-gray-500'>{item.desc}</p>
                                    </span>
                                    </div>
                                    <div>
                                    <span>
                                        <p className=" text-sm">{item.date}</p>
                                    </span>
                                    </div>
                                    
                                </div>
                                <div>
                                    <p className="flex  gap-1 my-1">{[...Array(item.star)].map((item)=>(
                                        <p className=" text-yellow-400 "> <BsStarFill/></p>
                                    ))}</p>
                                    <p className=' my-2 font-bold'>{item.heading}</p>
                                    <p className=' text-sm'>{item.subHeading}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

        </main>
    )
}

export default Stories
