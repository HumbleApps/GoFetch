import Button from "components/Button";
import TextField from "components/Fields/TextField";
import useAuth from "components/hooks/useAuth";
import { Formik } from "formik";
import React from "react";
import { Text, View } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import commonStyles from "styles/common";
import * as Yup from "yup";
import styles from "./Login.styles";
import auth from "@react-native-firebase/auth";

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
    auth()
      .createUserWithEmailAndPassword(
        "jane.doe@example.com",
        "SuperSecretPassword!"
      )
      .then(() => {
        console.log("User account created & signed in!");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
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
                autoCapitalize="none"
              />
              <TextField
                label="Password"
                value={values.password}
                error={errors.password}
                touched={touched.password}
                onBlur={handleBlur("password")}
                onChangeText={handleChange("password")}
                autoCapitalize="none"
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
