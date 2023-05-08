import Link from "next/link";
import Image from "next/image";

import "./UserBar.css";

const userName = "Alex Semenov";

export const UserBar = () => {
    return (<div className="userBar">
        <Link className="user__link" href={"/user"}>
            {userName}
        </Link>

        <Link className="user__link" href={"/arrow"}>
            <Image
                className="user__image"
                src="/arrowDown.svg"
                alt="down"
                width={9.30}
                height={6.67}
            />
        </Link>

        <Link className="user__picture" href={"/profile"}>
            <Image
                className="user__image"
                src="/bazhan.png"
                alt="question"
                width={50}
                height={50}
            />
        </Link>
    </div>
    );
};
