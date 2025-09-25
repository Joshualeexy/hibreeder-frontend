import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import paths from "../../Routes/paths";
import FloatLeft from "../../components/ui/FloatLeft";
import { useState } from "react";
import validate from "../../utility/validator";
import AppForm from "../../components/ui/AppForm";
import BackButton from "../../components/ui/BackButton";


const ForgotPassword = () => {
  const [email, setEmail] = useState("")
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleOnChange = (value: string) => {
    setEmail(value)
  }

  const handleResetPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setErrors((prev) => ({ ...prev, email: validate(email, { type: "email", required: true }) }))
  }

  return (
    <Guest title="Forgot Password">
      <AppForm onSubmit={handleResetPassword} >
      
        <FloatLeft />

        <div className="">
          <h4 className="text-center font-bold text-xl">Forgotten Password</h4>
        </div>

        <div className="">
          <AppInput value={email} handleOnChange={handleOnChange} error={errors.email} field="email" placeholder="Enter Email" label="Email" type="email" />
        </div>


        <div className="text-center w-full mb-4 ">
          <AppButton text="Reset password" variant="success" className="px-8 w-full rounded-md " />
        </div>

        <div className="flex justify-end items-center w-full">
          <BackButton text="back to login" to={paths.login}/>
        </div>
      </AppForm>

    </Guest>
  )
}

export default ForgotPassword
