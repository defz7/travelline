import Link from "next/link";
import BeijingImg from "../../public/images/Home/Beijing.png";
import TurkeyImg from "../../public/images/Home/Turkey.png";
import PakistanImg from "../../public/images/Home/Pakistan.png";

const desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
const styleImg = "w-3/4 pb-8"
const styleCountry = "grid md:hidden pb-5 md:pb-0 justify-center text-brownfont font-poppinsMedium text-xl"

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
                        {desc}
                    </p>
                </div>
                <div 
                    className="grid grid-cols-1 md:grid-cols-3" 
                    data-aos="fade-up" 
                    data-aos-duration="2000"
                >
                    <Link href="/">
                        <a className="flex justify-center cursor-pointer">
                            <img
                                src={BeijingImg.src}
                                className={styleImg}
                            />
                        </a>
                    </Link>
                    <p className={styleCountry}>
                        Beijing
                    </p>
                    <Link href="/">
                        <a className="flex justify-center cursor-pointer ">
                            <img
                                src={TurkeyImg.src}
                                className={styleImg}
                            />
                        </a>
                    </Link>
                    <p className={styleCountry}>
                        Turkey
                    </p>
                    <Link href="/">
                        <a className="flex justify-center cursor-pointer ">
                            <img
                                src={PakistanImg.src}
                                className={styleImg}
                            />
                        </a>
                    </Link>
                    <p className={styleCountry}>
                        Pakistan
                    </p>

                    {/* Text below is for md screen and above */}
                    <p className="hidden md:flex justify-center text-brownfont font-poppinsMedium text-xl">
                        Beijing
                    </p>
                    <p className="hidden md:flex justify-center text-brownfont font-poppinsMedium text-xl">
                        Turkey
                    </p>
                    <p className="hidden md:flex justify-center text-brownfont font-poppinsMedium text-xl">
                        Pakistan
                    </p>
                </div>
            </div>
        </div>
    );
}

export { Promotion };