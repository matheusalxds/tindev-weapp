import React from 'react';
import Dislike from '../DislikeButton';
import Like from '../LikeButton';

function List(props) {
  const { data, meId, onConfirm } = props;

  return data && data.length ? (
    <ul className='list'>
      {data.map(item => (
        <li key={item.id}>
          <img src={item.avatar} alt={item.name} />
          <footer>
            <strong>{item.name}</strong>
            <p>{item.bio}</p>
          </footer>
          <div className='list__buttons'>
            <Dislike userId={item._id} meId={meId} onConfirm={onConfirm} />
            <Like userId={item._id} meId={meId} onConfirm={onConfirm} />
          </div>
        </li>
      ))}
    </ul>
  ) : <p>Nenhum Dev foi encontrado.</p>;
}

export default List;
