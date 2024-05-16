import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Input } from "./../../Components";
import { Button } from "./../../../../Components";

export const RegisterUserForm = () => {
  const initialValues = {
    name: "",
    email: "",
    membership: "",
    phoneNumber: "",
    company: "",
  };

  const signupSchema = Yup.object().shape({
    name: Yup.string(),
    email: Yup.string().email("Invalid Email"),
    membership: Yup.string(),
    phoneNumber: Yup.string(),
    company: Yup.string(),
  });

  return (
    <div className="mx-4 h-full bg-white rounded-lg">
      <div className="p-6">
        <Formik
          initialValues={initialValues}
          validationSchema={signupSchema}
          onSubmit={(values) => console.log(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                error={errors.name && touched.name ? true : false}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email Address"
                error={errors.email && touched.email ? true : false}
              />
              {/* Dropdowm */}
              <Input
                type="text"
                name="membership"
                placeholder="membership"
                error={errors.membership && touched.membership ? true : false}
              />
              <Input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                error={errors.phoneNumber && touched.phoneNumber ? true : false}
              />
              <Input
                type="text"
                name="company"
                placeholder="Company"
                error={errors.company && touched.company ? true : false}
              />
              <div className="flex justify-center">
                <Button
                  backgroud="bg-brandeis-blue"
                  children="Get on the list"
                  textColor="text-white"
                  to="/sign-up"
                  type="submit"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
