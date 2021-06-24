import { PureComponent } from 'react';
import RoundedAvatar from '../common/Avatar/RoundedAvatar';
export default class Main extends PureComponent {
  render = () => {
    return (
      <main>
        <div className='text-center mt-20 dark:text-purple-100'>
          <div className='flex justify-center mb-6'>
            <RoundedAvatar />
          </div>
          <h1 className='text-6xl font-bold mb-10 '>Hello I&apos;m Harrison</h1>
          <h2 className='text-2xl font-semibold dark:text-purple-50'>
            Check out my{' '}
            <a
              className='transition duration-300 ease-in-out text-blue-600 hover:text-purple-600 transform'
              href='https://github.com/hotsnow199'
            >
              github
            </a>
          </h2>
        </div>
      </main>
    );
  };
}
