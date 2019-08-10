import React from 'react';
import css from './Login.module.scss';

import Form from '../Form/Form';
import Logo from '../../../components/UI/Icons/Logo';

const Login = (props) => {
  const { onSubmit } = props;
  return (
    <div className={css.login}>
      <Logo />
      <Form onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
