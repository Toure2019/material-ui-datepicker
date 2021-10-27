import React, { useState, useEffect } from "react";
import { inputError, ERROR_DATE_COMPARE, ERROR_DATE_INCORRECT } from "../constants/inputError";

const ErrorCustom = ({ values, controlName }) => {

   const initialState = {
      tc1: '',
      tc2: '',
      t1: '',
      t2: '',
      t3: '',
      t4: '',
   }
   const [errorMsg, setErrorMsg] = useState(initialState);

   const handleChangeErr = (field, errValue) => {
      setErrorMsg({ ...errorMsg, [field]: errValue });
   }

   useEffect(() => {
      setErrorMsg({ ...initialState});
      verifyDate();       
   }, [values, controlName]);    

   const verifyDate = () => {			
      Object.keys(values).forEach(key => {
         if (values[key] === key) {
            handleChangeErr(key, ERROR_DATE_INCORRECT);
            if (key === 'tc1' || key === 'tc2') {
               handleChangeErr(key, ERROR_DATE_COMPARE);
            }
         };
      });
   };

	/** Old Version */
   // const verifyDateConformity = () => {
		  /** First Method */
		  // if (compareTwoDate(state.departLe, state.arriveeLe)) {
        //   setInputErrorValue({ ...inputErrorValue, compareDatesAllee: 'Allée: La date de retour doit être supérieure ou égale à la date de départ !' });
        // }
        // if (compareTwoDate(state.rDepartLe, state.rArriveeLe)) {
        //   setInputErrorValue({ ...inputErrorValue, compareDatesRetour: 'Retour: La date de retour doit être supérieure ou égale à la date de départ !' });
        // }

		  /** 2nd Method */
        // if (state.departLe && !isValidDate(state.departLe)) {
        //   setInputErrorValue({ ...inputErrorValue, incorrectDateStartA: 'Le format de date saisi est incorrect !' });
        // }
        // if (state.arriveeLe && !isValidDate(state.arriveeLe)) {
        //   setInputErrorValue({ ...inputErrorValue, incorrectDateEndA: 'Le format de date saisi est incorrect !' });
        // }
        // if (state.rDepartLe && !isValidDate(state.rDepartLe)) {
        //   setInputErrorValue({ ...inputErrorValue, incorrectDateStartR: 'Le format de date saisi est incorrect !' });
        // }
        // if (state.rArriveeLe && !isValidDate(state.rArriveeLe)) {
        //   setInputErrorValue({ ...inputErrorValue, incorrectDateEndR: 'Le format de date saisi est incorrect !' });
        // }
   // };

   return errorMsg[controlName] ? <span style={{color: 'red'}}>{ errorMsg[controlName] }</span> : null;
}

export default ErrorCustom;