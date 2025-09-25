import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { Link } from "react-router-dom"
import paths from "../../Routes/paths"
import GoogleSocialLogin from "../../components/GoogleSocialLogin"
import FloatLeft from "../../components/ui/FloatLeft"
import validate from "../../utility/validator"
import { useState } from "react"
import AppForm from "../../components/ui/AppForm";


type Data = {
  email: string
  password: string
}
  const appName = import.meta.env.VITE_APP_NAME || ""

const Login = () => {
  const [data, setData] = useState<Data>({
    email: "",
    password: ""
  })

  const [isLoading, setIsLoading] = useState(false)

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleOnChange = (res: string, field: string): void => {
    setData((data) => ({ ...data, [field]: res }))
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>): Promise<boolean> => {
    e.preventDefault()
    setErrors((prev) => ({ ...prev, email: validate(data.email, { type: "email", required: true }) }))
    setErrors((prev) => ({ ...prev, password: validate(data.password, { type: 'password', min: 6 }) }))

     if (Object.keys(errors).length > 0) {
      setIsLoading(false);
      return false
    }

    

    return true
  }

  return (
    <Guest title="Login">
      <AppForm onSubmit={(e) => { handleLogin(e) }} >

        <FloatLeft />

        <h4 className="text-center font-medium text-xl">Login {appName}</h4>

        <AppInput error={errors.email} handleOnChange={handleOnChange} field="email" placeholder="Enter Email" type="email" label="Email"
        />

        <AppInput error={errors.password} handleOnChange={handleOnChange} field="password" placeholder="Enter Password" type="password" label="Password" />

        <AppButton text="Login" isLoading={isLoading} variant="success" className="px-8  w-full rounded-md " />

        <GoogleSocialLogin />

        <div className="flex justify-between items-center w-full">
          <Link to={paths.forgotPassword} className="text-sm text-gray-600 underline">Forgot password?</Link>
          <Link to={paths.register} className="text-sm text-gray-600 underline">Create Account</Link>
        </div>
      </AppForm>

    </Guest>
  )
}

export default Login
