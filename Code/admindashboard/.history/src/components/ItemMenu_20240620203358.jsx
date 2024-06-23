

import { Link } from 'react-router-dom';

export default function MenuItem({ texto, icone, url, className, onClick }) {
    function renderizarLink() {
        return (
            <div className={`
                flex justify-center items-center
                h-20 w-56 gap-4
                dark:text-gray-200
                ${className}
            `}>
                {icone}
                <span className="text-lg font-light">
                    {texto}
                </span>
            </div>
        );
    }

    return (
        <li
            onClick={onClick}
            className={`
                hover:bg-gray-100 dark:hover:bg-gray-800
                cursor-pointer
            `}
        >
            {url ? (
                <Link to={url}>
                    {renderizarLink()}
                </Link>
            ) : (
                renderizarLink()
            )}
        </li>
    );
}
