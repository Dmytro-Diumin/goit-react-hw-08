import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";

import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });
    actions.resetForm();
  };

  const emailId = useId();
  const passwordId = useId();

  const userSchema = Yup.object().shape({
    email: Yup.string()
      .email(7, "Must be at least 7 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required")
      .trim(),
    password: Yup.string()
      .min(7, "Must be at least 7 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required")
      .trim(),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.wrap}>
          <div className={styles.wraper}>
            <label htmlFor={emailId}>Email</label>
            <Field type="email" id={emailId} name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.wraper}>
            <label htmlFor={passwordId}>Password</label>
            <Field type="text" id={passwordId} name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>
        </div>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
