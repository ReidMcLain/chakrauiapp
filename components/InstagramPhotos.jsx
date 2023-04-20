import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const InstagramPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const accessToken = router?.query?.INSTAGRAM_ACCESS_TOKEN || process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!accessToken) {
      console.error('Instagram access token not found');
      return;
    }

    fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`)
      .then(response => response.json())
      .then(data => setPhotos(data.data))
      .catch(error => console.error(error));
  }, [router]);

  return (
    <div>
      {photos.map(photo => (
        <img key={photo.id} src={photo.media_url} alt={photo.caption} />
      ))}
    </div>
  );
};

export default InstagramPhotos;