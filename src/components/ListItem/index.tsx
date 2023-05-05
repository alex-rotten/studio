import Link from "next/link";
import Image from 'next/image';

import "./ListItem.css";

export const ListItem = ({listProps}) => {

    return (
            listProps?.map(({ id, url, src, alt, text }) => (
                <li className="list__item" key={id}>
                    <Link className="list__link" href={url}>
                        <Image className="list__image" src={src} alt={alt} width={25} height={25} />
                        {text}
                    </Link>
                </li>
            )
        )
    )
}