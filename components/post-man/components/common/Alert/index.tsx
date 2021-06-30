import Alert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { memo, useState, useEffect, useRef } from 'react';
import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar';
import { closeAlert } from '../../../state-manager/actions/creators';
import { TransitionProps } from '@material-ui/core/transitions';
import { Slide, Grow } from '@material-ui/core';

export interface State extends SnackbarOrigin {
  open: boolean;
  duration: number;
}

function GrowTransition(props: TransitionProps) {
  return <Grow {...props} />;
}

function SimpleAlert() {
  const { severity, variant, message, show } = useSelector((state: any) => state.render.alert);
  const dispatch = useDispatch();
  const [state, setState] = useState<State>({
    open: show,
    vertical: 'top',
    horizontal: 'right',
    duration: 2000,
  });

  useEffect(() => {
    if (state.open !== show) {
      setState((current) => ({ ...current, open: show }));
    }
  }, [show, state.open]);
  const handleClose = () => {
    dispatch(closeAlert());
  };

  const { vertical, horizontal, open } = state;

  return (
    <Snackbar
      anchorOrigin={{ vertical, horizontal }}
      open={open}
      onClose={handleClose}
      key={vertical + horizontal}
      autoHideDuration={state.duration}
      TransitionComponent={Slide}
    >
      <Alert variant={variant} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}
export default memo(SimpleAlert);
