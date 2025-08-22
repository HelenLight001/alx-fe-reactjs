import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function FormikForm() {
  // Validation schema with Yup
  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Formik Registration</h2>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log("Form Data Submitted:", values);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
              alert("Registration Successful!");
            }, 1000);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4">
              {/* Username */}
              <div>
                <label className="block font-medium">Username</label>
                <Field
                  type="text"
                  name="username"
                  className="w-full border px-3 py-2 rounded mt-1"
                  placeholder="Enter username"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Email */}
              <div>
                <label className="block font-medium">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="w-full border px-3 py-2 rounded mt-1"
                  placeholder="Enter email"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Password */}
              <div>
                <label className="block font-medium">Password</label>
                <Field
                  type="password"
                  name="password"
                  className="w-full border px-3 py-2 rounded mt-1"
                  placeholder="Enter password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
