import Link from "next/link";
import BeijingImg from "../../public/Images/Home/Beijing.png";
import TurkeyImg from "../../public/Images/Home/Turkey.png";
import PakistanImg from "../../public/Images/Home/Pakistan.png";

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const styleImg = "w-3/4 pb-8"
const styleDestination = "flex justify-center cursor-pointer"
const styleCountryMobile = "grid md:hidden pb-5 md:pb-0 justify-center text-brownfont font-poppinsMedium text-xl"
const styleCountry = "hidden md:flex justify-center text-brownfont font-poppinsMedium text-xl"

function Promotion() {
    return(
        <div className="h-full grid bg-white pt-14 md:pt-24 xl:py-24 px-7 sm:px-16 xl:px-32 2xl:px-52">
            <div className="grid xl:container xl:mx-auto justify-items-center content-center space-y-10">
                <h1 
                    className="font-poppinsBold text-black text-2xl 2xl:text-3xl text-center" 
                    data-aos="fade-up" 
                    data-aos-duration="1500"
                >
                    <span className="text-brownfont">
                        Check Our Best
                    </span> {""}
                        Promotional Tour
                </h1>
                <div className="w-full lg:w-5/6 xl:w-3/4 pb-10">
                    <p 
                        className="font-nunito items-center text-black text-base 2xl:text-xl text-center" 
                        data-aos="fade-up"
                        data-aos-duration="1500"
                    >
                        {description}
                    </p>
                </div>
                <div 
                    className="grid grid-cols-1 md:grid-cols-3" 
                    data-aos="fade-up" 
                    data-aos-duration="2000"
                >
                    <Link href="/">
                        <a className={styleDestination}>
                            <img
                                src={BeijingImg.src}
                                className={styleImg}
                                loading="lazy"
                                alt="Beijing"
                            />
                        </a>
                    </Link>
                    <p className={styleCountryMobile}>
                        Beijing
                    </p>
                    <Link href="/">
                        <a className={styleDestination}>
                            <img
                                src={TurkeyImg.src}
                                className={styleImg}
                                loading="lazy"
                                alt="Turkey"
                            />
                        </a>
                    </Link>
                    <p className={styleCountryMobile}>
                        Turkey
                    </p>
                    <Link href="/">
                        <a className={styleDestination}>
                            <img
                                src={PakistanImg.src}
                                className={styleImg}
                                loading="lazy"
                                alt="Pakistan"
                            />
                        </a>
                    </Link>
                    <p className={styleCountryMobile}>
                        Pakistan
                    </p>

                    {/* Text below is for md screen and above */}
                    <p className={styleCountry}>
                        Beijing
                    </p>
                    <p className={styleCountry}>
                        Turkey
                    </p>
                    <p className={styleCountry}>
                        Pakistan
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Promotion };