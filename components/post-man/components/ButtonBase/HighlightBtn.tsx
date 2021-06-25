interface Props {
  title: string;
  type?: 'submit' | 'button' | 'reset';
}

export default function HighlightBtn({ title = '', type = 'submit' }: Props) {
  return (
    <button
      className='bg-indigo-600 dark:bg-blue-700 h-10 rounded-md w-20 font-semibold text-white'
      type={type}
    >
      {title}
    </button>
  );
}
