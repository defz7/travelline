import Image from "next/image";
import Link from "next/link";

function Globally() {
    return(
        <div className="h-full bg-white py-24 px-16 xl:px-32 2xl:px-52">
            <div className="h-full grid justify-items-center content-center space-y-10 xl:container xl:mx-auto">
                <h1 className="font-poppinsBold text-black text-2xl 2xl:text-3xl text-center">
                    <span className="font-bold text-brownfont">
                        Globally
                    </span> {""}
                        Accepted
                </h1>
                <div className="w-5/6 xl:w-3/4 justify-center">
                    <p className="font-poppinsRegular items-center text-black text-base 2xl:text-xl text-center">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 gap-20 xl:gap-36">
                        <Link href="/">
                            <a className="flex justify-center cursor-pointer">
                                <Image 
                                    src="/Images/Home/Group 5432 (1).svg"
                                    width={450}
                                    height={430}
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="flex justify-center cursor-pointer ">
                                <Image
                                    src="/Images/Home/Group 5433.svg"
                                    width={450}
                                    height={430}
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