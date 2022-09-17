import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

function Testimony() {
    return(
        <div className="w-full h-full bg-white">
            <div className="grid py-24 px-16 xl:px-32 2xl:px-52">
                <div className="grid xl:grid-cols-2 gap-10 xl:container xl:mx-auto">
                    <div className="lg:max-w-lg 2xl:max-w-xl space-y-5">
                        <div className="flex items-center">
                            <div className="border border-[#2C2D32] w-[50px] h-0 mr-3"></div>
                            <p className="font-nunito uppercase">
                                Testimonial
                            </p>
                        </div>
                        <p className="text-3xl font-montserratBold">
                            What Customers Say?
                        </p>
                        <p className="font-nunito text-base py-3">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </p>
                        <button className="flex justify-between w-[220px] md:w-[240px] rounded-full border border-[#EE5060] cursor-pointer">
                            <div className="grid content-center justify-items-center pl-8 pt-2 text-[#EE5060]">
                                Write your thought
                            </div>
                            <div className="p-2 rounded-full border border-[#EE5060]">
                                <ArrowLongRightIcon className="w-6 text-[#EE5060]"/>
                            </div>
                        </button>
                    </div>
                    <div className="grid content-center justify-items-center">
                        <div className="flex items-center p-8 pb-3 rounded-2xl shadow-lg bg-gray-100 max-w-xl">
                            <div className="grid content-center">
                                <p className="font-nunitoBold max-w-xs">
                                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                                </p>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/Images/Home/Group 5436.svg"
                                        className="mt-3 -ml-2 w-[100=px] h-[100px]"
                                        alt="profile picture"
                                    />
                                    <div className="grid">
                                        <p className="font-nunitoSemi">
                                            Fay Nakila
                                        </p>
                                        <p className="font-nunito text-slate-500">
                                            Traveller
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
export { Testimony };