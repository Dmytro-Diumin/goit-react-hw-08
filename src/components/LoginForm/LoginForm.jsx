import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";

import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(login(values)).then(() => {
      toast.success("Login successful");
    });
  };

  const emailId = useId();
  const passwordId = useId();

  const userSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(7, "Must be at least 7 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form>
        <div className={styles.wrap}>
          <div className={styles.wraper}>
            <label htmlFor={emailId}>Email</label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </div>
          <div className={styles.wraper}>
            <label htmlFor={passwordId}>Password</label>
            <Field type="password" name="password" />
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
