import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { useState } from "react"
import { Link } from "react-router-dom"
import paths from "../../Routes/paths"
import FloatLeft from "../../components/ui/FloatLeft"
import GoogleSocialLogin from "../../components/GoogleSocialLogin"
import validate from "../../utility/validator"
import AppForm from "../../components/ui/AppForm";


type Data = {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptedTerms: boolean
}

const Register = () => {
  const appName = import.meta.env.VITE_APP_NAME || ""
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Data>({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    acceptedTerms: false
  })

  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleOnChange = (res: string, field: string): void => {
    setData((data) => ({ ...data, [field]: res }))
  }

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>): Promise<boolean> => {
    e.preventDefault()
    setIsLoading(true)
    setErrors((prev) => ({ ...prev, name: validate(data.name, { type: "text", min: 4 }) }))

    setErrors((prev) => ({ ...prev, email: validate(data.email, { type: "email" }) }))

    setErrors((prev) => ({ ...prev, password: validate(data.password, { type: 'password', min: 6 }) }))

    setErrors((prev) => ({ ...prev, confirmPassword: validate(data.confirmPassword, { type: 'password', min: 6, }) }))

    if (!errors.confirmPassword) {
      data.password !== data.confirmPassword ? setErrors((prev) => ({ ...prev, confirmPassword: "Confirm password does not match" })) : ""
    }


    if (!data.acceptedTerms) {
      let msg = "Agree to our user agreement policy to continue" 
      setErrors((prev) => ({ ...prev, acceptedTerms: msg}))
      alert(msg)
    }

    if (Object.keys(errors).length > 0) {
      setIsLoading(false);
      return false
    }



    setIsLoading(false)
    return true

  }
  return (
    <Guest title="Register">
      <AppForm onSubmit={handleRegister}>
        <FloatLeft />
        <h4 className="text-center font-bold text-xl">Register {appName}</h4>

        <AppInput handleOnChange={handleOnChange} error={errors.name} field="name" placeholder="Enter Full Name" label="Full Name" />

        <AppInput handleOnChange={handleOnChange} error={errors.email} field="email" placeholder="Enter Email" label="Email" type="email" />

        <AppInput handleOnChange={handleOnChange} error={errors.password} field="password" placeholder="Enter Password" label="Password" type="password" />

        <AppInput handleOnChange={handleOnChange} error={errors.confirmPassword} field="confirmPassword" placeholder="Confirm Password" label="Confirm Password" type="password" />
        
        <div className="text-center text-[10px] sm:text-sm">
          I have read and agreed to {appName} <Link to={paths.terms} className="underline">User Agreement</Link> and
          <p className="flex items-center justify-center gap-2">
            <Link to={paths.policy} className="underline">privacy policy </Link>
            <input type="checkbox" required onChange={(e) => (setData((data) => ({ ...data, acceptedTerms: e.target.checked })))} className="accent-emerald-500 mt-1" />
          </p>
        </div>

        <AppButton text="Register" variant="success" isLoading={isLoading} className="px-8 w-full rounded-md border-2" />

        <GoogleSocialLogin text="Continue with Google" />

        <div className="flex justify-between items-center w-full">
          <Link to={paths.forgotPassword} className="text-sm text-gray-600 underline">Forgot password?</Link>
          <Link to={paths.login} className="text-sm text-gray-600 underline">Login account</Link>
        </div>
      </AppForm>
    </Guest>
  )
}

export default Register
