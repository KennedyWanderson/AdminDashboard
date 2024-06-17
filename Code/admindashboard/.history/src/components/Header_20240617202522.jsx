import AvatarUsuario from "./UserAvatar";
import { IconeSino } from "./icons";

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
            <div className={`flex flex-grow justify-end items-center gap-8`}>
                <div className={`flex justify-center items-center`}>
                    <input type="text" />
                </div>
                {IconeSino}
                <AvatarUsuario  />
            </div>
        </div>
    )
}