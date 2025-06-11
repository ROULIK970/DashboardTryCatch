import React from 'react'
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function AddProduct({products, setProducts}) {
    const navigate = useNavigate()

  return (
    <div>
      <h1>Add Product</h1>
      <Formik
        initialValues={{
          name: "",
          avatar: "",
          category: "",
          price: "",
          discount: "",
          sold: "",
          tags: "",
          description: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .min(7, "Must be 7 characters or more")
            .required("Required"),
          avatar: Yup.string()
            .url("Avatar should be in URL format")
            .required("Required"),
          description: Yup.string()
            .max(30, "Must be 30 characters or less")
            .min(7, "Must be 7 characters or more"),
        })}
        // validate={(values) => {
        //   const errors = {};
        //   if (!values.email) {
        //     errors.email = "Required";
        //   } else if (
        //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        //   ) {
        //     errors.email = "Invalid email address";
        //   }
        //   return errors;
        // }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const newProduct = {
              id: products.length + 1,
              fullName: values.name,
              avatar: values.avatar,
              category: values.category,
              price: values.price,
              discount: values.discount,
              sold: values.sold,
              tags: values.tags,
              description: values.description,
            };

            setProducts([...products, newProduct]);

            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
            navigate("/product");
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            <p>{errors.name && errors.name}</p>
            <br />
            <br />
            <label htmlFor="avatar">Image</label>
            <input
              type="text"
              name="avatar"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.avatar}
            />
            <p>{errors.avatar && errors.avatar}</p>
            <br />
            <br />
            <label htmlFor="avatar">Category</label>
            <input
              type="text"
              name="category"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.category}
            />
            <p>{errors.avatar && errors.avatar}</p>
            <br />
            <br />
            <label htmlFor="price">Price</label>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            <p>{errors.avatar && errors.avatar}</p>
            <br />
            <br />
            <label htmlFor="discount">Discount</label>
            <input
              type="text"
              name="discount"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.discount}
            />
            <p>{errors.avatar && errors.avatar}</p>
            <br />
            <br />
            <label htmlFor="sold">Sold</label>
            <input
              type="text"
              name="sold"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sold}
            />
            <p>{errors.avatar && errors.avatar}</p>
            <br />
            <br />
            <label htmlFor="tags">Tags</label>
            <input
              type="text"
              name="tags"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.tags}
            />
            <p>{errors.avatar && errors.avatar}</p>
            <br />
            <br />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
            />
            <p>{errors.description}</p>
            <br />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
