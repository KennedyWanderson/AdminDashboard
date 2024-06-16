import React from 'react';

export default function MenuItem({ texto, icone, url, className, onClick }) {
    function renderizarLink() {
        return (
            <div className={`
                flex flex-col justify-center items-center
                h-20 w-20
                dark:text-gray-200
                ${className}
            `}>
                {icone}
                <span className="text-xs font-light">
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
                <a href={url}>
                    {renderizarLink()}
                </a>
            ) : (
                renderizarLink()
            )}
        </li>
    );
}
