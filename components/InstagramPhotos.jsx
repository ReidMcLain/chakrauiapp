import React, { useState, useEffect } from 'react';

const InstagramPhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const accessToken = 'IGQVJWTkZACQVJtRkFINTVjOFNKVlFkUjJ6azE3SkNzeXo3S0xxaG4yNkNlTVZA3Y2ZAOVndCQlBDSENaaUZARYTBOVEtTQVFRR1ZAhWURfLTZACLXYwdXpxOXN5bXpDRXpOMFZAha0psOUlZAVzAxbVpYVnF3UQZDZD';
    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`)
      .then(response => response.json())
      .then(data => setPhotos(data.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {photos.map(photo => (
        <img key={photo.id} src={photo.media_url} alt={photo.caption} />
      ))}
    </div>
  );
};

export default InstagramPhotos;
