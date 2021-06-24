import { ReactElement, useEffect, useRef } from 'react';

type Props = {
  children: ReactElement;
  onHideModal: () => void;
};

export default function ModalWrapper({ children, onHideModal }: Props) {
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
      className={`fixed top-0 left-0 z-50 w-screen h-screen`}
      style={{ background: `rgba(0, 0, 0, 0.75)` }}
    >
      {children}
    </div>
  );
}
