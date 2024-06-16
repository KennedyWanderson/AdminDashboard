import Link from 'next/link'


export default function MenuItem() {
    function renderizarLink() {
        return (
            <div className={`
                    flex flex-col justify-center items-center
                    h-20 w-20
                    ${props.className}
                `}>
                {props.icone}
                <span className={`text-xs font-light`}>
                    {props.texto}
                </span>
            </div>
        )
    }
    return (
        <li className={`http://localhost:3000/
            hover:bg-gray-100 
            cursor-pointer
        `}>
        
        </li>
    )
}