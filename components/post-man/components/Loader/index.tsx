import styles from '../../../../styles/common/Loader.module.css';
import Modal from '../../../common/ModalWrapper';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { hideLoader } from '../../state-manager/actions/creators';
interface Props {
  cancelButton?: boolean;
}

export default function Loader({ cancelButton }: Props) {
  let dispatch: any;
  let onCloseModal;
  if (cancelButton) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch = useDispatch();
    onCloseModal = () => {
      dispatch(hideLoader());
    };
  }

  return (
    <Modal style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className='w-full h-full flex justify-center items-center flex-col'>
        <div
          className={`${styles['loader']} dark:bg-blue-900 bg-purple-100 p-2 rounded-full flex space-x-3 w-20 h-10 items-center transform -translate-y-10`}
        >
          <div className='w-3 h-3 bg-indigo-800 rounded-full animate-bounce dark:bg-yellow-300' />
          <div className='w-3 h-3 bg-indigo-800 rounded-full animate-bounce dark:bg-yellow-300' />
          <div className='w-3 h-3 bg-indigo-800 rounded-full animate-bounce dark:bg-yellow-300' />
        </div>
        {cancelButton ? (
          <div className='h-10 flex justify-center items-center'>
            <Button
              size='small'
              variant='contained'
              color='primary'
              onClick={onCloseModal}
              className='cursor-pointer'
              style={{ background: 'rgba(55, 48, 163)' }}
            >
              Cancel
            </Button>
          </div>
        ) : null}
      </div>
    </Modal>
  );
}
