import Link from "next/link";
import Image from "next/image";
import { UserBar } from "../UserBar/index.tsx";

import "./UserCorner.css";

export const UserCorner = () => {
    return (
        <div className="userCorner">
            <Link className="user__link" href={"/question"}>
                <Image
                    className="user__image"
                    src="/question.svg"
                    alt="?"
                    width={22}
                    height={25}
                />
            </Link>
            <Link className="user__link" href={"/notification"}>
                <Image
                    className="user__image"
                    src="/bell.svg"
                    alt="?"
                    width={22}
                    height={25}
                />
            </Link>
            <UserBar/>
        </div>
    );
};
