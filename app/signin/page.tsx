//"use client";
import { getServerSession } from "next-auth/next";
import "../globals.css"
import Form from "../_components/form";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AuthProvider from "../_components/authProvider";

export default async function Home() {
  return(
      <Form/>
  )
}


// import { getProviders, signIn } from "next-auth/react";

// export default function SignIn({ providers}:{providers:any}) {
//     return (
//         <div>
//             <h1>Sign In</h1>
//             {Object.values(providers).map((provider:any) => (
//                 <div key={provider.name}>
//                     <button onClick={() => signIn(provider.id)}>
//                         Sign in with {provider.name}
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export async function getServerSideProps() {
//     const providers = await getProviders();
//     return {
//         props: { providers },
//     };
// }


// /pages/auth/signin.tsx
// import { useEffect, useState } from "react";
// import { getProviders, signIn } from "next-auth/react";
// import { useFormik } from "formik";
// import styles from "./signin.module.css";
// import "../../globals.css";

// export default function SignIn() {
//   const [providers, setProviders] = useState<any>({});

//   useEffect(() => {
//     const fetchProviders = async () => {
//       const res = await getProviders();
//       setProviders(res);
//     };
//     fetchProviders();
//   }, []);

//   const initialValues = {
//     name: "",
//     password: "",
//     newPassword: "",
//     confirmPassword: ""
//   };

//   const onSubmit = (values: any) => {
//     // alert(JSON.stringify(values, null, 2));
//     console.log("form data", values);
//   };

//   const validation = (values: any) => {
//     let errors: any = {};

//     if (!values.name) {
//       errors.name = "Required";
//     }
//     if (!values.password) {
//       errors.password = "Required";
//     }
//     if (values.password && values.password.length < 4) {
//       errors.password = "Password needs min 4 characters";
//     } else {
//       if (!values.newPassword) {
//         errors.newPassword = "Required";
//       }
//       if (!values.confirmPassword) {
//         errors.confirmPassword = "Required";
//       }
//       if (values.newPassword && values.newPassword.length < 4) {
//         errors.newPassword = "Password needs min 4 characters";
//       }
//       if (values.confirmPassword && values.confirmPassword.length < 4) {
//         errors.confirmPassword = "Password needs min 4 characters";
//       } else if (values.newPassword != values.confirmPassword) {
//         errors.confirmPassword = "Passwords don't match";
//       }
//     }
//     return errors;
//   };

//   const formik = useFormik({
//     initialValues: initialValues,
//     onSubmit: onSubmit,
//     validate: validation
//   });

//   return (
//     <main className={styles.main}>
//       <div>
//         <div>
//           <form onSubmit={formik.handleSubmit} className="practiceform">
//             <div>
//               <label>Name</label>
//               <input
//                 name="name"
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//                 value={formik.values.name}
//                 type="text"
//               />
//               {formik.errors.name ? (
//                 <div className="error">{formik.errors.name}</div>
//               ) : null}
//               <label>Password</label>
//               <input
//                 name="password"
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//                 value={formik.values.password}
//                 type="text"
//               />
//               {formik.touched.password && formik.errors.password ? (
//                 <div className="error">{formik.errors.password}</div>
//               ) : null}
//               <label>New Password</label>
//               <input
//                 name="newPassword"
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//                 value={formik.values.newPassword}
//                 type="text"
//               />
//               {formik.errors.newPassword ? (
//                 <div className="error">{formik.errors.newPassword}</div>
//               ) : null}
//               <label>Confirm Password</label>
//               <input
//                 name="confirmPassword"
//                 onBlur={formik.handleBlur}
//                 onChange={formik.handleChange}
//                 value={formik.values.confirmPassword}
//                 type="text"
//               />
//               {formik.errors.confirmPassword ? (
//                 <div className="error">{formik.errors.confirmPassword}</div>
//               ) : null}
//               <input type="submit" disabled={!formik.isValid} value="Submit" />
//             </div>
//           </form>
//           <div>
//             {providers &&
//               Object.values(providers).map((provider: any) => (
//                 <div key={provider.name}>
//                   <button onClick={() => signIn(provider.id)}>
//                     Sign in with {provider.name}
//                   </button>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

