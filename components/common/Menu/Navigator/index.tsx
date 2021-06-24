import { LIST_ROUTER } from '../../../../store/route';
import { IconButton } from '@material-ui/core';
import ModalWrapper from '../../ModalWrapper';
import { memo, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { v4 } from 'uuid';
import ToggleTheme from '../../ToggleTheme';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
type Props = {
  show: boolean;
  setShow: (v: boolean) => void;
};

function Nav({ setShow, show }: Props) {
  const [navWidth, setNavWidth] = useState(0);
  const navRef = useRef(null);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setNavWidth(() => 300);
      }, 100);
    }
  }, [show]);
  const onHideModal = () => {
    const node: HTMLElement = navRef.current!;
    setNavWidth(0);
    node.addEventListener('transitionend', () => {
      setShow(false);
    });
  };
  if (!show) return null;
  return (
    <ModalWrapper onHideModal={onHideModal}>
      <nav
        ref={navRef}
        className={`h-full relative transform transition-all duration-500 overflow-hidden`}
        style={{ width: navWidth }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className='w-full h-full bg-gray-200 dark:bg-primary-dark backdrop-filter backdrop-saturate-200 backdrop-blur-xl absolute z-10 bg-opacity-90'
          id='nav-overlay'
        />

        <div className='relative z-20 top-0 left-0 bg-transparent text-black dark:text-gray-100 h-full w-full p-6'>
          <div className='flex w-full'>
            <div>
              <ToggleTheme />
            </div>
            <div className='flex flex-1 items-center justify-end'>
              <IconButton
                className='focus-within:outline-none bg-gray-700 bg-opacity-30'
                onClick={onHideModal}
              >
                <ArrowBackIosIcon className='text-gray-900 dark:text-gray-100 transform translate-x-1' />
              </IconButton>
            </div>
          </div>
          <ul>
            {LIST_ROUTER.map((item) => (
              <li className='mt-10 font-semibold text-xl' key={v4()}>
                <Link href={item.route}>
                  <a
                    className={`${
                      window && window.location.pathname === item.route
                        ? 'text-blue-500 dark:text-pink-500'
                        : ''
                    }`}
                  >
                    {item.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </ModalWrapper>
  );
}
export default memo(Nav);
