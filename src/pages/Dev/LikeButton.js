import React, { useState } from 'react';
import Like from '../../components/UI/Icons/Like';

import api from '../../utils/api';

function LikeButton(props) {
  const { meId } = props;
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    const { userId, onConfirm } = props;

    setLoading(true);
    await api.post(
      `/devs/${userId}/likes`,
      null,
      {
        headers: { user: meId },
      },
    ).then(() => {
      setLoading(false);
      onConfirm(userId)
    });
  }

  return (
    <button onClick={handleClick} disabled={loading}>
      <Like />
    </button>
  );
}

export default LikeButton;
