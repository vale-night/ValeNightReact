import { Slider } from '@material-ui/core';
import React from 'react';
import Input from '../../components/Input'
import Select from '../../components/Select';
import global from '../../global';
import './style.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const muiTheme = createMuiTheme({
    overrides: {
        MuiSlider: {
            root: {
                width: '80%'
            },
            thumb: {
                color: global.SECONDARY_COLOR,
            },
            track: {
                color: global.PRIMARY_COLOR,
            },
            rail: {
                color: 'black'
            }
        }
    }
});

const CustomSlider = ({id, min, max, defaultValue, marks, header, step = 1}) => {
    const valueText = (value) => value;

    return (
        <ThemeProvider theme={muiTheme}>
                <h5>{header}</h5>
                <Slider
                    id={id}
                    knobSize={15}
                    defaultValue={defaultValue}
                    min={min}
                    max={max}
                    step={step}
                    getAriaValueText={valueText}
                    aria-labelledby="faixa-etária"
                    valueLabelDisplay="auto"
                    track={4}
                    marks={marks}
                />
        </ThemeProvider>
    )
}

export default () => {
    const genreDataSet = [
        {
            id: 'jazz-option',
            value: 'jazz',
            text: 'Jazz'
        },
        {
            id: 'brega-funk-option',
            value: 'brega_funk',
            text: 'BregaFunk'
        }
    ]

    //Descomentar caso utilizemos o select ao invés do slider
    // const ageDataSet = [
    //     {
    //         id: 'underaged-option',
    //         value: 'underage',
    //         text: '0-18 anos'
    //     },
    //     {
    //         id: 'adult-option',
    //         value: 'adult',
    //         text: '19 - 59 anos'
    //     },
    //     {
    //         id: 'old-option',
    //         value: 'old',
    //         text: '60 - 100 anos'
    //     }
    // ]

    const ageMarks = [
        {
            value: 1,
            label: '1 ano'
        },
        {
            value: 99,
            label: '99 anos'
        }
    ];

    const priceMarks = [
        {
            value: 1,
            label: 'R$ 1,00'
        },
        {
            value: 5000,
            label: 'R$ 5000,00'
        }
    ];
    // const marks = [
    //     
    // ]
    return (
        <>
            <form class="flex-direction-column">
                <h2>Encontre sua festa</h2>
                <Input id="name" type="text" placeholder="Nome da Festa / Local" value="" />
                <Select id="genre" placeholder="Selecione o Gênero" value="" dataset={genreDataSet} />
                {/* <Select id="genre" placeholder="Selecione a Faixa etária" value="" dataset={ageDataSet} /> */}
                <CustomSlider id="age" 
                    min={1} 
                    max={99} 
                    header="Faixa etária"
                    default={30} marks={ageMarks}/>
                <CustomSlider id="age" 
                    min={1}
                    step={50} 
                    max={5000} 
                    header="Deseja gastar?"
                    default={30} marks={priceMarks}/>

                <button>
                    Aplicar filtros
                </button>
            </form>
        </>
    )
}