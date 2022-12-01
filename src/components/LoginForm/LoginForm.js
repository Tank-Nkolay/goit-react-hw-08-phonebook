import { Field, Formik } from 'formik';
import * as yup from 'yup';
import Notiflix from 'notiflix';
// ===== styled ========
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack,
} from '@chakra-ui/react';
// =====================
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// =====================

let schema = yup.object().shape({
  email: yup.string().email().required('Please, enter email'),
  password: yup
    .string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export function LoginForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = async (values, { resetForm }) => {
    const { error } = await dispatch(logIn(values));
    if (!error) {
      resetForm();
      Notiflix.Notify.success('You are logged in');
      return;
    }
    Notiflix.Notify.failure(`Something went wrong, please check your data`);
  };

  return (
    <Flex bg="#cedaf2" justify="center" h="100vh" color="#0e0f69">
      <Box bg="white" p={6} rounded="md" w="300px" h="270px" mt="20px">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={schema}
          onSubmit={handleFormSubmit}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl
                  isRequired
                  isInvalid={!!errors.email && touched.email}
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                    placeholder="Enter email"
                  />
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={!!errors.password && touched.password}
                >
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    variant="filled"
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>

                <Button type="submit" colorScheme="telegram" width="full">
                  Log In
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
