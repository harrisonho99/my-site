import { LIST_ROUTER } from '../../../../store/route';
import { IconButton } from '@material-ui/core';
import ModalWrapper from '../../ModalWrapper';
import { memo, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { v4 } from 'uuid';
import ToggleTheme from '../../ToggleTheme';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useRouter } from 'next/router';
import Contact from '../../Contact';

type Props = {
  show: boolean;
  setShow: (v: boolean) => void;
};

function Nav({ setShow, show }: Props) {
  const [navWidth, setNavWidth] = useState(0);
  const navRef = useRef(null);
  const isClosing = useRef(false);
  const Router = useRouter();
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setNavWidth(() => 300);
      }, 100);
    }
  }, [show]);
  useEffect(() => {
    Router.events.on('routeChangeComplete', onHideModal);
    return () => {
      Router.events.off('routeChangeComplete', onHideModal);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onHideModal() {
    if (!isClosing.current) {
      isClosing.current = true;
      const node: HTMLElement = navRef.current!;
      setNavWidth(0);
      node.addEventListener('transitionend', () => {
        setShow(false);
        isClosing.current = false;
      });
    }
  }
  if (!show) return null;
  return (
    <ModalWrapper
      onHideModal={onHideModal}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <nav
        ref={navRef}
        className={`h-screen relative transform transition-all duration-500 overflow-hidden`}
        style={{ width: navWidth }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className='w-full h-screen bg-gray-200 dark:bg-primary-dark backdrop-filter backdrop-saturate-200 backdrop-blur-xl absolute z-10 bg-opacity-90'
          id='nav-overlay'
        />

        <div className='relative z-20 top-0 left-0 bg-transparent text-black dark:text-gray-100 h-full w-full p-6 pb-2'>
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
              <li className='mt-8 font-base text-xl' key={v4()}>
                <Link href={item.route}>
                  <a
                    className={`${
                      typeof window !== 'undefined' &&
                      window.location.pathname === item.route
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
          <div className='h-10 fixed bottom-14 right-0 w-full pl-6'>
            <Contact />
          </div>
        </div>
      </nav>
    </ModalWrapper>
  );
}
export default memo(Nav);
