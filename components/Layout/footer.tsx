import Link from "next/link";

function Footer() {
    return (
        <div className="relative z-10 bg-[#A7283E] px-16 py-20 xl:px-32 xl:py-32 2xl:pt-24 2xl:pb-24">
            <div className="grid justify-items-center content-center">
                <div className="flex justify-center items-center gap-10 pb-10">
                    <img
                    src="/Images/Home/Group 5421.svg"
                    className="w-[208px] h-[83px]"
                    />
                    <div className="font-montserratBold max-w-[156px] text-xl text-white">
                        <p>Domestic International Tours</p>
                    </div>
                </div>
                <div className="font-nunitoSemi grid justify-items-center">
                    <p className="text-[#F0C53E]">Subscribe to get our newsletter</p>
                    <div className="flex justify-center items-center gap-5 pt-3">
                        <form>
                            <label className="block">
                                <input className="px-4 py-1 rounded rounded-3xl border-2 border-[#F0C53E] placeholder-white text-white hover:border-white bg-[#A7283E]"/>
                            </label>
                        </form>
                        <button className="px-4 py-2 rounded rounded-3xl bg-[#F0C53E] hover:bg-[#E0B83B]">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-6 pt-24">
                    <p className="font-nunito text-[#F0C53E]">
                        <a href="#!">Careers</a>
                    </p>
                    <div className="border h-full border-[#762432]"></div>
                    <p className="font-nunito text-[#F0C53E]">
                        <a href="#!">Privacy Policy</a>
                    </p>
                    <div className="border h-full border-[#762432]"></div>
                    <p className="font-nunito text-[#F0C53E]">
                        <a href="#!">Terms & Conditions</a>
                    </p>
                </div>
            </div>
        </div>
    );
};
export { Footer };