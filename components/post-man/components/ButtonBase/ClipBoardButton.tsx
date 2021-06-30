import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { useDispatch } from 'react-redux';
import { openAlert } from '../../state-manager/actions/creators';
import Tooltip from '@material-ui/core/Tooltip';

interface Props {
  data: string;
}

export default function ClipBoardButton({ data = '' }: Props) {
  const dispatch = useDispatch();
  const onCopyButtonClick = () => {
    try {
      const el = document.createElement('textarea');
      el.value = data.replace(/\\/g, '');
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      dispatch(openAlert({ severity: 'success', message: 'Copy to clipboard success!' }));
    } catch (error) {
      dispatch(openAlert({ severity: 'error', message: 'Can not copy to clipboard!' }));
    }
  };

  return (
    <Tooltip title='Copy to clipboard'>
      <IconButton
        style={{ padding: 10, width: 40, height: 40 }}
        aria-label='Copy to clipboard'
        onClick={onCopyButtonClick}
        size='small'
      >
        <FileCopyIcon style={{ width: 20, height: 20 }} />
      </IconButton>
    </Tooltip>
  );
}
