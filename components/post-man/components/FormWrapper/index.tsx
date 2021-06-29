import { PureComponent } from 'react';
import { Formik, Form, FormikValues, FormikHelpers, FormikProps } from 'formik';
import SearchBar from '../SearchBar';
import RequestMenuBar from '../RequestMenuBar';
import { connect, MapStateToProps } from 'react-redux';
import type { FormValues, Options, Props } from './schema/type';
import { InitialFormValue } from './schema';
import { isBrowser } from '../../../../utils/isBrowser';
import { request } from '../../http/client';
import {
  setLoader,
  setResponseView,
} from '../../state-manager/actions/creators';
import { MapDispatchToProps } from 'react-redux';

class FormWrapper extends PureComponent<Props> {
  public options: any[];
  private cleanUp: null | Function = null;
  constructor(props: any) {
    super(props);
    this.options = this.props.options;
  }

  getInitialFornValue = () => {
    return new InitialFormValue(
      this.options[0],
      'https://jsonplaceholder.typicode.com/posts'
    );
  };

  onFormSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormValues>
  ) => {
    const { turnOnLoader, setResponseView } = this.props;
    turnOnLoader();
    (window as any).setLoader = setLoader;
    const baseURL = values.baseURL;
    const method = values.method.value;
    request.setBaseURL(baseURL);
    const response = await (request as any)[method]('');
    setResponseView(response.data);
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

  componentDidMount = () => {
    const { turnOffLoader } = this.props;
    this.cleanUp = request.useSubscribe(turnOffLoader);
  };

  componentWillUnmount = () => {
    if (typeof this.cleanUp === 'function') this.cleanUp();
  };
}

const mapStateToProps: MapStateToProps<any, any> = (state: any) => ({
  options: state.methods.options,
});

const mapDispatchToProps: MapDispatchToProps<any, any> = (dispatch: any) => ({
  turnOffLoader: () => dispatch(setLoader(false)),
  turnOnLoader: () => dispatch(setLoader(true)),
  setResponseView: (data: any) => dispatch(setResponseView(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FormWrapper);
