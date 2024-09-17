'use client';

import { IconShare3 } from '@tabler/icons-react';
import { showNotification } from '@mantine/notifications';

const ShareButton = () => {
  const handleClick = () => {
    const url = 'https://thetahirabbas.netlify.app/';
    
    navigator.clipboard.writeText(url).then(() => {
      // Show a Mantine notification
      showNotification({
        title: 'Copied!',
        message: 'The website URL has been copied to your clipboard. Feel free to share it!',
        color: '#FBC418',
        autoClose: 5000,
        zIndex: 9999,
      });
    }).catch((error) => {
      console.error('Failed to copy URL: ', error);
    });
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-4 right-4 rounded-full bg-yellow-500 p-4 font-semibold text-white shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 z-50"
        aria-label="Share"
      >
        <IconShare3 size={24} />
      </button>
    </>
  );
};

export default ShareButton;
