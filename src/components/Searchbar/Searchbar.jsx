import { Formik, Field, Form } from 'formik';
import { FcSearch } from 'react-icons/fc';
import PropTypes from 'prop-types';
import s from './Searchbar.module.css';

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
        <Form className={s.form}>
          <Field
            as="input"
            className={s.input}
            autoComplete="off"
            placeholder="Search movie"
            name="query"
            autoFocus
          />
          <button type="submit" className={s.button}>
            {<FcSearch />}
          </button>
        </Form>
      </Formik>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
