"use client";
import styles from "../page.module.css";
import "../globals.css";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";

export default function Login() {
  const initialValues = {
    name: "",
    password: "",
  };
  const onSubmit = async (values:any) => {
    // const response = await fetch("/api/auth/register",{
    //   method:'POST',
    //   body: JSON.stringify({
    //     name:values.name,
    //     password:values.password
    //   })
    // })
    const response = await signIn('credentials',{
      name: values.name,
      password:values.password
    })
    console.log("response",response)
  };

  
  const validation = (values: any) => {
    let errors: any = {};

    if (!values.name) {
      errors.name = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password && values.password.length < 4) {
      errors.password = "Password need min 4 characters";
    }
    // let returnObject = Object.getOwnPropertyNames(errors).length ===0?null:errors
    // console.log(returnObject)
    return errors;
  };
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validate: validation,
  });
  return (
    <main className={styles.main}>
      <div>
        <div>
          <form onSubmit={formik.handleSubmit} className="practiceform">
            <div>
              <label>Name</label>
              <input
                name="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                type="text"
              />
              {formik.errors.name ? (
                <div className="error">{formik.errors.name}</div>
              ) : null}
              <label>Password</label>
              <input
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                type="text"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="error">{formik.errors.password}</div>
              ) : null}
              <input
                type="submit"
                disabled={!formik.isValid}
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
