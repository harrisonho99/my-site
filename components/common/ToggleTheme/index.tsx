import { PureComponent, ChangeEvent } from 'react';
import styles from '../../../styles/common/Switch.module.css';
import { themePreference } from '../../../context/prefer-theme/schema/type';
export default class ToggleTheme extends PureComponent<
  any,
  { check: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { check: true };
  }
  onSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    this.setState(() => ({ check: value }), this.toogleHTMLClass);
  };
  light: themePreference = 'light';
  dark: themePreference = 'dark';

  toogleHTMLClass = () => {
    const htmlElement = document.querySelector('html');
    if (htmlElement && htmlElement.classList.contains(this.dark)) {
      htmlElement.classList.remove(this.dark);
      htmlElement.classList.add(this.light);
    } else if (htmlElement) {
      htmlElement.classList.remove(this.light);
      htmlElement.classList.add(this.dark);
    }
  };
  render = () => {
    const { check } = this.state;
    return (
      <div>
        <label className={styles['switch']}>
          <input
            type='checkbox'
            checked={check}
            onChange={this.onSwitchChange}
            className={styles['toggle-theme']}
          />
          <span
            className={`${styles['slider']} ${styles['round']} flex justify-between text-xl`}
          >
            <span className='select-none m-auto'>🌜</span>
            <span className='select-none m-auto'>🌞 </span>
          </span>
        </label>
      </div>
    );
  };
  componentDidMount = () => {
    const htmlElement = document.querySelector('html')!;
    this.setState(() => ({
      check: htmlElement.classList.contains(this.dark) ? true : false,
    }));
  };
}
