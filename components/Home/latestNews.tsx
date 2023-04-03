import News1 from "../../public/Images/Home/Group 40 (1).svg";
import News2 from "../../public/Images/Home/Rectangle 33 (1).svg";
import News3 from "../../public/Images/Home/Rectangle 34.svg";
import News4 from "../../public/Images/Home/Rectangle 37.svg";

function LatestNews() {
  return (
    <div className="w-full h-full bg-white">
      <div className="grid pt-14 xl:pt-24 pb-24 px-7 sm:px-16 xl:px-32 2xl:px-52">
        <div className="grid xl:container xl:mx-auto">
          <div
            className="grid justify-items-center space-y-5 font-nunito"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <h2 className="font-poppinsBold text-brownfont text-2xl 2xl:text-3xl text-center">
              Latest News and Resources
            </h2>
            <p className="text-base 2xl:text-xl text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div
              className="grid xl:flex items-start justify-between gap-x-10 space-y-20 lg:space-y-0 pt-10"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <div className="grid space-y-5 cursor-pointer lg:pb-9">
                <img
                  src={News1.src}
                  className="w-[500px] xl:w-[640px]"
                  loading="lazy"
                  alt=""
                />
                {/* subTitle */}
                <div className="flex justify-center bg-[#F0C53E] w-[93px] py-1 rounded-full font-nunitoBold text-sm uppercase">
                  News
                </div>
                <h3 className="font-poppinsSemiBold text-2xl text-brownfont">
                  Where does it come from?
                </h3>
                <p className="font-nunito text-lg">
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
                <a className="font-nunito text-lg text-[#EE5060] underline cursor-pointer">
                  Read more
                </a>
              </div>
              <div className="grid justify-items-center space-y-14 md:space-y-10">
                <div className="grid md:flex items-center gap-x-7 cursor-pointer">
                  <img
                    src={News2.src}
                    className="w-full h-full md:w-[280px] md:h-[180px]"
                    loading="lazy"
                    alt=""
                  />
                  {/* subTitle */}
                  <div className="absolute bg-[#F0C53E] px-3 py-1 mt-44 md:mt-32 ml-6 md:ml-[107px] rounded-full font-nunitoBold text-sm uppercase text-center">
                    Press Release
                  </div>
                  <div className="grid space-y-5">
                    <h3 className="font-poppinsSemiBold text-2xl text-brownfont pt-5 md:pt-0">
                      Where does it come from?
                    </h3>
                    <p className="font-nunito text-lg">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                </div>
                <div className="grid md:flex items-center gap-x-7 cursor-pointer">
                  <img
                    src={News3.src}
                    className="w-full h-full md:w-[280px] md:h-[180px]"
                    loading="lazy"
                    alt=""
                  />
                  {/* subTitle */}
                  <div className="absolute bg-[#F0C53E] px-5 py-1 mt-44 md:mt-32 ml-6 md:ml-40 rounded-full font-nunitoBold text-sm uppercase text-center">
                    News
                  </div>
                  <div className="grid space-y-5">
                    <h3 className="font-poppinsSemiBold text-2xl text-brownfont pt-5 md:pt-0">
                      Where does it come from?
                    </h3>
                    <p className="font-nunito text-lg">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                    </p>
                  </div>
                </div>
                <div className="grid md:flex items-center gap-x-7 cursor-pointer">
                  <img
                    src={News4.src}
                    className="w-full h-full md:w-[280px] md:h-[180px]"
                    loading="lazy"
                    alt=""
                  />
                  {/* subTitle */}
                  <div className="absolute bg-[#F0C53E] px-5 py-1 mt-44 md:mt-32 ml-6 md:ml-40 rounded-full font-nunitoBold text-sm uppercase text-center">
                    News
                  </div>
                  <div className="grid space-y-5">
                    <h3 className="font-poppinsSemiBold text-2xl text-brownfont pt-5 md:pt-0">
                      Where does it come from?
                    </h3>
                    <p className="font-nunito text-lg">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
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
