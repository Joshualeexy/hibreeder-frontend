import { useEffect } from "react";
import WelcomeChoice from "../components/WelcomeChoice";
import Guest from "../Layouts/Guest"
import paths from "../Routes/paths";
import { FcBusinessman } from "react-icons/fc";
import { FcHome } from "react-icons/fc";

  const appName = import.meta.env.VITE_APP_NAME || ""

const Welcome = () => {

    useEffect(()=>{
        document.title = `Home Page | ${appName}`
    })
    return (
        <Guest>
            <section>
                <div className="flex flex-col justify-center items-center -mt-7">
                    <h1 className="text-center  p-4 pb-0">
                        <strong className="text-xl">Welcome to {appName}</strong> <br /> Your ultimate platform for pet management.
                    </h1>
                </div>

                <div className="text-center mt-5"><p className="text-2xl font-medium">Select Role </p></div>
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
                            <WelcomeChoice to={paths.login} choice="Breeder"  icon={<FcBusinessman />
                            } className="shadow-inner shadow-gray-300" choicedesc="connect with potential pet owners in your vicinity" />

                            <WelcomeChoice buttonStyle="text-gray-100 hover:bg-emerald-400" className="bg-emerald-500 text-gray-100 shadow-inner shadow-gray-500" icon={<FcHome />} to={paths.login} choice="User" choicedesc="Friendly Pet Ecosystem, connect with pet owners" />

                        </div>
                    </div>
                </div>
            </section>
        </Guest>
    );
};

export default Welcome;
