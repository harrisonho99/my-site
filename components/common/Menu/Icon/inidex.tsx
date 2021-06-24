type Props = {
  toggleNav: (v: boolean) => void;
};
export default function PrimaryMenuIcon({ toggleNav }: Props) {
  return (
    <button
      onClick={() => {
        toggleNav(true);
      }}
      className='appearance-none border-none bg-transparent outline-none focus-within:outline-none '
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        className='fill-current text-black dark:text-white'
      >
        <path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
      </svg>
    </button>
  );
}
