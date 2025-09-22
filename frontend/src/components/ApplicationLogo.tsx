import logo from "/logo.png";


type props ={
    className?: string
}
const ApplicationLogo = ({className}:props) => {
  return (
        <img src={logo} alt="Hibreeder" className={`w-20  ${className}`}/>
  )
}

export default ApplicationLogo
