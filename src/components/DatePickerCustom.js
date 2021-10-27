import React, { useState } from "react";
import { DatePicker } from '@material-ui/pickers';
import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const DatePickerCustom = () => {

    const [date, setDate] = useState(null);
    const {register, control, handleSubmit} = useForm();
    const submitData = (data) => {
        console.log(data);
        console.log(date);
    }

    return (
        <form onSubmit={handleSubmit(submitData)}>
            <TextField label="First Name" name="firstName" {...register('test')} />
            <Controller defaultValue={date} name="birthDate" control={control} 
                render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
                }) => (
                    <DatePicker 
                        value={date} 
                        onChange={setDate} 
                        autoOk
                        disableToolbar
                        inputVariant="outlined"
                        variant="inline"
                        format="dd/MM/yyyy"
                        placeholder="00/00/0000"
                    />
                )}
            />
            {/* <DatePicker value={date} onChange={setDate} /> */}
            <Button variant="contained" type="submit">Submit</Button>
        </form>
    );
}

export default DatePickerCustom;