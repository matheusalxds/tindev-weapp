import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import api from '../../utils/api';

import Login from './Login/Login';
import Loading from '../../components/Loading/Loading';

function Auth(props) {
  const { history } = props;
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    setLoading(true);
    await api
      .post('/devs', { username: data })
      .then((response) => {
        setLoading(false);
        if (response.data) {
          const { data: { _id } } = response.data;
          history.push(`/dev/${_id}`);
        }
      });
  };

  if (loading) return <Loading />;

  return (
    <Login onSubmit={handleSubmit} />
  );
}

export default withRouter(Auth);
