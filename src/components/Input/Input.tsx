import TextField from "components/Fields/TextField";
import { Formik } from "formik";
import React from "react";
import { Button, View, Text } from "react-native";
import { TouchableNativeFeedback, TouchableWithoutFeedback } from "react-native-gesture-handler";
import commonStyles from "styles/common";
import * as Yup from "yup";
import styles from './Input.styles';

const initialValues = {
  email: "",
  password: "",
};

const Input = (props) => {
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  const handleForgotPassword = () => {
    console.log("handleForgotPassword");
  }
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Required").email(),
          password: Yup.string().required("Password Required"),
        })}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => {
          return (
            <View>
              <TextField
                // label={translate('name')}
                label="Email Address"
                keyboardType="default"
                value={values.email}
                error={errors.email}
                touched={touched.email}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                autoCapitalize="words"
              />
              <TextField
                // label={translate('phoneNumber')}
                label="Password"
                //   keyboardType="numeric"
                value={values.password}
                error={errors.password}
                touched={touched.password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                autoCapitalize="characters"
              />
              <TouchableWithoutFeedback onPress={handleForgotPassword}>
                  <Text style={[styles.forgotPassword, commonStyles.bold]}>Forgot Password!</Text>
              </TouchableWithoutFeedback>
              <Button title={"Login"} onPress={handleSubmit as any} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Input;
