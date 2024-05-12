import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(7, "Must be at least 7 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={(values) => {
        dispatch(register(values)).then(() => {
          toast.success("Register successful");
        });
      }}
      validationSchema={userSchema}
    >
      <Form>
        <div className={styles.wrap}>
          <div className={styles.wraper}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
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
            <Field type="text" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </div>
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
