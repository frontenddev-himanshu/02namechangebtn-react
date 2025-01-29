import Button from "./button"
import Btnsecoundery from "./Btnsecoundery"

const Content = () => {
    return (
        <>
            <div id="content-container" className="pt-50 w-250 pl-5">
                <div id="content" className="">
                    <span className="p-2 rounded-3xl border-1 border-gray-300 text-sm text-gray-200">
                        Anim aute id magna aliqua ad ad non deserunt sunt.
                        <Btnsecoundery />
                    </span>

                    <h1 className="font-bold text-6xl pr-100 mt-10  text-white">
                        Data to enrich your business
                    </h1>

                    <p className="text-xl pr-70 mt-10 text-gray-200">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                    </p>

                    <div id="btns" className="mt-10">
                        <Button />

                        <a href="/" className="ml-10 text-blue text-gray-200">
                            Learn More <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Content