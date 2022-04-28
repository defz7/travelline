import Image from "next/image";
import Link from "next/link";

function Landingpage() {
    return(
        <div className="h-screen relative bg-cstmyellow">
            <div className="h-full grid grid-cols-2 content-center py-24 px-32">
                <div className="h-full gap-5 2xl:gap-11 content-center grid">
                    <h1 className="text-4xl xl:text-5xl 2xl:text-7xl text-black font-poppinsbold leading-[3.5rem] xl:leading-[4rem] 2xl:leading-[6rem] font-bold">
                        <span className="text-brownfont">
                            Life is a journey
                        </span>
                            , not a destination
                    </h1>
                    <p className="text-[14px] xl:text-[16px] 2xl:text-2xl text-black">
                        Let's start your journey with us, your dream will come true
                    </p>
                    <div className="flex gap-5">
                        <Link href="/">
                            <a className="flex justify-center items-center self-center w-36 2xl:w-60 cursor-pointer text-white border-white bg-cstmdarkbrown hover:bg-cstmdarkerbrown hover:text-white py-2 2xl:py-3 rounded-2xl text-xs xl:text-xl font-medium">
                                Explore Destinations
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="flex justify-center items-center self-center">
                                <Image
                                src="/Images/Home/Group 4.svg"
                                width={100}
                                height={100}
                                />
                            </a>
                        </Link>
                        <p className="flex items-center self-center font-normal text-xs 2xl:text-base">
                            Watch how it works
                        </p>
                    </div>
                </div>
                <div className="mr-0 grid content-center m-auto">
                    <Image
                    src="/Images/Home/kisspng-travel-clip-art-portable-network-graphics-vector-g-viaggi-in-comitiva-faenza-ra-astorre-agenzia-viag-5be4f4439a98f7 1.svg"
                    width={910}
                    height={745}
                    />
                    <Link href="/">
                        <a className="flex w-64 bg-white bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 rounded-xl p-6 z-10">
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
