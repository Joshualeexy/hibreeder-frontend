import type { ReactElement } from "react"
import ApplicationLogo from "../components/ApplicationLogo"


type props = {
    children: ReactElement,

}

const Guest = ({ children }: props) => {
    return (
        <section className="h-screen ">
            <header className="p-4 flex justify-center items-center ">
                <nav>
                    <div className="">
                        <ApplicationLogo className="w-80" />
                    </div>
                </nav>
            </header>

            <main className="">{children}</main>
            <footer></footer>
        </section>
    )
}

export default Guest
