import { PureComponent } from 'react';
import { Formik, Form, FormikValues, FormikHelpers, FormikProps } from 'formik';
import SearchBar from '../SearchBar';
import RequestMenuBar from '../RequestMenuBar';
import { connect, MapStateToProps } from 'react-redux';
import type { FormValues, Props } from './schema/type';
import { InitialFormValue } from './schema';
import { isBrowser } from '../../../../utils/isBrowser';
import { request } from '../../http/client';
import { showLoader, hideLoader, setResponseView } from '../../state-manager/actions/creators';
import { MapDispatchToProps } from 'react-redux';

class FormWrapper extends PureComponent<Props> {
  public options: any[];
  constructor(props: any) {
    super(props);
    this.options = this.props.options;
  }

  getInitialFornValue = () => {
    return new InitialFormValue(this.options[0], 'https://jsonplaceholder.typicode.com/posts');
  };

  onFormSubmit = async (values: FormikValues, actions: FormikHelpers<FormValues>) => {
    const { showLoader, hideLoader, setResponseView } = this.props;
    showLoader();
    (window as any).hideLoader = hideLoader;
    const baseURL = values.baseURL;
    const method = values.method.value;
    request.setBaseURL(baseURL);
    const response = await (request as any)[method]('');
    hideLoader();
    setResponseView(response.data);
  };

  render = () => {
    return (
      <Formik onSubmit={this.onFormSubmit} initialValues={this.getInitialFornValue()}>
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

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  showLoader: () => dispatch(showLoader()),
  hideLoader: () => dispatch(hideLoader()),
  setResponseView: (data: any) => dispatch(setResponseView(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);
