import Image from "next/image";
import Link from "next/link";

function Landingpage() {
    return(
        <div className="w-full h-full px-7 sm:px-16 xl:px-32 2xl:px-52 py-24 sm:py-32 xl:py-52 bg-cstmyellow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 content-center xl:container xl:mx-auto">
                <div className="h-full gap-3 2xl:gap-6 content-center grid">
                    <h1 className="font-poppinsBold text-4xl xl:text-5xl 2xl:text-7xl text-black leading-[2.9rem] xl:leading-[4rem] 2xl:leading-[6rem]">
                        <span className="text-brownfont">
                            Life is a journey
                        </span>
                            , not a destination
                    </h1>
                    <p className="font-nunitoSemi text-[14px] xl:text-[16px] 2xl:text-2xl text-black">
                        Let's start your journey with us, your dream will come true
                    </p>
                    <div className="flex gap-5 2xl:pt-2">
                        <Link href="/">
                            <a className="font-nunitoSemi flex justify-center items-center self-center w-36 2xl:w-60 cursor-pointer text-white border-white bg-cstmdarkbrown hover:bg-cstmdarkerbrown hover:scale-110 duration-300 py-2 2xl:py-3 rounded-[80px] text-xs xl:text-xl font-medium">
                                Explore Destinations
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="hidden flex justify-center items-center self-center">
                                <img
                                src="/Images/Home/Group 4.svg"
                                className="w-1/2"
                                />
                            </a>
                        </Link>
                        <p className="hidden flex items-center self-center font-normal text-xs 2xl:text-base">
                            Watch how it works
                        </p>
                    </div>
                </div>
                <div className="md:mr-0 grid content-center m-auto w-full sm:w-3/4 md:w-full">
                    <Image
                    src="/Images/Home/kisspng-travel-clip-art-portable-network-graphics-vector-g-viaggi-in-comitiva-faenza-ra-astorre-agenzia-viag-5be4f4439a98f7 1.svg"
                    width={910}
                    height={745}
                    />
                    <Link href="/">
                        <a className=" hidden flex w-64 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-xl p-6 z-10">
                            <Image
                            src="/Images/Home/Group 6.svg"
                            width={40}
                            height={40}
                            />
                            <div className="text-left ml-5">
                                <p className="text-lightfont font-bold">
                                    250K
                                </p>
                                <p>
                                    Plan Your Trip
                                </p>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export { Landingpage };
