import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';

const listMenu = [
  { label: 'Params', value: 'params' },
  { label: 'Authorization', value: 'authorization' },
  { label: 'Body', value: 'body' },
];

export default function RequestMenu() {
  const [currentMenuShow, setCurrentMenuShow] = useState(listMenu[0].value);

  const onMenuClick = (v: string) => {
    setCurrentMenuShow(() => v);
  };

  return (
    <div className='w-full h-12'>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        className='flex items-center flex-row w-full h-full'
      >
        {listMenu.map((item) => (
          <SwiperSlide key={item.value}>
            <div
              className={`text-center text-lg font-medium border-transparent transform transition-all duration-500 h-10 w-full flex items-center justify-center ${
                currentMenuShow === item.value
                  ? 'text-white border-b-2 rounded-lg bg-indigo-700 dark:bg-blue-700 dark:text-white shadow-lg'
                  : 'dark:text-blue-400'
              }`}
              style={{
                minWidth: 120,
              }}
              onClick={() => {
                onMenuClick(item.value);
              }}
              role='button'
            >
              <span>{item.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
