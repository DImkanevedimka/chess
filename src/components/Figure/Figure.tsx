import React from "react";
import { Icons } from '../../containers/Grid/figures'
import './Figure.scss'

export const Figure = (props: any) => {
    const { color,  type } = props;
    return (
        <div className={`figure`} >
            <img src={Icons[color][type]} alt='icon' />
        </div>
    )
}
