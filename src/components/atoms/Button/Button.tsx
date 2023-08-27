// import from 'react'

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props = DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export default function Button(props: Props) {
    return (
        <button {...props} className={"button " + props.className}>
            Button
        </button>
    );
}
