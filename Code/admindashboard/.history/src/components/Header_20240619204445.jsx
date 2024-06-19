import AvatarUsuario from "./UserAvatar";
import { IconeSearch, IconeSino } from "./icons";

export default function Header({ titulo, subtitulo }) {


    return (
        <div className={`flex`}>
            <div>
                <h1 className={`
                font-black text-3xl
                text-gray-900 dark:text-gray-100
            `}>
                    {titulo}
                </h1>
                <h2 className={`
                font-light text-sm
                dark:text-gray-300
            `}>
                    {subtitulo}
                </h2>
            </div>
            <header className="text-white">
                <nav className=" justify-center" aria-label="Global">

                    <div className="hidden lg:flex lg:gap-x-12">
                       
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Features</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Marketplace</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Company</a>
                    </div>

                </nav>
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                            </a>
              
                        </div>
                       
                    </div>
                </div>
            </header>

            <div className={`flex flex-grow justify-end items-center gap-8`}>

                {IconeSino}
                <AvatarUsuario />
            </div>
        </div>
    )
}