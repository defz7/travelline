import Image from "next/image";
import Link from "next/link";

function Landingpage() {
    return(
        <div className="h-screen relative bg-cstmyellow">
            <div className="h-full grid grid-cols-2 content-center py-24 px-32">
                <div className="h-full gap-5 2xl:gap-8 content-center grid">
                    <h1 className="text-5xl xl:text-7xl 2xl:text-7xl text-black font-poppinsbold leading-[4.5rem] xl:leading-[6rem] 2xl:leading-[6rem] font-bold">
                        <span className="text-brownfont">
                            Life is a journey
                        </span>
                            , not a destination
                    </h1>
                    <p className="text-[13px] xl:text-[16px] 2xl:text-xl text-black">
                        Let's start your journey with us, your dream will come true
                    </p>
                    <div className="flex gap-5">
                        <Link href="/">
                            <a className="flex justify-center w-60 cursor-pointer text-white border-white bg-cstmdarkbrown hover:bg-cstmdarkerbrown hover:text-white py-3 rounded-2xl text-xl font-medium">
                                Explore Destinations
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="flex justify-center rounded-full cursor-pointer bg-white p-4">
                                <Image
                                src="/Images/Home/Polygon 2.svg"
                                width={20}
                                height={20}
                                />
                            </a>
                        </Link>
                        <p className="flex items-center self-center font-normal">
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
