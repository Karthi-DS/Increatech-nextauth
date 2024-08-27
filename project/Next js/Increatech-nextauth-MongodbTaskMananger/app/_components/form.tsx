"use client";
import React from "react";
import styles from "../page.module.css";
import "../globals.css";
import {useFormik} from "formik";

const Form =() =>{
  const initialValues= {
    name:"",
    password:"",
    newPassword:"",
    confirmPassword:""
  }
  
  const onSubmit = (values:any)=>{
      // alert(JSON.stringify(values, null, 2));
      console.log("form data",values)
  }
  const validation = (values:any) =>{
    let errors:any = {}

    if(!values.name){
      errors.name='Required'
    }
    if(!values.password){
      formik.touched.password && !values.password? errors.password='Required':null
    }
    if(values.password && values.password.length<4){
      errors.password = 'Password need min 4 characters'
    }else{
      if(!values.newPassword){
        errors.newPassword = 'Required';
      }
      if(!values.confirmPassword){
        errors.confirmPassword = 'Required';
      }
      if(values.newPassword && values.newPassword.length<4 ){
        errors.newPassword = 'Password need min 4 characters'
      }
      if(values.confirmPassword && values.confirmPassword.length<4 ){
        errors.confirmPassword = 'Password need min 4 characters'
      }
      else if (values.newPassword != values.confirmPassword){
        errors.confirmPassword = "Password doesn't match"
      }
    }
    return errors
  }
  const formik = useFormik({
    initialValues:initialValues,
    onSubmit: onSubmit,
    validate:validation
  })
  console.log(initialValues,formik.values)
  return (
    <main className={styles.main}>
      <div>
        <div>
        <form onSubmit={formik.handleSubmit } className="practiceform">
          <div>
          <label>Name</label>
          <input name="name" onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} type="text" />
          {formik.errors.name ? <div className="error">{formik.errors.name}</div>:null}
          <label>Password</label>
          <input name="password" onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.password} type="text" />
          {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div>:null}
          <label>New Password</label>
          <input name="newPassword" onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.newPassword} type="text" />
          {formik.errors.newPassword ? <div className="error">{formik.errors.newPassword}</div>:null}
          <label>Confirm Password</label>
          <input name="confirmPassword" onBlur={formik.handleBlur}  onChange={formik.handleChange}  value={formik.values.confirmPassword} type="text" />
          {formik.errors.confirmPassword ? <div className="error">{formik.errors.confirmPassword}</div>:null}
          <input type="submit" disabled={!formik.isValid} value="Submit" />
          </div>        
        </form>
        </div>
      </div>
    </main>)
}

export default Form;


