function Testimony() {
    return(
        <div className="relative bg-white">
            <div className="grid w-full py-24 px-16 xl:px-32 2xl:px-52">
                <div className="grid xl:grid-cols-2 gap-10">
                    <div className="lg:max-w-lg 2xl:max-w-xl space-y-3">
                        <div className="flex items-center">
                            <div className="border border-[#2C2D32] w-[50px] h-0 mr-3"></div>
                            <p className="uppercase">Testimonial</p>
                        </div>
                        <p className="text-3xl font-bold">What Customers Say?</p>
                        <p className="text-base pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div className="grid content-center justify-items-center">
                        <div className="flex items-center p-8 pb-3 rounded-2xl shadow-lg bg-gray-100 max-w-xl">
                            <div className="grid content-center">
                                <p className="max-w-xs">"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry."</p>
                                <div className="flex items-center justify-center">
                                    <img
                                        src="/Images/Home/Group 5436.svg"
                                        className="mt-3 -ml-2 w-[100=px] h-[100px]"
                                        alt="profile picture"
                                    />
                                    <div className="grid">
                                        <p>Fay Nakila</p>
                                        <p className="text-slate-500">Traveller</p>
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