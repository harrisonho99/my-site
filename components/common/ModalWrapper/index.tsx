import { ReactElement, useEffect, useRef } from 'react';

type Props = {
  children: ReactElement;
  opacity?: number;
  onHideModal: () => void;
};

export default function ModalWrapper({
  children,
  opacity = 70,
  onHideModal,
}: Props) {
  const count = useRef(0);
  useEffect(() => {
    if (!count.current) {
      document.body.style.overflow = 'hidden';
      ++count.current;
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, []);

  return (
    <div
      onClick={onHideModal}
      className={`bg-black fixed top-0 left-0 bg-opacity-${opacity} z-50 w-screen h-screen`}
    >
      {children}
    </div>
  );
}
