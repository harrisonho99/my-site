import { PureComponent } from 'react';
import { Formik, Form, FormikValues, FormikHelpers, FormikProps } from 'formik';
import SearchBar from '../SearchBar';
import RequestMenuBar from '../RequestMenuBar';
import { request } from '../../http/client';
import { connect, MapStateToProps } from 'react-redux';
import type { FormValues, Options, Props } from './schema/type';
import { InitialFormValue } from './schema';
import { isBrowser } from '../../../../utils/isBrowser';

class FormWrapper extends PureComponent<Props> {
  public options: any[];

  constructor(props: any) {
    super(props);
    this.options = this.props.options;
  }

  getInitialFornValue = () => {
    return new InitialFormValue(this.options[0], '');
  };

  onFormSubmit = (values: FormikValues, actions: FormikHelpers<FormValues>) => {
    console.log({ values });
    request;
  };

  render = () => {
    return (
      <Formik
        onSubmit={this.onFormSubmit}
        initialValues={this.getInitialFornValue()}
      >
        {(formikProps: FormikProps<FormValues>) => {
          if (isBrowser()) {
            (window as any).formProps = formikProps;
          }
          return (
            <Form>
              <SearchBar />
              <div className='mt-6'>
                <RequestMenuBar />
              </div>
            </Form>
          );
        }}
      </Formik>
    );
  };
}

const mapStateToProps: MapStateToProps<any, any> = (state: any) => ({
  options: state.methods.options,
});

export default connect(mapStateToProps)(FormWrapper);
