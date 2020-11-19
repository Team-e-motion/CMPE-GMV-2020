import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const Certify = () => {
    const [state, setState] = React.useState({
        letter: ''
    });

    const handleChange = (event) => {
        const letter = event.target.letter;
        setState({
            ...state,
            [letter]: event.target.value
        });
    };

    return (
        <div className="Certify">
            {/* This info is just temporary */}
            <p>Certify</p>
            <Grid container direction="column" justify="space-around" alignItems="center">
                <TextField
                    id="outlined-textarea"
                    label="Inserta el mensaje a firmar"
                    multiline
                    variant="outlined"
                    style={{ width: '60%' }}
                />

                <FormControl>
                    <NativeSelect
                        value={state.age}
                        onChange={handleChange}
                        name="age"
                        inputProps={{ 'aria-label': 'age' }}>
                        <option value="">None</option>
                        <option value={10}>Ten</option>
                        <option value={20}>Twenty</option>
                        <option value={30}>Thirty</option>
                    </NativeSelect>
                </FormControl>
            </Grid>
        </div>
    );
};

export default Certify;
