import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormSetValue,
} from 'react-hook-form';
import {Dropdown} from 'react-native-element-dropdown';
import {FormInputs} from './App';

const data = [
  {label: 'Item 1', value: '1'},
  {label: 'Item 2', value: '2'},
  {label: 'Item 3', value: '3'},
  {label: 'Item 4', value: '4'},
  {label: 'Item 5', value: '5'},
  {label: 'Item 6', value: '6'},
  {label: 'Item 7', value: '7'},
  {label: 'Item 8', value: '8'},
];

interface Iprops {
  contol: Control;
  errors: FieldErrors;
  setValue: UseFormSetValue<FormInputs>;
}

export const Formulario = ({control, errors, setValue}: any) => {
  const [codItem, setCodItem] = useState(null);

  return (
    <View>
      <Controller
        control={control}
        render={({field}) => (
          <View>
            <TextInput
              placeholder="Nombre"
              onChangeText={field.onChange}
              onBlur={field.onBlur}
              value={field.value}
            />
            <Text style={{color: 'red'}}>{errors.name?.message}</Text>
          </View>
        )}
        name="name"
      />

      <Controller
        control={control}
        render={({field: {value, onBlur, onChange}}) => (
          <View>
            <TextInput
              placeholder="Correo electrónico"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
            />
            <Text style={{color: 'red'}}>{errors.email?.message}</Text>
          </View>
        )}
        name="email"
      />

      <Controller
        control={control}
        render={({field: {onBlur, value, onChange}}) => (
          <View>
            <TextInput
              placeholder="Contraseña"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry
            />
            <Text style={{color: 'red'}}>{errors.password?.message}</Text>
          </View>
        )}
        name="password"
      />

      {/*       <Controller
        control={control}
        render={({field: {onBlur, value, onChange}}) => (
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
           // value={value}
            onChange={(e) => {
              setValue('codItem', e.value)
            }
            }
          />
        )}
        name='codItem'
      /> */}

   
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            // value={value}
            onChange={e => {
              setValue('codItem', e.value);
            }}
          />
        
   
      
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
