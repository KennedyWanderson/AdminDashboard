import AvatarUsuario from "./UserAvatar";
import { IconeSearch, IconeSino } from "./icons";

export default function Header({ titulo, subtitulo }) {


    return (
        <div className={`flex`}>
            <div>
                <h1 className={`1
                </div>
            <div className={`flex flex-grow justify-end items-center gap-8`}>
                
                {IconeSino}
                <AvatarUsuario />
            </div>
        </div>
    )
}