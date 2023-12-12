import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {spacing,fontSizes} from '../utils/sizes';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={Styles.container}>
      <View style={Styles.inputCoinainer}>
        <TextInput
          style={Styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on? "
        />
        <View style={Styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputCoinainer: {
    justifyContent: 'center',
    padding: spacing.lg,
    flexDirection: 'row',
  },
});
