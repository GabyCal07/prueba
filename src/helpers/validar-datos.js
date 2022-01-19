import validator from 'validator';

export const validarEmail = ( email ) => {    
    return (validator.isEmail(email));
}
