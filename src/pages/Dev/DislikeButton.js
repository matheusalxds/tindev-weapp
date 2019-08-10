import React, { useState } from 'react';
import Dislike from '../../components/UI/Icons/Dislike';
import api from '../../utils/api';

function DislikeButton(props) {
  const { meId } = props;
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    const { userId, onConfirm } = props;
    setLoading(true);
    await api.post(
      `/devs/${userId}/dislikes`,
      null,
      {
        headers: { user: meId },
      },
    ).then(() => {
      setLoading(false);
      onConfirm(userId);
    });
  }

  return (
    <button onClick={handleClick} disabled={loading}>
      <Dislike />
    </button>
  );
}

export default DislikeButton;
