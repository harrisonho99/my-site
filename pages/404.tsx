import Balloons from '../components/common/Balloons';
export default function NotFound() {
  return (
    <>
      <Balloons />
      <main className='w-full h-screen flex justify-center items-center'>
        <h2 className='text-3xl transform -translate-y-14 dark:text-grey-200'>
          <b>
            <a className='text-pink-700'>404 </a>| Your page you&apos;re looking for, not found!
          </b>
        </h2>
      </main>
    </>
  );
}
