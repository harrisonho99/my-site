import PrimaryMenuIcon from '../Menu/Icon/inidex';
import { useCallback } from 'react';
import Box from '@material-ui/core/Box';

export default function Header() {
  const memoToggleNav = useCallback(() => {
    // toggle nav
    console.log('menu click');
  }, []);
  return (
    <Box boxShadow={3} className='h-12 w-full fixed z-30 top-0 left-0'>
      <header className='h-full w-full text-black'>
        <div
          id='nav-overlay'
          className='w-full h-full bg-gray-200 dark:bg-primary-dark backdrop-filter backdrop-saturate-200 backdrop-blur-xl absolute z-10 bg-opacity-30'
        />
        <div className='ml-5 mr-5 h-full'>
          <div className='flex w-20 h-full justify-start items-center z-20 relative bg-transparent'>
            <PrimaryMenuIcon toggleNav={memoToggleNav} />
          </div>
        </div>
      </header>
    </Box>
  );
}
