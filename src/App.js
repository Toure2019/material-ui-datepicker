import React, { useState } from 'react';
import DatePickerCustom from './components/DatePickerCustom';
import ErrorCustom from './components/ErrorCustom';


const App = () => {

  const initValue = { tc1: '', tc2:'', t1: '', t2: '', t3: '', t4: '' }
  const [values, setValue] = useState(initValue);
  const handleChange = (field, fieldValue) => {
    setValue({ ...values, [field]: fieldValue });
  }

  return (
    <div>
      <DatePickerCustom />
      <form>
        <div style={{marginBottom: '20px'}}>
          <input type="text" name="t0" value={values.tc1} onChange={(e) => handleChange('tc1', e.target.value)} /><br/>
          <ErrorCustom values={values} controlName='tc1' />
        </div>
        <div style={{marginBottom: '20px'}}>
          <input type="text" name="t0" value={values.tc2} onChange={(e) => handleChange('tc2', e.target.value)} /><br/>
          <ErrorCustom values={values} controlName='tc2' />
        </div>

        <div style={{marginBottom: '20px'}}>
          <input type="text" name="t1" value={values.t1} onChange={(e) => handleChange('t1', e.target.value)} /><br/>
          <ErrorCustom values={values} controlName='t1'/>
        </div>
        <div style={{marginBottom: '20px'}}>
          <input type="text" name="t2" value={values.t2} onChange={(e) => handleChange('t2', e.target.value)} /><br/>
          <ErrorCustom values={values} controlName='t2'/>
        </div>
        <div style={{marginBottom: '20px'}}>
          <input type="text" name="t3" value={values.t3} onChange={(e) => handleChange('t3', e.target.value)} /><br/>
          <ErrorCustom values={values} controlName='t3'/>
        </div>
        <div style={{marginBottom: '20px'}}>
          <input type="text" name="t4" value={values.t4} onChange={(e) => handleChange('t4', e.target.value)} /><br/>
          <ErrorCustom values={values} controlName='t4'/>
        </div>

      </form>
    </div>
  );
}

export default App;
