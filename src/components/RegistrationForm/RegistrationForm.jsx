import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import styles from "../ContactForm/ContactForm.module.css";

import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { fetchContacts } from "../../redux/contacts/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    ).then((response) => {
      if (response.payload) {
        console.log("Successfully registrated");
        dispatch(fetchContacts());
      } else {
        console.error("Registration error");
      }
    });
    actions.resetForm();
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .max(50, "Must be 50 characters or less")
      .required("Required")
      .trim(),
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
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className={styles.wrap}>
          <div className={styles.wraper}>
            <label htmlFor={nameId}>Name</label>
            <Field type="text" id={nameId} name="name" />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </div>
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
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
