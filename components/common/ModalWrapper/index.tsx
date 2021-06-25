import { ReactElement, useEffect, useRef } from 'react';

type Props = {
  children: ReactElement;
  onHideModal?: () => void;
  [restProps: string]: any;
};

export default function ModalWrapper({
  children,
  onHideModal,
  ...restProps
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
      {...restProps}
      onClick={() => {
        if (typeof onHideModal === 'function') onHideModal();
      }}
      className={`fixed top-0 left-0 z-50 w-screen h-screen bg-opacity-75 `}
    >
      {children}
    </div>
  );
}
