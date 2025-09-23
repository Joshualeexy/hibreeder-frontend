import type { ReactElement } from "react"
import ApplicationLogo from "../components/ui/ApplicationLogo"



type props = {
    children: ReactElement,
}

const Guest = ({ children }: props) => {
    return (
        <section className="min-h-dvh bg-gray-100 flex justify-center items-center flex-col w-screen">
            <header className="p-4 flex justify-center items-center w-full  ">
                <nav className=" sm:w-4/12 w-10/12  pt-5">
                    <div className="text-center">
                        <ApplicationLogo className="mx-auto w-40" />
                    </div>
                </nav>
            </header>

            <main className="w-full">{children}</main>
            <footer></footer>
        </section>
    )
}

export default Guest
