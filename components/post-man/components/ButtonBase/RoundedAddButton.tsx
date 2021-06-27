import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

type Props = {
  onClick: () => void;
};

export default function RoundedAddButton({ onClick }: Props) {
  return (
    <Fab size='small' color='secondary' aria-label='add' onClick={onClick}>
      <AddIcon className='text-gray-900 dark:text-gray-200' />
    </Fab>
  );
}
