import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { Link } from "react-router-dom"
import paths from "../../Routes/paths"
import FloatLeft from "../../components/ui/FloatLeft"
import GoogleSocialLogin from "../../components/GoogleSocialLogin"
import validate from "../../utility/validator"
import AppForm from "../../components/ui/AppForm"
import { toast } from 'react-toastify'
import request from "../../utility/request"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import utility from "../../utility/utility"

type RegisterFormData = {
  name: string
  email: string
  password: string
  password_confirmation: string
  acceptedTerms: boolean
}

const Register = () => {
  const appName = import.meta.env.VITE_APP_NAME || ""
  const { getOrigin } = utility()
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    defaultValues: {
      email: "",
      password: "",
      name: "",
      password_confirmation: "",
      acceptedTerms: false
    }
  })

  const Navigate = useNavigate()
  const onSubmit = async (data: RegisterFormData) => {
    // Track validation errors locally
    let hasErrors = false

    // Validate all fields using your custom validator
    const nameError = validate(data.name, { type: "text", min: 4, required: true })
    if (nameError) {
      setError('name', { type: 'manual', message: nameError })
      hasErrors = true
    }

    const emailError = validate(data.email, { type: "email", required: true })
    if (emailError) {
      setError('email', { type: 'manual', message: emailError })
      hasErrors = true
    }

    const passwordError = validate(data.password, { type: 'password', min: 6, required: true })
    if (passwordError) {
      setError('password', { type: 'manual', message: passwordError })
      hasErrors = true
    }

    const passwordConfirmError = validate(data.password_confirmation, { type: 'password', min: 6, required: true })
    if (passwordConfirmError) {
      setError('password_confirmation', { type: 'manual', message: passwordConfirmError })
      hasErrors = true
    }

    // Check password match
    if (!passwordError && !passwordConfirmError && data.password !== data.password_confirmation) {
      setError('password_confirmation', { type: 'manual', message: "Confirm password does not match" })
      hasErrors = true
    }

    // Check terms acceptance
    if (!data.acceptedTerms) {
      setError('acceptedTerms', {
        type: 'manual',
        message: "Agree to our user agreement policy to continue"
      })
      hasErrors = true
    }

    // Stop if validation failed
    if (hasErrors) {
      return
    }

    try {
      await axios.get(`${getOrigin(false)}/sanctum/csrf-cookie`)

      const res = await request('/register', data)

      if (res.status === 'failed') {
        // Handle server errors
        if (res.errors) {
          Object.keys(res.errors).forEach(field => {
            const message = Array.isArray(res.errors[field])
              ? res.errors[field][0]
              : res.errors[field]

            setError(field as keyof RegisterFormData, {
              type: 'server',
              message: message
            })
          })
        } else {
          console.log(res)
          toast.error("Registration failed. Please try again.")

        }
      } else {
        toast.success("Registration successful!")
        reset()
        Navigate('/feeds')
      }
    } catch (error) {
      console.error("Registration error:", error)
      toast.error("An unexpected error occurred. Please try again.")
    }
  }

  return (
    <Guest title="Register">
      <AppForm onSubmit={handleSubmit(onSubmit)}>
        <FloatLeft />
        <h4 className="text-center font-bold text-xl">Register {appName}</h4>

        <AppInput
          register={register('name')}
          error={errors.name?.message}
          field="name"
          placeholder="Enter Full Name"
          label="Full Name"
        />

        <AppInput
          register={register('email')}
          error={errors.email?.message}
          field="email"
          placeholder="Enter Email"
          label="Email"
          type="email"
        />

        <AppInput
          register={register('password')}
          error={errors.password?.message}
          field="password"
          placeholder="Enter Password"
          label="Password"
          type="password"
        />

        <AppInput
          register={register('password_confirmation')}
          error={errors.password_confirmation?.message}
          field="password_confirmation"
          placeholder="Confirm Password"
          label="Confirm Password"
          type="password"
        />

        <div className="text-center text-[10px] sm:text-sm">
          I have read and agreed to {appName} <Link to={paths.terms} className="underline">User Agreement</Link> and
          <p className="flex items-center justify-center gap-2">
            <Link to={paths.policy} className="underline">privacy policy </Link>
            <input
              type="checkbox"
              {...register('acceptedTerms')}
              className="accent-emerald-500 mt-1"
            />
          </p>
          {errors.acceptedTerms && (
            <small className="text-red-400 text-sm font-semibold block mt-1">
              {errors.acceptedTerms.message}
            </small>
          )}
        </div>

        <AppButton
          text="Register"
          variant="success"
          isLoading={isSubmitting}
          className="px-8 w-full rounded-md border-2"
        />

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