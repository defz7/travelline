
import StarIcon from "../../public/Images/Home/Group 5436.svg";
import WorldIcon from "../../public/Images/Home/Group 5437.svg";
import ThumbUpIcon from "../../public/Images/Home/Group 5438.svg";

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

function ChooseUs() {
    return(
        <div className="relative bg-white">
            <div className="grid h-full xl:py-24 px-7 sm:px-16 xl:px-32 2xl:px-52">
                <div 
                    className="grid justify-items-center content-center space-y-10" 
                    data-aos="fade-up" 
                    data-aos-duration="1500"
                >
                    <h1 className="font-poppinsBold text-black text-2xl 2xl:text-3xl text-center">
                        <span className="text-brownfont">
                            Why
                        </span> {""}
                            Choose Us
                    </h1>
                    <div className="w-5/6 xl:w-3/4 justify-center">
                        <p className="font-nunito items-center text-black text-base 2xl:text-xl text-center mb-10 xl:mb-20">
                            {description}
                        </p>
                    </div> 
                    <div 
                        className="flex flex-wrap justify-center gap-[90px] 2xl:gap-[60px]" 
                        data-aos="fade-up" 
                        data-aos-duration="1500"
                    >
                        <div className="p-6 overflow-hidden rounded-lg shadow-lg bg-white max-w-sm">
                            <div className="-mt-16 w-full flex justify-center">
                                <img
                                    src={StarIcon.src}
                                    className="grid justify-self-center z-10 w-[100px] h-[100px] absolute"
                                    alt=""
                                />
                            </div>
                            <p className="font-poppinsSemiBold text-center text-xl pb-4 pt-24 px-3 text-brownfont">
                                Handpicked Hotels
                            </p>
                            <p className="font-nunito px-3 text-center">
                                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <div className="-mt-16 w-full flex justify-center">
                                <img
                                    src={WorldIcon.src}
                                    className="grid justify-self-center z-10 w-[100px] h-[100px] absolute"
                                    alt=""
                                />
                            </div>
                            <p className="font-poppinsSemiBold text-center text-xl pb-4 pt-24 px-3 text-brownfont">
                                World Class Service
                            </p>
                            <p className="font-nunito px-3 text-center">
                                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                        <div className="p-6 rounded-lg shadow-lg bg-white max-w-sm">
                            <div className="-mt-16 w-full flex justify-center">
                                <img
                                    src={ThumbUpIcon.src}
                                    className="grid justify-self-center z-10 w-[100px] h-[100px] absolute"
                                    alt=""
                                />
                            </div>
                            <p className="font-poppinsSemiBold text-center text-xl pb-4 pt-24 px-3 text-brownfont">
                                Best Price Guarantee
                            </p>
                            <p className="font-nunito px-3 text-center">
                                Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa
                            </p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
}
export { ChooseUs };