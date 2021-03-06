import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  TextInput,
} from 'react-native';
import styles from './styles';
import { Form, Field } from 'react-final-form';

export const { height, width } = Dimensions.get('window');
const CostBenefit = ({
  navigation,
  pros,
  cons,
  pw,
  cw,
  toggleModal,
  modalShown,
  modalToOpen,
  pickModal,
  addPro,
  addCon,
}) => {
  validate = values => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.weight) {
      errors.weight = 'Required';
    }
    return errors;
  };

  const required = value => (value ? undefined : 'Required Field');

  return (
    <View style={styles.container}>
      <Modal visible={modalShown} transarent={true}>
        <View style={styles.modalWrapper}>
          <View style={styles.modal}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => toggleModal(false)}
            >
              <Text style={styles.close}>x Close</Text>
            </TouchableOpacity>
            <Text style={styles.header}>
              {modalToOpen === 'Pros'
                ? 'Add Pros for Not Drinking'
                : 'Add Cons for Not Drinking'}
            </Text>
            <Form
              onSubmit={values => {
                modalToOpen === 'Pros'
                  ? addPro
                      .mutation({
                        variables: {
                          title: values.title,
                          weight: parseInt(values.weight),
                        },
                      })
                      .then(() => {
                        toggleModal(false);
                      })
                  : addCon
                      .mutation({
                        variables: {
                          title: values.title,
                          weight: parseInt(values.weight),
                        },
                      })
                      .then(() => {
                        toggleModal(false);
                      });
              }}
              render={({ handleSubmit, pristine, invalid, form }) => (
                <View>
                  <Field name="title" validate={required}>
                    {({ input, meta }) => (
                      <View style={styles.fieldContainer}>
                        <TextInput
                          placeholder="Describe Here"
                          {...input}
                          style={styles.field}
                        />

                        {meta.touched &&
                          meta.error && (
                            <Text style={styles.fieldError}>{meta.error}</Text>
                          )}
                      </View>
                    )}
                  </Field>
                  <Field name="weight" validate={required}>
                    {({ input, meta }) => (
                      <View style={styles.fieldContainer}>
                        <TextInput
                          placeholder="Pick a number"
                          {...input}
                          style={styles.field}
                        />

                        {meta.touched &&
                          meta.error && (
                            <Text style={styles.fieldError}>{meta.error}</Text>
                          )}
                      </View>
                    )}
                  </Field>

                  <TouchableOpacity
                    style={[
                      styles.button,
                      invalid ? styles.inactiveButton : styles.activeButton,
                    ]}
                    onPress={handleSubmit}
                    disabled={invalid ? true : false}
                  >
                    <Text style={styles.buttonText}>Submit</Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>

      <View style={styles.bar}>
        <View
          style={{
            backgroundColor: 'green',
            width: width * pw,
            height: height / 15,
          }}
        />
        <View
          style={{
            backgroundColor: 'red',
            width: width * cw,
            height: height / 15,
          }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.prosButton]}
          onPress={() => {
            pickModal('Pros');
            toggleModal();
          }}
        >
          <Text>Add Pros</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.consButton]}
          onPress={() => {
            pickModal('Cons');
            toggleModal();
          }}
        >
          <Text>Add Cons</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.header}>Pros for Not Drinking</Text>
        {pros ? (
          <ScrollView>
            {pros.map(pro => (
              <Text key={pro.id}>{`\u2022 ${pro.title}`}</Text>
            ))}
          </ScrollView>
        ) : (
          <Text>Add some pros to your costbenefit analysis</Text>
        )}
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.header}>Cons for Not Drinking</Text>
        {cons ? (
          <ScrollView>
            {cons.map(con => (
              <Text key={con.id}>{`\u2022 ${con.title}`}</Text>
            ))}
          </ScrollView>
        ) : (
          <Text>Add some cons to your costbenefit analysis</Text>
        )}
      </View>
    </View>
  );
};
export default CostBenefit;
