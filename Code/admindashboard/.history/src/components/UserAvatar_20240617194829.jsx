import Image from 'next/image'
import Link from 'next/link'
Name?: string
}

export default function AvatarUsuario({className}) {
    return (
        <Link href="/perfil" legacyBehavior>
            <Image
                src={usuario?.imagemUrl ?? '/images/avatar.svg'}
                alt="Avatar do Usuário"
                className={`
                    h-10 w-10 rounded-full cursor-pointer
                    ${className}
                `}
            />
        </Link>
    )
}