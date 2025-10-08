import AppButton from "../../components/ui/AppButton"
import AppInput from "../../components/ui/AppInput"
import Guest from "../../Layouts/Guest"
import { Link } from "react-router-dom"
import paths from "../../Routes/paths"
import GoogleSocialLogin from "../../components/GoogleSocialLogin"
import FloatLeft from "../../components/ui/FloatLeft"
import AppForm from "../../components/ui/AppForm"
import request from "../../utility/request"
import { toast } from "react-toastify"
import { useForm } from "react-hook-form"
import validate from "../../utility/validator"
import { useNavigate } from "react-router-dom"
import utility from '../../utility/utility'
import axios from "axios"

type LoginFormData = {
    email: string
    password: string
}

const appName = import.meta.env.VITE_APP_NAME || ""
const Login = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting }
    } = useForm<LoginFormData>({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const { getOrigin } = utility()
    const Navigate = useNavigate()

    const onSubmit = async (data: LoginFormData) => {
        // Track validation errors locally
        let hasErrors = false

        // Use your custom validator
        const emailErr = validate(data.email, { type: "email", required: true })
        if (emailErr) {
            setError('email', { type: 'manual', message: emailErr })
            hasErrors = true
        }

        const passwordErr = validate(data.password, { type: 'password', min: 6, required: true })
        if (passwordErr) {
            setError('password', { type: 'manual', message: passwordErr })
            hasErrors = true
        }

        if (hasErrors) {
            return
        }

        try {
            const baseURL = getOrigin(false);
            await axios.get(`${baseURL}/sanctum/csrf-cookie`)

            const res = await request('/login', {
                email: data.email,
                password: data.password
            }, {
                sanctumRequest: true
            })

            if (res.status === 'success') {
                console.log(res)
                Navigate('/feeds')
                // Handle successful login (e.g., redirect, store token, etc.)
            } else if (res.status === 'failed') {
                console.log(res)
                Object.keys(res.errors).forEach((errKey) => {
                    const message = res.errors[errKey] ? res.errors[errKey][0] : res.errors[errKey];
                    setError(errKey as keyof LoginFormData, { message: message })
                })
            }
        } catch (error) {
            console.error('Login error:', error)
            toast.error('An unexpected error occurred')
        }
    }

    return (
        <Guest title="Login">
            <AppForm onSubmit={handleSubmit(onSubmit)}>
                <FloatLeft />

                <h4 className="text-center font-medium text-xl">Login {appName}</h4>

                <AppInput
                    error={errors.email?.message}
                    register={register('email')}
                    field="email"
                    placeholder="Enter Email"
                    type="email"
                    label="Email"
                />

                <AppInput
                    error={errors.password?.message}
                    register={register('password')}
                    field="password"
                    placeholder="Enter Password"
                    type="password"
                    label="Password"
                />

                <AppButton
                    text="Login"
                    isLoading={isSubmitting}
                    variant="success"
                    className="px-8 w-full rounded-md"
                />

                <GoogleSocialLogin />

                <div className="flex justify-between items-center w-full">
                    <Link to={paths.forgotPassword} className="text-sm text-gray-600 underline">
                        Forgot password?
                    </Link>
                    <Link to={paths.register} className="text-sm text-gray-600 underline">
                        Create Account
                    </Link>
                </div>
            </AppForm>
        </Guest>
    )
}

export default Login