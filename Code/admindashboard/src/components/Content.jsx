export default function Content({ children }) {
    return (
        <div className={`
            flex flex-col mt-7
            dark:text-gray-200
        `}>
            {children}
        </div>
    );
}
