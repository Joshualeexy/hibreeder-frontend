import AppButton from "../../components/AppButton"
import AppInput from "../../components/AppInput"
import Guest from "../../Layouts/Guest"
const Login = () => {
  return (
    <Guest>
      <form className="mx-auto sm:w-4/12 w-10/12  p-4 space-y-4">
        <div className="">
          <AppInput placeholder="Enter Email"  type="email" />
        </div>
        
         <div className="">
          <AppInput placeholder="Enter Password"  type="password" />
        </div>
        
        <div className="text-center w-full">
          <AppButton text="Login" variant="success" className="px-8 w-full rounded-md " />
        </div>
      </form>

    </Guest>
  )
}

export default Login
