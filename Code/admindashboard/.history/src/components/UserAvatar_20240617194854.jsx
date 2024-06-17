import Image from 'next/image'


export default function AvatarUsuario({className}) {
    return (
            <Image
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${className}
                `}
            />

    )
}