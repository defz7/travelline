import Link from "next/link";

function Tour() {
    return(
        <div className="relative bg-white">
            <div className="grid h-full xl:py-24 px-16 xl:px-32 2xl:px-52">
                <div className="h-full justify-items-center content-center">
                    <div className="lg:flex">
                        <div className="lg:w-3/4 lg:pr-10 space-y-10">
                            <h1 className="font-bold text-black text-2xl 2xl:text-3xl text-center lg:text-left">
                                <span className="font-bold text-brownfont">
                                    Watch
                                </span> {""}
                                    Our Latest Tour
                            </h1>
                            <p className="text-black text-base 2xl:text-xl text-center lg:text-left">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <Link href="/">
                                <a className="flex cursor-pointer max-w-[90px]">
                                    <p className="hidden lg:block underline-offset-2 text-base 2xl:text-base text-brownfont">
                                        Learn more
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <div className="w-full grid justify-items-center lg:m-auto">
                            <iframe
                                className="w-3/4 aspect-video"
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