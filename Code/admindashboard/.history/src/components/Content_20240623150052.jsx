export default function Conteudo({children}) {
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
        `}>
            {children}
        </div>
    )
}