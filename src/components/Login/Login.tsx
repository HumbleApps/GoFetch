import TextField from "components/Fields/TextField";
import { Formik } from "formik";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import commonStyles from "styles/common";
import Button from "components/Button";
import * as Yup from "yup";
import styles from "./Login.styles";
import useAuth from "components/hooks/useAuth";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const { signIn } = useAuth();
  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
    signIn(values);
  };

  const handleForgotPassword = () => {
    console.log("handleForgotPassword");
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
                // autoCapitalize="words"
              />
              <TextField
                label="Password"
                value={values.password}
                error={errors.password}
                touched={touched.password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                // autoCapitalize="characters"
              />
              <TouchableWithoutFeedback onPress={handleForgotPassword}>
                <Text style={[styles.forgotPassword, commonStyles.bold]}>
                  Forgot Password!
                </Text>
              </TouchableWithoutFeedback>
              <Button title={"Login"} onPress={handleSubmit as any} />
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

export default Login;
