import React from 'react';
import ItsAMatch from '../../components/UI/Icons/ItsAMatch';
import Button from '../Button/Button';

function Matched(props) {
  const { onClick, data } = props;
  return (
    <div className="matched">
      <ItsAMatch />
      <img src={data.avatar} alt={data.name} className="matched__avatar" />
      <strong>{data.name}</strong>
      <p>{data.bio}</p>
      <Button transparent uppercase md onClick={onClick}>Fechar</Button>
    </div>
  );
}

export default Matched;
