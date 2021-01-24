import KingB from '../../assets/figures/kingB.svg';
import KingW from '../../assets/figures/kingW.svg';
import HorseB from '../../assets/figures/konB.svg';
import HorseW from '../../assets/figures/konW.svg';
import OfficerB from '../../assets/figures/oficerB.svg';
import OfficerW from '../../assets/figures/oficeW.svg';
import PeshB from '../../assets/figures/peshkaB.svg';
import PeshW from '../../assets/figures/peshkaW.svg';
import QueenB from '../../assets/figures/queenB.svg';
import QueenW from '../../assets/figures/queenW.svg';
import SlonB from '../../assets/figures/slonB.svg';
import SlonW from '../../assets/figures/slonW.svg';


export enum Figures {
    king = 'king',
    queen = 'queen',
    rook = 'rook',
    bishop = 'bishop',
    knight = 'knight',
    pawn = 'pawn'
}

const BlackIcons: {
    [key: string]: string
} = {
    [Figures.king]: QueenB,
    [Figures.queen]: KingB,
    [Figures.rook]: SlonB,
    [Figures.bishop]: OfficerB,
    [Figures.knight]: HorseB,
    [Figures.pawn]: PeshB
}

const WhiteIcons: {
    [key: string]: string
} = {
    [Figures.king]: QueenW,
    [Figures.queen]: KingW,
    [Figures.rook]: SlonW,
    [Figures.bishop]: OfficerW,
    [Figures.knight]: HorseW,
    [Figures.pawn]: PeshW
}

export const ActionRules: {
    [key: string]: any[]
} = {
    [Figures.king]: [{
        x: (x: number) => x + 1
    }],
    [Figures.queen]: [],
    [Figures.rook]: [],
    [Figures.bishop]: [
        {
            x: (x: number) => x + 1,
            y: (y: number) => y + 1,
            recursion: true
        },
        {
            x: (x: number) => x + 1,
            y: (y: number) => y - 1,
            recursion: true
        },
        {
            x: (x: number) => x - 1,
            y: (y: number) => y + 1,
            recursion: true
        },
        {
            x: (x: number) => x - 1,
            y: (y: number) => y - 1,
            recursion: true
        },
    ],
    [Figures.knight]: [],
    [Figures.pawn]: [
        {
            x: (x: number) => x + 1,
            y: 0
        },
        {
            x: (x: number) => x + 2,
            y: 0,
            firstAction: true
        },
        {
            x: (x: number) => x + 1,
            y: (y: number) => y + 1,
            atack: true
        },
        {
            x: (x: number) => x + 1,
            y: (y: number) => y - 1,
            atack: true
        },
    ]
}

export const Icons: {
    [key: string]: {
        [key: string]: string
    }
} = {
    'white': WhiteIcons,
    'black': BlackIcons
}

export const intialFiguresPosition: {
    [key: string]: any
} = {
    '00': {
        color: 'white',
        type: Figures.rook,
    },
    '01': {
        color: 'white',
        type: Figures.knight,
    },
    '02': {
        color: 'white',
        type: Figures.bishop,
    },
    '03': {
        color: 'white',
        type: Figures.queen,
    },
    '04': {
        color: 'white',
        type: Figures.king,
    },
    '05': {
        color: 'white',
        type: Figures.bishop,
    },
    '06': {
        color: 'white',
        type: Figures.knight,
    },
    '07': {
        color: 'white',
        type: Figures.rook,
    },
    '10': {
        color: 'white',
        type: Figures.pawn,
    },
    '11': {
        color: 'white',
        type: Figures.pawn,
    },
    '12': {
        color: 'white',
        type: Figures.pawn,
    },
    '13': {
        color: 'white',
        type: Figures.pawn,
    },
    '14': {
        color: 'white',
        type: Figures.pawn,
    },
    '15': {
        color: 'white',
        type: Figures.pawn,
    },
    '16': {
        color: 'white',
        type: Figures.pawn,
    },
    '17': {
        color: 'white',
        type: Figures.pawn,
    },
    '60': {
        color: 'black',
        type: Figures.pawn,
    },
    '61': {
        color: 'black',
        type: Figures.pawn,
    },
    '62': {
        color: 'black',
        type: Figures.pawn,
    },
    '63': {
        color: 'black',
        type: Figures.pawn,
    },
    '64': {
        color: 'black',
        type: Figures.pawn,
    },
    '65': {
        color: 'black',
        type: Figures.pawn,
    },
    '66': {
        color: 'black',
        type: Figures.pawn,
    },
    '67': {
        color: 'black',
        type: Figures.pawn,
    },
    '70': {
        color: 'black',
        type: Figures.rook,
    },
    '71': {
        color: 'black',
        type: Figures.knight,
    },
    '72': {
        color: 'black',
        type: Figures.bishop,
    },
    '73': {
        color: 'black',
        type: Figures.queen,
    },
    '74': {
        color: 'black',
        type: Figures.king,
    },
    '75': {
        color: 'black',
        type: Figures.bishop,
    },
    '76': {
        color: 'black',
        type: Figures.knight,
    },
    '77': {
        color: 'black',
        type: Figures.rook,
    },
}
