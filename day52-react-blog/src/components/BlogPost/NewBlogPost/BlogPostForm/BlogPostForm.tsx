import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { Fade, Modal } from "@material-ui/core";
import { Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import SubmitButton from "../../../buttons/SubmitButton";
import TextArea from "../../../_shared/TextArea";
import CustomField from "../../../_shared/CustomField";
import { NewFormValues } from "./BlogPostFormContainer";

interface FormProps {
  classes: {
    modal: any;
    paper: any;
  };
  open: boolean;
  handleClose: () => void;
  newBlogPostValues: {
    title: string;
    body: string;
    image: string;
  };
  onSubmit: (values: NewFormValues) => void;
  newBlogPostValidation: any;
}

export default function BlogPostForm({
  classes,
  open,
  handleClose,
  newBlogPostValues,
  onSubmit,
  newBlogPostValidation,
}: FormProps) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="transition-modal-title">Create New BlogPost</h2>
          <div id="transition-modal-description" className="new-blog-post">
            <Formik
              initialValues={newBlogPostValues}
              onSubmit={onSubmit}
              validationSchema={newBlogPostValidation}
            >
              {({ submitForm, setSubmitting, isSubmitting, resetForm }) => (
                <Form className="login__form new-blog-post__form">
                  <CustomField
                    component={TextField}
                    name="title"
                    label="Title"
                  />
                  <CustomField
                    component={TextField}
                    label="Image Url"
                    name="image"
                  />
                  <CustomField
                    component={TextArea}
                    label="Type something..."
                    name="body"
                  />
                  <div className="btn-container">
                    <SubmitButton
                      submitting={isSubmitting}
                      setSubmitting={setSubmitting}
                      onClick={submitForm}
                      resetForm={resetForm}
                    >
                      Create
                    </SubmitButton>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}
