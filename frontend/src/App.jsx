import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";

function App() {
  const handleClickRegister = (values) => {
    axios
      .post("http://localhost:3001/register", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const handleClickLogin = (values) => {
    axios
      .post("http://localhost:3001/login", {
        email: values.email,
        password: values.password,
      })
      .then((response) => {
        alert(response.data.msg);
      });
  };

  const validationLogin = yup.object().shape({
    email: yup
      .string()
      .email("email e/ou senha incorretos")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "email e/ou senha incorretos")
      .required("Campo obrigatório"),
  });

  const validationRegister = yup.object().shape({
    email: yup
      .string()
      .email("email e/ou senha incorretos")
      .required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "A senha deve ter no minimo 6 caracteres")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não são iguais"),
  });

  return (
    <div className="container">
      <h1>Login</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickLogin}
        validationSchema={validationLogin}
      >
        <Form className="login-form">
          <div className="login-form-group">
            <Field name="email" className="form-field" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="login-form-group">
            <Field name="password" className="form-field" placeholder="Senha" />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Login
          </button>
        </Form>
      </Formik>

      <h1>Cadastro</h1>
      <Formik
        initialValues={{}}
        onSubmit={handleClickRegister}
        validationSchema={validationRegister}
      >
        <Form className="register-form">
          <div className="register-form-group">
            <Field name="email" className="form-field" placeholder="Email" />
            <ErrorMessage
              component="span"
              name="email"
              className="form-error"
            />
          </div>
          <div className="register-form-group">
            <Field name="password" className="form-field" placeholder="Senha" />
            <ErrorMessage
              component="span"
              name="password"
              className="form-error"
            />
          </div>

          <div className="register-form-group">
            <Field
              name="confirmPassword"
              className="form-field"
              placeholder="Confirme sua senha"
            />
            <ErrorMessage
              component="span"
              name="confirmPassword"
              className="form-error"
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Formik>
    </div>
  );
}

export default App;
