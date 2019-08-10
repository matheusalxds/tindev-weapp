import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Main from '../../components/Main/Main';
import Logo from '../../components/UI/Icons/Logo';
import Loading from '../../components/Loading/Loading';

import List from './List/List';

import api from '../../utils/api';

function Dev(props) {
  const { params: { id } } = props.match;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: { user: id },
      });
      const { data } = response.data;
      return data;
    }

    setLoading(true);
    loadUsers().then((resp) => {
      setLoading(false);
      setData(resp);
    });
  }, [id]);

  function onConfirm(id) {
    setData(data.filter(item => item._id !== id));
  }

  if (loading) return <Loading />;

  return (
    <Main>
      <Logo />
      <List data={data} meId={id} onConfirm={onConfirm} />
    </Main>
  );
}

export default withRouter(Dev);
