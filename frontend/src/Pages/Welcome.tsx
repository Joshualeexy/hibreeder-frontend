import WelcomeChoice from "../components/WelcomeChoice";
import Guest from "../Layouts/Guest"
import paths from "../Routes/paths";
import { FcBusinessman } from "react-icons/fc";
import { FcHome } from "react-icons/fc";


const Welcome = () => {
    return (
        <Guest>
            <section>
                <div className="flex flex-col justify-center items-center -mt-7">
                    <h1 className="text-center  p-4 pb-2">
                        <strong className="text-xl">Welcome to Hibreeder</strong> <br /> Your ultimate platform for pet management.
                    </h1>
                </div>

                <div className="flex items-center justify-center p-4 pt-0">
                    <div className="w-full max-w-4xl relative">
                        {/* Junction node */}
                        <div className="flex justify-center my-8 relative ">
                            <div className="w-4 h-4 bg-emerald-300 m-10 -mt-1  rounded-full"></div>

                            {/* Left diagonal */}
                            <div className="absolute top-2 left-1/2 w-20 border-emerald-300 border h-px bg-gray-400 transform -translate-x-20 -translate-y-2 -rotate-45 origin-right" />
                            {/* Right diagonal */}
                            <div className="absolute top-2 border-emerald-300 border left-1/2 w-20 h-px bg-gray-400 transform -translate-y-2 rotate-45 origin-left" />
                        </div>

                        <div className="flex sm:gap-20 gap-4 ">
                            <WelcomeChoice to={paths.login} choice="Breeder" icon={<FcBusinessman />
                            } className="shadow-inner shadow-black" choicedesc="connect with potential pet owners in your vicinity" />

                            <WelcomeChoice className="bg-emerald-500 text-white shadow-inner shadow-emerald-800" icon={<FcHome />} to={paths.login} choice="User" choicedesc="Friendly Pet Ecosystem, connect with pet owners" />

                        </div>
                    </div>
                </div>
            </section>
        </Guest>
    );
};

export default Welcome;
