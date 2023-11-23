import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'



export  const  Formulario = ({control, errors}: any) => {
  return (
    <View>
            <Controller
        control={control}
        render={({ field }) => (
          <View>
            <TextInput
              placeholder="Nombre"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
            <Text style={{ color: 'red' }}>{errors.name?.message}</Text>
          </View>
        )}
        name="name"
      />

      <Controller
        control={control}
        render={({ field }) => (
          <View>
            <TextInput
              placeholder="Correo electrónico"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
            <Text style={{ color: 'red' }}>{errors.email?.message}</Text>
          </View>
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({ field }) => (
          <View>
            <TextInput
              placeholder="Contraseña"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
              secureTextEntry
            />
            <Text style={{ color: 'red' }}>{errors.password?.message}</Text>
          </View>
        )}
        name="password"
      />
    </View>
  )
}

const styles = StyleSheet.create({})