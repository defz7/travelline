import Image from "next/image";
import Link from "next/link";

function Tour() {
    return(
        <div className="relative bg-white">
            <div className="grid h-full py-24 px-32">
                <div className="h-full justify-items-center content-center">
                    <div className="flex">
                        <div className="w-full pr-28 space-y-10">
                            <h1 className="font-bold text-black text-3xl text-left">
                                <span className="font-bold text-brownfont text-3xl">
                                    Watch
                                </span> {""}
                                    our latest tour
                            </h1>
                            <p className="font-normal text-black text-xl text-left">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <Link href="/">
                                <a className="flex cursor-pointer">
                                    <p className="text-brownfont">
                                        Learn more
                                    </p>
                                </a>
                            </Link>
                        </div>
                        <iframe
                            className="w-3/5 aspect-video"
                            src="https://youtube.com"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
export { Tour };