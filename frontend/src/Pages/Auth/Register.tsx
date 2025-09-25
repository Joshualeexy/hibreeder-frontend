import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { useState } from "react"
import { Link } from "react-router-dom"
import paths from "../../Routes/paths"
import FloatLeft from "../../components/ui/FloatLeft"
import GoogleSocialLogin from "../../components/GoogleSocialLogin"
type Data = {
  email: string
  password: string
}
const Register = () => {
  const [data, setData] = useState<Data>({
    email: "",
    password: ""
  })
  const handleOnChange = (res: string, field: string): void => {
    setData((data) => ({ ...data, [field]: res }))
  }
  return (
    <Guest>
      <form className="mx-auto sm:w-4/12 w-11/12  p-4 pt-0 space-y-3 ">
        <FloatLeft />

        <h4 className="text-center font-bold text-xl">Register HiBreeder</h4>

        <AppInput handleOnChange={handleOnChange}  field="name" placeholder="Enter Full Name" label="Full Name" />

        <AppInput handleOnChange={handleOnChange} field="email" placeholder="Enter Email" label="Email" type="email" />

        <AppInput handleOnChange={handleOnChange} field="password" placeholder="Enter Password" label="Password" type="password" />

        <AppInput handleOnChange={handleOnChange} field="confirm-password" placeholder="Confirm Password" label="Confirm Password" type="password" />

        <div className="text-center text-[10px] sm:text-sm">
          I have read and agreed to HiBreeder <Link to={paths.terms} className="underline">User Agreement</Link> and
          <p className="flex items-center justify-center gap-2">
            <Link to={paths.policy} className="underline">privacy policy </Link>
            <input type="checkbox" className="accent-emerald-500 mt-1" /> </p>
        </div>

        <AppButton text="Register" variant="success" className="px-8 w-full rounded-md border-2" />
        <GoogleSocialLogin text="Continue with Google" />

        <div className="flex justify-between items-center w-full">
          <Link to={paths.forgotPassword} className="text-sm text-gray-600 underline">Forgot password?</Link>
          <Link to={paths.login} className="text-sm text-gray-600 underline">Login account</Link>
        </div>
      </form>

    </Guest>
  )
}

export default Register
