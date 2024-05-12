import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { usePostContext } from "../context/postContext";

export function PostFormPage() {
  const { createPost, getPost, updatePost } = usePostContext();
  const navigate = useNavigate();
  const params = useParams();

  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    (async (_) => {
      if (params.id) {
        const post = await getPost(params.id);
        console.log(post);
        setPost(post);
      }
    })();
  }, [params.id]);

  return (
    <div className="flex items-center justify-center">
      <div className="bg-zinc-800 p-10 shadow-md shadow-black">
        <header className="flex justify-between items-center py-4 text-white">
          <h3 className="text-xl">New Post</h3>
          <Link to="/" className="text-gray-400 text-sm hover:text-gray-300">
            Back
          </Link>
        </header>
        <Formik
          initialValues={post}
          validationSchema={Yup.object({
            title: Yup.string().required("Required"),
            description: Yup.string().required("Required"),
          })}
          onSubmit={async (values, actions) => {
            params.id
              ? await updatePost(params.id, values)
              : await createPost(values);
            navigate("/");
          }}
          enableReinitialize={true}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <label
                htmlFor="title"
                className="text-sm block font-bold text-gray-400 "
              >
                Title
              </label>
              <Field
                name="title"
                placeholder="Title"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full mb-4"
              ></Field>
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="title"
              />

              <label
                htmlFor="description"
                className="text-sm block font-bold text-gray-400 "
              >
                Description
              </label>
              <Field
                component="textarea"
                rows="3"
                name="description"
                placeholder="Description"
                className="px-3 py-2 focus:outline-none rounded bg-gray-600 text-white w-full"
              />
              <ErrorMessage
                component="p"
                className="text-red-400 text-sm"
                name="description"
              />

              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded mt-2 text-white focus:outline-none disabled:bg-indigo-400"
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
