import React, { useEffect, useState } from 'react';
import { withRouter, Link } from 'react-router-dom';
import io from 'socket.io-client';

import Main from '../../components/Main/Main';
import Logo from '../../components/UI/Icons/Logo';
import Loading from '../../components/Loading/Loading';
import Matched from '../../components/Matched/Matched';

import List from './List/List';

import api from '../../utils/api';

function Dev(props) {
  const { params: { id } } = props.match;
  const [data, setData] = useState([]);
  const [matchDev, setMatchDev] = useState(null);
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

  useEffect(() => {
    const socket = io('http://localhost:3050', { query: { user: id } });

    socket.on('match', dev => {
      setMatchDev(dev);
      console.log('DEU MATCH COM ', dev);
    });

  }, [id]);

  function onConfirm(id) {
    setData(data.filter(item => item._id !== id));
  }

  if (loading) return <Loading />;

  return (
    <Main>
      <Link to="/">
        <Logo />
      </Link>
      <List data={data} meId={id} onConfirm={onConfirm} />
      {matchDev && <Matched data={matchDev} onClick={() => setMatchDev(false)}/>}
    </Main>
  );
}

export default withRouter(Dev);
