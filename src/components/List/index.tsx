import Link from "next/link";
import Image from 'next/image';

import "./List.css";

import { ListItem } from "../ListItem/index.tsx";

type listProps = { id: number, url: string, src: string, alt: string, text: string }

export const List = ({listProps}) => {

    return (
        <ul className="list">
            <ListItem listProps={listProps} />
        </ul>
    )
}