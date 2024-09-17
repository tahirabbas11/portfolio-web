'use client';

import { IconShare3 } from '@tabler/icons-react';
import { showNotification } from '@mantine/notifications';

const ShareButton = () => {
  const handleClick = () => {
    const url = 'https://thetahirabbas.netlify.app/';

    if (navigator.share) {
      // Use Web Share API if supported
      navigator.share({
        title: 'Check this out!',
        text: 'I found this amazing website and thought you might enjoy it:',
        url: url,
      })
      .then(() => {
        // Show a Mantine notification on successful share
        showNotification({
          title: 'Awesome!',
          message: 'You\'ve successfully shared the website! Your friends will love it.',
          color: 'teal',
          autoClose: 5000,
          zIndex: 9999,
        });
      })
      .catch((error) => {
        console.error('Failed to share: ', error);
        showNotification({
          title: 'Action Dismissed!',
          message: 'You dismissed the action. Feel free to try again when ready!',
          color: 'red',
          autoClose: 5000,
          zIndex: 9999,
        });
      });
    } else {
      // Fallback to clipboard copy if Web Share API is not supported
      navigator.clipboard.writeText(url).then(() => {
        showNotification({
          title: 'URL Copied!',
          message: 'Share it with your friends and spread the word!',
          color: '#FBC418',
          autoClose: 5000,
          zIndex: 9999,
        });
      }).catch((error) => {
        console.error('Failed to copy URL: ', error);
        showNotification({
          title: 'Action Dismissed!',
          message: 'You dismissed the action. Feel free to try again when ready!',
          color: 'red',
          autoClose: 5000,
          zIndex: 9999,
        });
      });
    }
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
