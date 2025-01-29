const Navbar = () => {
    return (
        <>
            <nav id="nav" className="flex items-center">
                {/* logo */}
                <div id="logo" className="mr-20">
                    <img src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&amp;shade=600" alt="" className="w-15" />
                </div>

                {/* links */}
                <div id="links" className="">
                    <ul className="flex">
                        <a href="/" className="mr-22 font-semibold text-sm text-white hover:text-gray-100 duration-100">
                            <li>
                                Product
                            </li>
                        </a>

                        <a href="/" className="mr-22 font-semibold text-sm text-white hover:text-gray-100 duration-100">
                            <li>
                                Features
                            </li>
                        </a>

                        <a href="/" className="mr-22 font-semibold text-sm text-white hover:text-gray-100 duration-100">
                            <li>
                                Marketplace
                            </li>
                        </a>

                        <a href="/" className="mr-20 font-semibold text-sm text-white hover:text-gray-100 duration-100">
                            <li>
                                Company
                            </li>
                        </a>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
