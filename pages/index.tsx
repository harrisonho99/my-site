import Balloons from '../components/common/Balloons';
export default function Home() {
  return (
    <>
      <Balloons />
      <main>
        <div className='text-center mt-20'>
          <h1 className='text-6xl font-bold mb-10'>Hello I&apos;m Harrison</h1>
          <h2 className='text-2xl font-semibold'>
            Check out my{' '}
            <a
              className='transition duration-300 ease-in-out text-blue-600 hover:text-purple-600 transform hover:-translate-y-1 hover:scale-110 '
              href='https://github.com/hotsnow199'
            >
              github
            </a>
          </h2>
        </div>
      </main>
    </>
  );
}
