import Image from "next/image";
import Link from "next/link";

function Promotion() {
    return(
        <div className="relative bg-white">
            <div className="grid h-full pt-24 xl:py-24 px-16 xl:px-32 2xl:px-52">
                <div className="grid h-full justify-items-center content-center space-y-10">
                    <h1 className="font-montserratBold text-black text-2xl 2xl:text-3xl text-center mb-">
                        <span className="text-brownfont">
                            Check Our Best
                        </span> {""}
                            Promotional Tour
                    </h1>
                    <div className="w-5/6 xl:w-3/4 justify-center">
                        <p className="font-nunito items-center text-black text-base 2xl:text-xl text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="grid grid-cols-3">
                        <Link href="/">
                            <a className="flex justify-center cursor-pointer ">
                                <img
                                src="/Images/Home/Mask Group (4).svg"
                                className="w-[450px] h-[430px]"
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="flex justify-center cursor-pointer ">
                                <img
                                src="/Images/Home/Mask Group (3).svg"
                                className="w-[450px] h-[430px]"
                                />
                            </a>
                        </Link>
                        <Link href="/">
                            <a className="flex justify-center cursor-pointer ">
                                <img
                                src="/Images/Home/Mask Group (4).svg"
                                className="w-[450px] h-[430px]"
                                />
                            </a>
                        </Link>
                        <p className="flex justify-center text-brownfont font-semibold text-xl">
                            Beijing
                        </p>
                        <p className="flex justify-center text-brownfont font-semibold text-xl">
                            Turkey
                        </p>
                        <p className="flex justify-center text-brownfont font-semibold text-xl">
                            Pakistan
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Promotion };