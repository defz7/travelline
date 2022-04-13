import Image from "next/image";
import Link from "next/link";

function Landingpage() {
    return(
        <div className="h-screen relative bg-cstmyellow">
            <div className="h-full grid grid-cols-2 content-center py-24 px-32">
                <div className="h-full gap-5 2xl:gap-8 content-center grid">
                    <h1 className="text-5xl xl:text-7xl 2xl:text-7xl text-white font-poppinsbold leading-[4.5rem] xl:leading-[6rem] 2xl:leading-[6rem] font-bold">
                        Life is a journey, not a destination
                    </h1>
                    <p className="text-[13px] xl:text-[16px] 2xl:text-xl text-white">
                        Let's start your journey with us, your dream will come true
                    </p>
                    <Link href="/">
                        <a className="flex justify-center w-64 cursor-pointer text-white border-white bg-cstmdarkbrown hover:bg-white hover:text-black py-2 rounded-2xl text-xl font-medium">
                            Explore Destinations
                        </a>
					</Link>
                </div>
                <div className="mr-0 grid content-center m-auto">
                    <Image
                    src="/Images/Home/kisspng-travel-clip-art-portable-network-graphics-vector-g-viaggi-in-comitiva-faenza-ra-astorre-agenzia-viag-5be4f4439a98f7 1.svg"
                    alt="Logo"
                    width={910}
                    height={745}
                    />
                </div>
            </div>
        </div>
    );
}

export { Landingpage };
