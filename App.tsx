import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import {
  useForm,
  Controller,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';
import * as yup from 'yup';
import {Formulario} from './formulario';

// Definir el esquema de validación con Yup
const validationSchema = yup.object().shape({
  name: yup.string().required('Este campo es obligatorio'),
  email: yup
    .string()
    .email('Ingrese una dirección de correo electrónico válida')
    .required('Este campo es obligatorio'),
  password: yup
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('Este campo es obligatorio'),
  codItem: yup.string().required('Campo es obligatorio'),
});

// Definir el tipo de datos del formulario
export interface FormInputs {
  name: string;
  email: string;
  password: string;
  codItem: string;
}

const App: React.FC = () => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    // Aquí puedes manejar la lógica cuando el formulario es enviado
    console.log('[DATA DEL FORMULARIO]======>', data);
    console.log('[DATA DEL FORMULARIO]======>', getValues('name'));

  };

  return (
    <View>
      <Formulario control={control} errors={errors} setValue={setValue} />

      <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default App;
