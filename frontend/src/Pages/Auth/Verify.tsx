import AppButton from "../../components/ui/AppButton"
import Guest from "../../Layouts/Guest"
import paths from "../../Routes/paths";
import FloatLeft from "../../components/ui/FloatLeft";
import { useState } from "react";
import AppForm from "../../components/ui/AppForm";
import BackButton from "../../components/ui/BackButton";

const Verify = () => {
    const [isLoading, setIsLoading] = useState(false)

    const handleVerify = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        setIsLoading(true)
        e.preventDefault()
    }
    return (
        <Guest title="Verify">
            <AppForm onSubmit={handleVerify} >

                <FloatLeft />

                <div className="">
                    <h4 className="text-center font-bold text-xl">Verify Email</h4>
                </div>

                <div className="text-center w-full mb-4 ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, reiciendis quidem! </p>        </div>
                <div className="text-center w-full mb-4 ">
                    <AppButton text="Verify Email" variant="success" isLoading={isLoading} className="px-8 w-full rounded-md " />
                </div>

                <div className="flex justify-end items-center w-full">
                    <BackButton to={paths.login} text="back to login" />
                </div>
            </AppForm>

        </Guest>
    )
}

export default Verify
