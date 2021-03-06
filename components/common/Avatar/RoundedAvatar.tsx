import Image from 'next/image';
import ModalWrapper from '../ModalWrapper';
import { useState } from 'react';
import ScaleY from '../TransitionWrapper/ScaleY';
import styles from '../../../styles/common/Avartar.module.css';
export default function RoundedAvatar() {
  const [showModal, setShowModal] = useState(false);
  const onHideModal = () => {
    setShowModal(() => false);
  };
  const onShowModal = () => {
    setShowModal(() => true);
  };
  return (
    <>
      <ModalWrapper
        onHideModal={onHideModal}
        style={{
          backgroundColor: 'rgba(10,10,10,0.8)',
          display: showModal ? 'block' : 'none',
        }}
      >
        <div
          className={`w-10/12 m-auto h-full flex justify-center items-center transition-transform duration-300 transform -translate-y-20`}
          style={{ maxWidth: 700, minWidth: 300 }}
        >
          <ScaleY>
            <Image
              priority
              onClick={(e) => {
                e.stopPropagation();
              }}
              width={500}
              height={500}
              src='/icon/maskable_icon_x512.png'
              alt='Harrison Ho'
            />
          </ScaleY>
        </div>
      </ModalWrapper>

      <div
        className='w-40 h-40 rounded-full overflow-hidden cursor-pointer'
        onClick={onShowModal}
        id={styles['logo']}
      >
        <Image
          src='/icon/maskable_icon_x512.png'
          width={300}
          height={300}
          quality={100}
          alt={'Harrison Ho'}
          draggable={false}
          priority
        />
      </div>
    </>
  );
}
