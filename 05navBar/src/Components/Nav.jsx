import Btn from "./Btn";

const Nav = () => {
    return (
        <>
            <nav
                id="navbar"
                className="w-full h-20 bg-gray-800 flex justify-between items-center"
            >
                {/* nav logo */}
                <div id="navLogo">
                    <h1 className="text-white font-bold text-2xl">Navigation Bar</h1>
                </div>

                {/* nav links */}
                <div id="navLinks" className="">
                    <ul className="flex gap-15 text-white font-semibold">
                        <li>
                            <a className="hover:text-gray-300 duration-300" href="/">
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="hover:text-gray-300 duration-300" href="/">
                                About
                            </a>
                        </li>

                        <li>
                            <a className="hover:text-gray-300 duration-300" href="/">
                                Blog
                            </a>
                        </li>

                        <li>
                            <a className="hover:text-gray-300 duration-300" href="/">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* nav button */}
                <div id="navBtn">
                    <Btn />
                </div>
            </nav>
        </>
    );
};

export default Nav;
