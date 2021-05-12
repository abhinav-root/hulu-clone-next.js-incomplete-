import requests from "../utils/requests";

function Nav() {
    return (
        <nav>
            <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl scrollbar-hide sm:px-20 whitespace-nowrap sm:space-x-10">
                {Object.entries(requests).map(([key, {title, url}]) => (
                <h2 key={key} className="transition transform cursor-pointer duration-4 00 last:pr-24 hover:scale-125 hover:text-white active:text-red-500" >{title}</h2>
                ) )}
            </div>
        </nav>
    )
}

export default Nav;
