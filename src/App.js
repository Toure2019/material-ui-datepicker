import React, { useState } from 'react';
import { DatePicker } from '@material-ui/pickers';
import { useForm, Controller } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {
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
            {...field}
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
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
}

// const App = () => {
//   const [date, setDate] = useState(new Date());
//   return (
//     <DatePicker value={date} onChange={setDate} />
//   );
// }

export default App;
