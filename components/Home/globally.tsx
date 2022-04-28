import Image from "next/image";
import Link from "next/link";

function Globally() {
    return(
        <div className="relative bg-white">
            <div className="grid h-full py-24 px-32">
                <div className="grid h-full justify-items-center content-center space-y-10">
                    <h1 className="font-bold text-black text-3xl text-center">
                        <span className="font-bold text-brownfont text-3xl">
                            Globally
                        </span> {""}
                            Accepted
                    </h1>
                    <div className="w-3/4 justify-center">
                        <p className="items-center font-normal text-black text-xl text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="flex gap-3 justify-center">
                        <div className="grid grid-cols-2 gap-36">
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
        </div>
    );
}
export { Globally };