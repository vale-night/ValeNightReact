import { Box, Button, Slider } from '@material-ui/core';
import React from 'react';
import Input from '../../components/Input'
import Select from '../../components/Select';
import './style.css';
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import defaultTheme from '../../materialTheme';

const useStyles = makeStyles({
    button: {
        color: 'white',
        padding: '10px',
        borderRadius: '1px',
        marginTop: '20%'
    }
});

const sliderTheme = createMuiTheme({
    ...defaultTheme,
    overrides: {
        MuiSlider: {
            root: {
                width: '80%'
            }
        }
    }
});

const CustomSlider = ({id, min, max, defaultValue, marks, header, step = 1}) => {
    const valueText = (value) => value;

    return (
        <ThemeProvider theme={sliderTheme}>
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

export default () => {
    const classes = useStyles();
    return (
        <>
            <form>
                <Box display="flex" flexDirection="column" justifyContent="flex-end">
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <h2>Encontre sua festa</h2>
                        <Input id="name" type="text" placeholder="Nome da Festa / Local" value="" />
                        <Select id="genre" placeholder="Selecione o Gênero" value="" dataset={genreDataSet} />
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
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Button className={classes.button} variant="contained" color="primary">
                            Aplicar filtros
                        </Button>
                    </Box>
                </Box>
            </form>
        </>
    )
}