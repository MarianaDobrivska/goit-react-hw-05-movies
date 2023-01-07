import { Formik, Field, Form } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  return (
    <>
      <Formik
        initialValues={{ query: ' ' }}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values.query.trim());
          resetForm();
        }}
      >
        <Form>
          <Field
            autoComplete="off"
            autoFocus
            placeholder="Search movie"
            name="query"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};
