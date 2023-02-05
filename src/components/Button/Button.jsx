import styles from './button.module.css';
import PropTypes from 'prop-types';

const Button = ({ text, clickHandler }) => {
  return (
    <button onClick={clickHandler} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = {
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
};
