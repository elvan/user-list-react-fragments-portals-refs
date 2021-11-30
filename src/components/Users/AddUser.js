import React from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();

    console.log(event);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username' />
        <label htmlFor='age'>Age (years)</label>
        <input type='number' id='age' step='1' />
        <button type='submit'>Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
