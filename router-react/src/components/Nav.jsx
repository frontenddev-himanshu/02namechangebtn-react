import { Link } from "react-router-dom"

const Nav = () => {
    return (
        <>
            <div className="w-full h nav-wrap flex justify-center pt-5">
                <nav className="w-400 h-18 bg-amber-200 rounded-full flex justify-between px-5 items-center">
                    <div className="font-bold text-2xl">
                        <h5>Router Dom</h5>
                    </div>

                    <div className="links flex gap-6.5 font-bold ">
                        <Link to={"/"} className="hover:text-blue-500 duration-200">Home</Link>
                        <Link to={"/About"} className="hover:text-blue-500 duration-200">About</Link>
                        <Link to={"/Blog"} className="hover:text-blue-500 duration-200">Blog</Link>
                        <Link to={"/Contact"} className="hover:text-blue-500 duration-200">Contact</Link>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Nav