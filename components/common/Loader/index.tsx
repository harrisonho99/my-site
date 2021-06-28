import styles from '../../../styles/common/Loader.module.css';
import Modal from '../../common/ModalWrapper';

export default function Loader() {
  return (
    <Modal style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className='w-full h-full flex justify-center items-center'>
        <div
          className={`${styles['loader']} dark:bg-blue-900 bg-purple-100 p-2 rounded-full flex space-x-3 w-20 h-10 items-center`}
        >
          <div className='w-3 h-3 bg-indigo-800 rounded-full animate-bounce dark:bg-yellow-300' />
          <div className='w-3 h-3 bg-indigo-800 rounded-full animate-bounce dark:bg-yellow-300' />
          <div className='w-3 h-3 bg-indigo-800 rounded-full animate-bounce dark:bg-yellow-300' />
        </div>
      </div>
    </Modal>
  );
}
