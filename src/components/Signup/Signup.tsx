import Button from "components/Button";
import TextField from "components/Fields/TextField";
import useAuth from "components/hooks/useAuth";
import { Formik } from "formik";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import commonStyles from "styles/common";
import * as Yup from "yup";
import styles from "./Signup.styles";

const initialValues = {
  email: "",
  password: "",
};

const Signup = () => {
  const { createUser } = useAuth();
  const handleSubmit = (values: typeof initialValues) => {
    createUser(values);
  };

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
                label="Email Address"
                keyboardType="default"
                value={values.email}
                error={errors.email}
                touched={touched.email}
                onBlur={handleBlur("email")}
                onChangeText={handleChange("email")}
                autoCapitalize='none'
              />
              <TextField
                label="Password"
                value={values.password}
                error={errors.password}
                touched={touched.password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                autoCapitalize='none'
              />
              <TouchableWithoutFeedback>
                <Text style={[styles.forgotPassword, commonStyles.bold]}>
                ✓ I agree to all Terms and Conditions
                </Text>
              </TouchableWithoutFeedback>
              <Button title={"Signup"} onPress={handleSubmit as any} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Signup;
