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
            <header className="flex justify-end text-white">
                <nav className=" justify-center" aria-label="Global">

                    <div className="hidden lg:flex lg:gap-x-12">
                       
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Features</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Marketplace</a>
                        <a href="#" className="text-sm font-semibold leading-6 text-white">Company</a>
                    </div>

                </nav>

            </header>

            <div className={`flex flex-grow justify-end items-center gap-8`}>

                {IconeSino}
                <AvatarUsuario />
            </div>
        </div>
    )
}