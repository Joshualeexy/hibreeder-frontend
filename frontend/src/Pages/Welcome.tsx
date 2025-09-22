import WelcomeChoice from "../components/WelcomeChoice";
import Guest from "../Layouts/Guest"
import { useState } from "react"
import paths from "../Routes/paths";

const Welcome = () => {
    return (
        <Guest>
            <section>
                <div className="flex flex-col justify-center items-center -mt-8">
                    <h1 className="text-center">
                        Welcome to Hibreeder <br /> Your ultimate platform for pet breeding management.
                    </h1>
                </div>

                <div className="flex items-center justify-center p-4">
                    <div className="w-full max-w-4xl relative">
                        {/* Root vertical line */}
                        <div className="flex justify-center">
                            <div className="border-green-300 border h-10 bg-gray-400"></div>
                        </div>

                        {/* Junction node */}
                        <div className="flex justify-center mb-8 relative">
                            <div className="w-4 h-4 bg-green-300 m-10 -mt-1  rounded-full"></div>

                            {/* Left diagonal */}
                            <div className="absolute top-2 left-1/2 w-20 border-green-300 border h-px bg-gray-400 transform -translate-x-20 -translate-y-2 -rotate-45 origin-right" />
                            {/* Right diagonal */}
                            <div className="absolute top-2 border-green-300 border left-1/2 w-20 h-px bg-gray-400 transform -translate-y-2 rotate-45 origin-left" />
                        </div>

                        {/* Two Child Nodes */}
                        <div className="grid grid-cols-2 gap-32 z">
                            {/* Breeder */}
                            <WelcomeChoice to={paths.login} choice="Breeder" choicedesc=" Manage your animals, create listings, and connect with potential buyers" />

                            {/* User */}
                            <WelcomeChoice to={paths.login} choice="User" choicedesc=" Browse animals, save favorites, and find your perfect companion" />

                        </div>
                    </div>
                </div>
            </section>
        </Guest>
    );
};

export default Welcome;
