import Link from "next/link";

function Navbar() {
    const styleTextNav="font-poppinsRegular text-sm sm:text-base md:text-lg cursor-pointer text-black hover:text-green px-3 py-2"
	
	return (
		<div>
			<nav className="w-full fixed bg-cstmyellow px-7 sm:px-16 xl:px-32 2xl:px-52 py-1 z-30">
				<div className="w-full xl:container xl:mx-auto">
					<div className="w-full flex items-center h-16 xl:h-20">
						<div className="w-full flex items-center justify-between">
							<div className="flex justify-center items-center">
								<Link href="/">
									<img
										loading="lazy"
										src="/Images/Home/Group 5421 (1).svg"
										className="w-[80px] md:w-[120px] lg:w-[130px] xl:w-[150px] cursor-pointer"
									/>
								</Link>
							</div>
							<div className="hidden lg:block">
								<div className="flex space-x-2 lg:space-x-6 2xl:space-x-11">
									<Link href="#!">
                                        <a className={styleTextNav}>
                                        Home
                                        </a>
									</Link>
									<Link href="#!">
                                        <a className={styleTextNav}>
                                        Events
                                        </a>
									</Link>
									<Link href="#!">
                                        <a className={styleTextNav}>
                                        Blog
                                        </a>
									</Link>
                                    <Link href="#!">
                                        <a className={styleTextNav}>
                                        About
                                        </a>
									</Link>
									<Link href="#!">
                                        <a className={styleTextNav}>
                                        Contact
                                        </a>
									</Link>
								</div>
							</div>
							<div className="flex justify-center items-center space-x-5 hidden lg:flex cursor-pointer">
								<Link href="#!">
                                    <div className="flex justify-center rounded-full bg-cstmdarkbrown hover:bg-cstmdarkerbrown hover:scale-110 duration-300 px-8 py-3 gap-x-3 font-poppinsRegular text-white">
                                        <img
                                            src="/Images/Home/Vector (1).svg"
                                            className="hidden lg:block w-[20px] cursor-pointer"
                                        />
                                        +1 (000) 000 000
                                    </div>
								</Link>
							</div>
						</div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export { Navbar };