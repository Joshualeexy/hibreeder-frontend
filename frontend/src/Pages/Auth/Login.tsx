import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { Link } from "react-router-dom"
import paths from "../../Routes/paths"
import GoogleSocialLogin from "../../components/GoogleSocialLogin"
import FloatLeft from "../../components/ui/FloatLeft"
import { validate } from "../../utility/validator"
import { useState } from "react"

type Data = {
  email: string
  password: string
}

const Login = () => {
  const [data, setData] = useState<Data>({
    email: "",
    password: ""
  })

  const [error, setError] = useState<{ [key: string]: string }>({})

  const handleOnChange = (res: string, field: string): void => {
    setData((data) => ({ ...data, [field]: res }))
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    // alert(data.email)
  }

  return (
    <Guest>
      <form onSubmit={(e) => { handleLogin(e) }} className=" mx-auto sm:w-4/12 w-11/12  p-4 space-y-3 mb-20 pt-0">

        <FloatLeft />

        <h4 className="text-center font-medium text-xl">Login HiBreeder</h4>

        <AppInput handleOnChange={handleOnChange} field="email" placeholder="Enter Email" type="email" label="Email"
        />

        <AppInput handleOnChange={handleOnChange} field="password" placeholder="Enter Password" type="password" label="Password" />

        <AppButton text="Login" variant="success" className="px-8  w-full rounded-md " />

        <GoogleSocialLogin />

        <div className="flex justify-between items-center w-full">
          <Link to={paths.forgotPassword} className="text-sm text-gray-600 underline">Forgot password?</Link>
          <Link to={paths.register} className="text-sm text-gray-600 underline">Create Account</Link>
        </div>
      </form>

    </Guest>
  )
}

export default Login
