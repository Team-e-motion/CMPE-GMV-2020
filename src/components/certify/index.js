import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import * as utilities from '../../util/utilities';
import Button from '@material-ui/core/Button';
const Certify = () => {
    const [state, setState] = React.useState({
        letter: 'e',
        postscript: ''
    });

    const handleChange = (event) => {
        const letter = event.target.name;
        setState({
            ...state,
            [letter]: event.target.value
        });
    };

    const generatePostscript = (event) => {
        const letter = event.target.letter;
        const message = event.target.message;
        console.log(event.target);
    };

    const generateAlphabetOptions = () => {
        let result = [];
        utilities.alphabetChars.map((character) =>
            result.push(<option value={character}>{character}</option>)
        );
        return result;
    };

    console.log(utilities.countFrequencyLetters('Esto és un èmnsaj maño pero duro'));
    console.log(generateAlphabetOptions);

    return (
        <div className="Certify">
            {/* This info is just temporary */}
            <p>Certify</p>
            <Grid container direction="column" justify="space-around" alignItems="center">
                <FormControl>
                    <TextField
                        id="outlined-textarea"
                        label="Inserta el mensaje a firmar"
                        multiline
                        variant="outlined"
                        style={{ width: '60%' }}
                        name="message"
                    />
                    <Button variant="contained" color="primary" onClick={generatePostscript}>
                        Firmar con la letra
                    </Button>
                    <NativeSelect value={state.letter} onChange={handleChange} name="letter">
                        {generateAlphabetOptions()}
                    </NativeSelect>
                </FormControl>

                <TextField
                    disabled
                    value={state.postscript}
                    id="filled-disabled"
                    label="Posdata"
                    variant="outlined"
                    style={{ width: '60%' }}
                />
            </Grid>
        </div>
    );
};

export default Certify;
