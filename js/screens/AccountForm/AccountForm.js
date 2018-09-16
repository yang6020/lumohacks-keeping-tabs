import React, { Fragment } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Form, Field } from 'react-final-form';
import AccountInput from '../../components/AccountInput';
import styles from './styles';
import { validateLogin, validateSignup } from './helpers/validation';
import LoadingIndicator from '../../components/LoadingIndicator';
import { addUser } from '../../config/models';

const AccountForm = ({ formState, toggleForm, signup, login, navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/Logo.jpg')}
      />
      {(login.loading || signup.loading) && <LoadingIndicator />}
      <Form
        onSubmit={
          formState
            ? values => {
              signup
                .mutation({ variables: { ...values } })
                .then(res => {
                  addUser(
                    res.data.signupUser.id,
                    res.data.signupUser.token
                  )
                }
                )
                .then(() => navigation.navigate('CostBenefit'))
                .catch(err => err);
            }
            : values => {
              login
                .mutation({ variables: { ...values } })
                .then(res =>
                  addUser(
                    res.data.authenticateUser.id,
                    res.data.authenticateUser.token
                  )
                )
                .then(() => navigation.navigate('Calendar'))
                .catch(err => err);
            }
        }
        validate={formState ? validateSignup : validateLogin}
        render={({ handleSubmit }) => (
          <View style={styles.form}>
            <Field name="email">
              {({ input, meta }) => (
                <Fragment>
                  <AccountInput
                    input={input}
                    placeholder={(meta.touched && meta.error) || 'Email'}
                    invalid={meta.touched && meta.error}
                  />
                </Fragment>
              )}
            </Field>
            <Field name="password">
              {({ input, meta }) => (
                <Fragment>
                  <AccountInput
                    input={input}
                    placeholder={(meta.touched && meta.error) || 'Password'}
                    invalid={meta.touched && meta.error}
                    password
                  />
                </Fragment>
              )}
            </Field>
            {formState ? (
              <Fragment>
                <Field name="verifyPassword">
                  {({ input, meta }) => (
                    <Fragment>
                      <AccountInput
                        input={input}
                        placeholder={
                          (meta.touched && meta.error) || 'Re-enter Password'
                        }
                        invalid={meta.touched && meta.error}
                        password
                      />
                      {meta.error &&
                        meta.touched && (
                          <Text style={[styles.error, styles.signupError]}>
                            {meta.error}
                          </Text>
                        )}
                    </Fragment>
                  )}
                </Field>
                {signup.error && (
                  <Text style={[styles.error, styles.signupError]}>
                    {signup.error.graphQLErrors[0].functionError}
                  </Text>
                )}
              </Fragment>
            ) : (
                <Fragment>
                  {login.error && (
                    <Text style={[styles.error, styles.loginError]}>
                      {login.error.graphQLErrors[0].functionError}
                    </Text>
                  )}
                </Fragment>
              )}
            {formState ? (
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Next</Text>
              </TouchableOpacity>
            ) : (
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
              )}
          </View>
        )}
      />
      {!formState ? (
        <View style={styles.footer}>
          <Text style={styles.text}>Don't have an account?</Text>
          <View style={styles.actions}>
            <TouchableOpacity onPress={toggleForm}>
              <Text style={[styles.text, styles.link]}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default AccountForm;
