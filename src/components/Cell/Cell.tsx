import React from "react";
import { Figure } from '../Figure/Figure';
import './Cell.scss'

export const Cell = React.memo((props: any) => {
    const { figure, index, possible } = props;
    return (
        <div className={`Cell ${index % 2 === 0 ? 'Odd': 'Even'} ${possible && 'possible'}`}>
            {figure ? <Figure {...figure} /> : null}
        </div>
    )
})
