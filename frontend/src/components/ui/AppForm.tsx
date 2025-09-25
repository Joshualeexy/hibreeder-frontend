import { twMerge } from "tailwind-merge"

type Props = {
    onSubmit: (e:React.FormEvent<HTMLFormElement>) => void
    className?: string
    children: React.ReactNode
}
const AppForm = ({ children, onSubmit, className }: Props) => {
    return (
        <form onSubmit={(e)=>{onSubmit(e)}} className={twMerge(`mx-auto sm:w-4/12 w-11/12  pt-0 space-y-4 mb-10 p-8 `, className)} style={{ boxShadow: "0 0 15px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
            {children}
        </form>
    )
}

export default AppForm
