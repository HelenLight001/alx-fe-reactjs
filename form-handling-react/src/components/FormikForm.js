import { Formik, Form, Field, ErrorMessage } from "formik";

export default function FormikForm() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <h1 className="text-xl font-bold mb-4">Formik Form</h1>
        <Formik
          initialValues={{ name: "", email: "" }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <label className="block">Name</label>
                <Field
                  type="text"
                  name="name"
                  className="border p-2 w-full rounded"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div>
                <label className="block">Email</label>
                <Field
                  type="email"
                  name="email"
                  className="border p-2 w-full rounded"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
