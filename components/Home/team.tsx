import Image from "next/image";

function Team() {
    return(
        <div className="relative bg-white">
            <div className="grid h-full py-24 px-32">
                <div className="grid h-full justify-items-center content-center space-y-10">
                    <h1 className="font-bold text-black text-3xl text-center">
                        <span className="font-bold text-brownfont text-3xl">
                            Our
                        </span> {""}
                            Team
                    </h1>
                    <div className="w-3/4 justify-center ">
                        <p className="items-center font-normal text-black text-xl text-center mb-20">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-28">
                        <Image
                        src="/Images/Group 5411.png"
                        width={400}
                        height={460}
                        />
                        <div className="space-y-6">
                            <h1 className="font-semibold text-black text-2xl text-left">
                                    Our {""}
                                <span className="font-bold text-brownfont text-2xl">
                                    team is the secret 
                                </span> {""}
                                    to our success
                            </h1>
                            <div className="flex flex-col gap-5">
                                <div className="flex">  
                                    <Image
                                    src="/Images/Group 5435.png"
                                    width={125}
                                    height={125}
                                    />
                                    <p className="self-center text-lg">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                            <div className="flex flex-col">
                                <div className="flex">
                                    <Image
                                    src="/Images/Group 5434.png"
                                    width={125}
                                    height={125}
                                    />
                                    <p className="self-center text-lg">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
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
export { Team };