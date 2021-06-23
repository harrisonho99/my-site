import { PureComponent, ChangeEvent } from 'react';
import styles from '../../styles/common/Switch.module.css';
import { themePreference } from '../../context/prefer-theme/schema/type';
export default class ToggleTheme extends PureComponent<
  any,
  { check: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { check: false };
  }
  onSwitchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked;
    this.setState(() => ({ check: value }), this.toogleHTMLClass);
  };
  toogleHTMLClass = () => {
    const htmlElement = document.querySelector('html');
    const light: themePreference = 'light';
    const dark: themePreference = 'dark';
    if (htmlElement && htmlElement.classList.contains(dark)) {
      htmlElement.classList.remove(dark);
      htmlElement.classList.add(light);
    } else if (htmlElement) {
      htmlElement.classList.remove(light);
      htmlElement.classList.add(dark);
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
}
