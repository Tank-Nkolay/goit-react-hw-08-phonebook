import { useDispatch } from 'react-redux';
import { Field, Formik } from 'formik';
import Notiflix from 'notiflix';
import * as yup from 'yup';
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
import { register } from 'redux/auth/operations';
// =====================

let schema = yup.object().shape({
  name: yup.string().min(3).max(20),
  email: yup.string().email(),
  password: yup.string().min(7),
});

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleFormSubmit = async (values, { resetForm }) => {
    const { error } = await dispatch(register(values));
    if (!error) {
      resetForm();
      Notiflix.Notify.success('You are registred');
      return;
    }
    Notiflix.Notify.failure(`Something went wrong, please check your data`);
  };

  return (
    <Flex bg="#cedaf2" justify="center" h="100vh" color="#0e0f69">
      <Box bg="white" p={6} rounded="md" w="300px" h="360px" mt="20px">
        <Formik
          initialValues={{
            name: '',
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
                  isInvalid={!!errors.name && touched.name}
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                    placeholder="Enter name"
                  />
                  <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>
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
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
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
