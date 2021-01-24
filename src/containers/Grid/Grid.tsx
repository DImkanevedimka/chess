import React, { useState } from "react";
import { Cell, Figure } from '../../components';
import './Grid.scss';
import { intialFiguresPosition, ActionRules } from './figures';

const initalGrid: {
    [key: string]: any
} = {};

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        initalGrid['' + i + j] = {
            x: i,
            y: j,
            index: i + j + 1,
            key: '' + i + j,
            figure: intialFiguresPosition['' + i + j] || null,
        }
    }
}

let initialValue = {
    x: 0,
    y: 0
}


let isMoveble = false;
let selectedFigure: any = null;


const GridMap = Object.keys(initalGrid).sort();

export const Grid = (props: any) => {
    const [gameGrid, changeGrid] = useState(initalGrid)
    const [cords, changeCords] = useState({ x: 0, y: 0 });

    const startMoveElement = () => {
        isMoveble = true
    }

    const endMoveElemnt = () => {
        isMoveble = false
    }

    const onFigureClick = (event: React.MouseEvent) => {
        const target = event.target as HTMLElement
        if (!isMoveble) {
            startMoveElement();
            const grid = document.querySelector('.Grid');
            const { x, y } = grid!.getClientRects()[0];
            const { x: clientX, y: clientY } = target.getClientRects()[0]
            const a = Math.round((clientX - x) / 50)
            const b = Math.round((clientY - y) / 50)
            const cellData = { ...gameGrid['' + b + a] }
            selectedFigure = cellData.figure;
            const updatedGameGrid = checkPossibleTurns(
                {
                    ...gameGrid,
                    ['' + b + a]: {
                        ...cellData,
                        figure: null
                    }
                },
                a, 
                b
            )

            changeGrid(updatedGameGrid)

            initialValue = {
                x: event.clientX - clientX,
                y: event.clientY - clientY
            }
            changeCords({
                x: clientX - x,
                y: clientY - y
            })
        } else {
            const grid = document.querySelector('.Grid');
            const { x, y } = grid!.getClientRects()[0];
            const { x: clientX, y: clientY } = target.getClientRects()[0]
            const a = Math.round((clientX - x) / 50)
            const b = Math.round((clientY - y) / 50)
            const cellData = { ...gameGrid['' + b + a] }
            const updatedGrid = resetPossible({
                ...gameGrid,
                ['' + b + a]: {
                    ...cellData,
                    figure: selectedFigure
                }
            })
            changeGrid(updatedGrid)
            selectedFigure = null;
            initialValue = {
                x: 0,
                y: 0
            }
            endMoveElemnt()
        }
    }

    const moveElemnt = (event: React.MouseEvent) => {
        if (isMoveble) {
            const { clientX, clientY } = event.nativeEvent;
            const { x, y }: any = event.currentTarget.getClientRects()[0];
            changeCords({
                x: clientX - x - initialValue.x,
                y: clientY - y - initialValue.y
            })
        }
        return;
    }

    const resetPossible = (gameGrid: any) => {
        let updatedGameGrid = {...gameGrid}
        Object.keys(gameGrid).forEach(cellCord => {
            delete updatedGameGrid[cellCord].possible
        })
        return updatedGameGrid
    }

    const checkPossibleTurns = (gameGrid: any, startA: number, startB: number): any => {
        const { type, color } = selectedFigure
        const turnRules = ActionRules[type]
        let possibleCells = [`${startB}${startA}`];
        turnRules.map(rule => {
            const { x: calcX, y: calcY, recursion} = rule;
            let x = startA
            let y = startB
            if(recursion) {
                while(x >= 0 && x <= 7 && y >= 0 && y <= 7) {
                    x = calcX(x)
                    y = calcY(y)
                    possibleCells.push(`${y}${x}`)
                }
            }
        })
        possibleCells.map(cellCord => {
            if(gameGrid[cellCord]) {
                gameGrid[cellCord].possible = true
            }
        })
        return gameGrid
    }

    return (
        <>
            <div className='Grid' onMouseMove={moveElemnt} onClick={onFigureClick}>
                {GridMap.map((cords) => {
                    const cell = gameGrid[cords];
                    return <Cell key={cell.key} {...cell} />
                })
                }
                <div>
                    {isMoveble && <div className='Dragable' style={{
                        transform: `translate(${cords.x}px, ${cords.y}px)`
                    }}>
                        <Figure {...selectedFigure} /></div>}
                </div>
            </div>
        </>
    )
}
