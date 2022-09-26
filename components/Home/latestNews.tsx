function LatestNews() {
    return(
        <div className="w-full h-full bg-white">
            <div className="grid py-24 px-16 xl:px-32 2xl:px-52">
                <div className="grid xl:container xl:mx-auto">
                    <div className="grid justify-items-center space-y-5 font-nunito" data-aos="fade-up" data-aos-duration="1500">
                        <h2 className="font-poppinsBold text-brownfont text-2xl 2xl:text-3xl text-center">
                            Latest News and Resources
                        </h2>
                        <p className="text-base 2xl:text-xl text-center">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <div className="grid lg:flex items-start justify-between gap-x-10 space-y-20 lg:space-y-0 pt-10" data-aos="fade-up" data-aos-duration="1500">
                            <div className="grid space-y-5 cursor-pointer">
                                <img
                                    src="/Images/Home/Group 40 (1).svg"
                                    className="w-[640px]"
                                />
                                <div className="flex justify-center bg-[#F0C53E] w-[100px] py-1 rounded-full font-nunitoBold text-base uppercase">
                                    News
                                </div>
                                <h3 className="font-poppinsSemiBold text-2xl text-brownfont">
                                    Where does it come from?
                                </h3>
                                <p className="font-nunito text-lg">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                </p>
                                <a className="font-nunito text-lg text-[#EE5060] underline cursor-pointer">
                                    Read more
                                </a>
                            </div>
                            <div className="grid justify-items-center space-y-14 md:space-y-10">
                                <div className="grid md:flex items-center gap-x-7 cursor-pointer">
                                    <img
                                        src="/Images/Home/Rectangle 33 (1).svg"
                                        className="w-full h-full md:w-[280px] md:h-[180px]"
                                    />
                                    <div className="grid space-y-5">
                                        <h3 className="font-poppinsSemiBold text-2xl text-brownfont pt-5 md:pt-0">
                                            Where does it come from?
                                        </h3>
                                        <p className="font-nunito text-lg">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid md:flex items-center gap-x-7 cursor-pointer">
                                    <img
                                        src="/Images/Home/Rectangle 34.svg"
                                        className="w-full h-full md:w-[280px] md:h-[180px]"
                                    />
                                    <div className="grid space-y-5">
                                        <h3 className="font-poppinsSemiBold text-2xl text-brownfont pt-5 md:pt-0">
                                            Where does it come from?
                                        </h3>
                                        <p className="font-nunito text-lg">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid md:flex items-center gap-x-7 cursor-pointer">
                                    <img
                                        src="/Images/Home/Rectangle 37.svg"
                                        className="w-full h-full md:w-[280px] md:h-[180px]"
                                    />
                                    <div className="grid space-y-5">
                                        <h3 className="font-poppinsSemiBold text-2xl text-brownfont pt-5 md:pt-0">
                                            Where does it come from?
                                        </h3>
                                        <p className="font-nunito text-lg">
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export { LatestNews };