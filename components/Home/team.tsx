
import OurTeamImg from "../../public/Images/Group 5411.png";
import TeamIcon from "../../public/Images/Group 5435.png";
import StructureIcon from "../../public/Images/Group 5434.png";

const description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

function Team() {
    return(
        <div className="relative bg-white">
            <div className="grid h-full py-24 px-7 sm:px-16 xl:px-32 2xl:px-52">
                <div className="grid h-full justify-items-center content-center xl:container xl:mx-auto space-y-5 2xl:space-y-10">
                    <h1 
                        className="font-poppinsBold text-black text-2xl 2xl:text-3xl text-center" 
                        data-aos="fade-up" 
                        data-aos-duration="1500"
                    >
                        <span className="text-brownfont">
                            Our
                        </span> {""}
                            Team
                    </h1>
                    <div 
                        className="w-full lg:w-5/6 xl:w-3/4" 
                        data-aos="fade-up" 
                        data-aos-duration="1500"
                    >
                        <p className="text-black text-center text-base 2xl:text-xl mb-10 xl:mb-20">
                            {description}
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-14 2xl:gap-20">
                        <img
                            data-aos="fade-left" 
                            data-aos-duration="1500"
                            src={OurTeamImg.src}
                            className="w-10/12 justify-self-center"
                            alt="Some pictures of our team"
                        />
                        <div 
                            className="space-y-6" 
                            data-aos="fade-right" 
                            data-aos-duration="1500"
                        >
                            <h1 className="font-poppinsBold text-black text-xl 2xl:text-2xl text-left">
                                    Our {""}
                                <span className="text-brownfont">
                                    team is the secret 
                                </span> {""}
                                    to our success
                            </h1>
                            <div className="flex flex-col gap-5">
                                <div className="flex items-start">  
                                    <img
                                        src={TeamIcon.src}
                                        className="w-13 2xl:w-24 2xl:h-24 h-20"
                                        alt="The team"
                                    />
                                    <p className="font-nunito self-center text-base 2xl:text-xl">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    </p>
                                </div>
                            <div className="flex flex-col">
                                <div className="flex items-start">
                                    <img
                                        src={StructureIcon.src}
                                        className="w-13 2xl:w-24 2xl:h-24 h-20"
                                        alt="Team structure"
                                    />
                                    <p className="font-nunito self-center text-base 2xl:text-xl">
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