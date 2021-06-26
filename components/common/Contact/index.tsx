import { Twitter } from '@material-ui/icons';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contact() {
  return (
    <div className='h-full flex justify-start w-42'>
      <div className='w-12'>
        <a href='https://twitter.com/Harisson_ho'>
          <Twitter
            className='text-blue-800 dark:text-gray-300'
            fontSize='default'
          />
        </a>
      </div>
      <div className='w-12'>
        <a href='mailto: honhathoang1999@gmail.com'>
          <AlternateEmailIcon
            className='text-blue-800 dark:text-gray-300'
            fontSize='default'
          />
        </a>
      </div>
      <div className='w-12'>
        <a href='https://github.com/hotsnow199'>
          <GitHubIcon
            className='text-blue-800 dark:text-gray-300'
            fontSize='default'
          />
        </a>
      </div>
    </div>
  );
}
