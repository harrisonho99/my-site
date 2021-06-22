import styles from '../../../styles/Balloons.module.css';
export default function Balloons() {
  return (
    <div className='w-full flex justify-center items-center absolute top-20 balloon-container'>
      <div className={`item ${styles['ballons-wrapper']}`}>
        <div className={`${styles['shape']} ${styles['purple-balloon']}`} />
        <div className={`${styles['shape']} ${styles['purple-balloon']}`} />
        <div className={`${styles['shape']} ${styles['orange-balloon']}`} />
        <div className={`${styles['shape']} ${styles['orange-balloon']}`} />
        <div className={`${styles['shape']} ${styles['red-balloon']}`} />
        <div className={`${styles['shape']} ${styles['red-balloon']}`} />
        <div className={`${styles['shape']} ${styles['blue-balloon']}`} />
        <div className={`${styles['shape']} ${styles['blue-balloon']}`} />
      </div>
    </div>
  );
}
