import Link from "next/link";

function Tour() {
    return(
        <div className="relative bg-white">
            <div className="h-full xl:py-24 px-16 xl:px-32 2xl:px-52">
                <div className="h-full grid justify-items-center content-center xl:container xl:mx-auto">
                    <div className="grid lg:flex">
                        <div className="lg:w-3/4 lg:pr-10 space-y-5 2xl:space-y-10">
                            <h1 className="font-poppinsBold text-black text-2xl 2xl:text-3xl text-center lg:text-left">
                                <span className="text-brownfont">
                                    Watch
                                </span> {""}
                                    Our Latest Tour
                            </h1>
                            <p className="font-nunito text-black text-base 2xl:text-xl text-center lg:text-left">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <Link href="/">
                                <a className="flex cursor-pointer max-w-[90px]">
                                    <p className="font-nunito hidden lg:block underline-offset-2 underline text-base 2xl:text-base text-brownfont">
                                        Learn more
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="w-full grid justify-items-center lg:m-auto pt-5 lg:pt-0">
                            <iframe
                                className="w-full sm:w-8/12 lg:w-3/4 aspect-video"
                                src="https://youtube.com"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Tour };