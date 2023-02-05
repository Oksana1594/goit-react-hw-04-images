import { useState, useCallback } from 'react';
import styles from './search-bar.module.css';
import PropTypes from 'prop-types';
import initialState from './initialState';

const Searchbar = ({ onSubmit }) => {
   const [state, setState] = useState({...initialState})

  const handleChange = useCallback(({target}) => {
    const { name, value } = target
    setState(prevState => {
      return {...prevState, [name]: value}
    })
  }, [setState])
 
 const handleSubmit = e => {
    e.preventDefault();
    onSubmit({...state})
    setState({...initialState})
  }

  const { search } = state;
  
    return (
      <header className={styles.searchBar}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button type="submit" className={styles.button}>
          </button>

          <input
            value={search}
            onChange={handleChange}
            name="search"
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
}

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
