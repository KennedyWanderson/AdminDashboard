export default function Conteudo({chi}) {
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
        `}>
            {props.children}
        </div>
    )
}