import { useState, ChangeEvent, useEffect } from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
export default function TextField() {
  const [input, setInput] = useState('');

  const [showClearInput, setShowClearInput] = useState(false);

  useEffect(() => {
    if (!showClearInput && input.length) {
      setShowClearInput(() => true);
    } else if (showClearInput && !input.length) {
      setShowClearInput(() => false);
    }
  }, [input.length, showClearInput]);

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(() => e.target.value);
  };

  const onClearInput = () => {
    setInput(() => '');
  };
  return (
    <div className='w-full relative'>
      <input
        type='text'
        className='w-full pl-3 pr-8 rounded-md h-10 bg-gray-200 shadow-lg hover:bg-gray-100 focus:bg-gray-50 transform transition-all duration-300 text-indigo-900 dark:bg-gray-800 dark:text-gray-200'
        placeholder='URL'
        value={input}
        onChange={onInputChange}
      />
      {showClearInput ? (
        <div className='w-10 h-10 absolute flex justify-center items-center right-0 top-0'>
          <IconButton
            aria-label='clear'
            className='outline-none appearance-none'
            size='small'
            style={{ outline: 'none' }}
            onClick={onClearInput}
          >
            <CloseIcon className='text-indigo-600' />
          </IconButton>
        </div>
      ) : null}
    </div>
  );
}
