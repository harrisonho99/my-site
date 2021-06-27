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
        spaceBetween={20}
        slidesPerView={3}
        className='flex flex-row w-full'
      >
        {listMenu.map((item) => (
          <SwiperSlide key={item.value}>
            <div
              className={`text-gray-700 dark:text-gray-100 text-center text-lg font-semibold border-transparent transform transition-all duration-200 ${
                currentMenuShow === item.value
                  ? 'text-blue-800 dark:text-blue-100 border-blue-400  border-b-2'
                  : ''
              }`}
              onClick={() => {
                onMenuClick(item.value);
              }}
              role='button'
            >
              {item.label}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
