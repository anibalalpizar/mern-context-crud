import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { usePostContext } from "../context/postContext";

export function PostFormPage() {
  const { createPost } = usePostContext();
  const navigate = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          title: "",
          description: "",
        }}
        validationSchema={Yup.object({
          title: Yup.string().required("Required"),
          description: Yup.string().required("Required"),
        })}
        onSubmit={async (values, actions) => {
          await createPost(values);
          navigate("/");
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Field
              name="title"
              placeholder="Title"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
            />
            <ErrorMessage
              component="p"
              className="text-red-400 text-sm"
              name="title"
            />

            <Field
              name="description"
              placeholder="Description"
              className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
            />
            <ErrorMessage
              component="p"
              className="text-red-400 text-sm"
              name="description"
            />

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
