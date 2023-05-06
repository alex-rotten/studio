import { FC } from "react";
import Link from "next/link";
import Image from "next/image";


import "./ListItem.css";

interface IListProps {
  id: number;
  href: string;
  src: string;
  alt: string;
  text: string;
}

interface IList {
  listProps: IListProps[];
}

export const ListItem: FC<IList> = ({ listProps }) => {
  return (
    <>
      {listProps?.map(({ id, href, src, alt, text }) => (
        <li className="list__item" key={id}>
          <Link className="list__link" href={href}>
            <Image
              className="list__image"
              src={src}
              alt={alt}
              width={25}
              height={25}
            />
            {text}
          </Link>
        </li>
      ))}
    </>
  );
};
