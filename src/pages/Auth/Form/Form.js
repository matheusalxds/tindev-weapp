import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../components/Button/Button';

function Form(props) {
  const { onSubmit } = props;
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(username);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite seu usuário do GitHub"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <Button danger lg type="submit">Enviar</Button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
