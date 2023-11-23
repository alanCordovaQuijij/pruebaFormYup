import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useForm, Controller, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import * as yup from 'yup';
import { Formulario } from './formulario';

// Definir el esquema de validación con Yup
const validationSchema = yup.object().shape({
  name: yup.string().required('Este campo es obligatorio'),
  email: yup.string().email('Ingrese una dirección de correo electrónico válida').required('Este campo es obligatorio'),
  password: yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres').required('Este campo es obligatorio'),
});

// Definir el tipo de datos del formulario
interface FormInputs {
  name: string;
  email: string;
  password: string;
}

const App: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: async (data) => {
      try {
        await validationSchema.validate(data, { abortEarly: false });
        return { values: data, errors: {} };
      } catch (err) {
        return { values: {}, errors: yupToFormErrors(err as unknown as any) };
      }
    },
  });

  const yupToFormErrors = (yupError: yup.ValidationError) => {
    const convertedErrors: Record<string, string> = {};
    for (const error of yupError.inner) {
      convertedErrors[error.path as string] = error.message;
    }
    return convertedErrors;
  };

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // Aquí puedes manejar la lógica cuando el formulario es enviado
    console.log("DATA DEL FORMULARIO",data);
  };

  const onError: SubmitErrorHandler<FormInputs> = (errors, event) => {
    // Manejar errores (opcional)
    console.error(errors);
  };

  return (
    <View>

      <Formulario control={control} errors={errors}/>

      <Button title="Enviar" onPress={handleSubmit(onSubmit, onError)} />
    </View>
  );
};

export default App;
