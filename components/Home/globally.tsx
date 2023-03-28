import Image from "next/image";
import Link from "next/link";
import DomesticImg from "../../public/Images/Home/Group 5432 (1).svg";
import InternationalImg from "../../public/Images/Home/Group 5433.svg";

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

function Globally() {
    return(
        <div className="h-full bg-white py-24 px-7 sm:px-16 xl:px-32 2xl:px-52">
            <div className="h-full grid justify-items-center content-center space-y-10 xl:container xl:mx-auto">
                <h1 
                    className="font-poppinsBold text-black text-2xl 2xl:text-3xl text-center" 
                    data-aos="fade-up" 
                    data-aos-duration="1500"
                >
                    <span className="font-bold text-brownfont">
                        Globally
                    </span> {""}
                        Accepted
                </h1>
                <div 
                    className="w-full lg:w-5/6 xl:w-3/4 justify-center" 
                    data-aos="fade-up" 
                    data-aos-duration="1500"
                >
                    <p className="font-nunito items-center text-black text-base 2xl:text-xl text-center">
                        {description}
                    </p>
                </div>
                <div 
                    className="flex justify-center" 
                    data-aos="fade-up" 
                    data-aos-duration="2000"
                >
                    <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 md:gap-20 xl:gap-36">
                        <Link href="#!">
                            <a className="flex justify-center cursor-pointer w-full sm:w-3/4 md:w-full">
                                <Image 
                                    src={DomesticImg.src}
                                    width={450}
                                    height={430}
                                    loading="lazy"
                                    alt="Domestic travel"
                                />
                            </a>
                        </Link>
                        <Link href="#!">
                            <a className="flex justify-center cursor-pointer w-full sm:w-3/4 md:w-full">
                                <Image
                                    src={InternationalImg.src}
                                    width={450}
                                    height={430}
                                    loading="lazy"
                                    alt="International travel"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Globally };