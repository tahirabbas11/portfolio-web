'use client';

import { useState, useEffect } from 'react';
import { IconShare3, IconClipboard, IconShare } from '@tabler/icons-react';
import { showNotification } from '@mantine/notifications';

const ShareButton = () => {
  const [showOptions, setShowOptions] = useState(false); // State to toggle buttons visibility
  const [isShareSupported, setIsShareSupported] = useState(false); // State to check Web Share API support
  const [clickTriggered, setClickTriggered] = useState(false); // State to track if button has been clicked
  const url = 'https://thetahirabbas.netlify.app/';

  useEffect(() => {
    // Check if the Web Share API is supported
    if (navigator.share) {
      setIsShareSupported(true);
    }
  }, []);

  // Hide the buttons after 3 seconds if clicked
  useEffect(() => {
    let timer;
    if (clickTriggered) {
      timer = setTimeout(() => {
        setShowOptions(false);
        setClickTriggered(false);
      }, 3000); // Hide buttons after 3 seconds
    }
    return () => clearTimeout(timer); // Clean up the timer
  }, [clickTriggered]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check out Tahir Abbas' Portfolio",
          text: "I found this amazing portfolio of Tahir Abbas, a skilled web developer:",
          url: url,
        })
        .then(() => {
          showNotification({
            title: 'Awesome!',
            message: "You've successfully shared Tahir Abbas' portfolio! Spread the word.",
            color: '#eab108',
            autoClose: 5000,
            zIndex: 9999,
          });
        })
        .catch((error) => {
          // Handle share error
        });
    } else {
      // Optionally handle Web Share API not supported
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url).then(() => {
      showNotification({
        title: 'Portfolio URL Copied!',
        message: 'Share Tahir Abbas\' portfolio with your friends and spread the word!',
        color: '#FBC418',
        autoClose: 5000,
        zIndex: 9999,
      });
    }).catch((error) => {
      // Handle copy error
    });
  };

  const toggleOptions = () => {
    setShowOptions(true);
    setClickTriggered(true);
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-center space-y-2"
      onMouseEnter={() => {
        setShowOptions(true);
        setClickTriggered(false); // Reset click trigger on hover
      }}
      onMouseLeave={() => {
        if (!clickTriggered) {
          setShowOptions(false);
        }
      }}
    >
      {/* Options buttons (Share and Copy) */}
      {showOptions && (
        <div className="mb-3 flex flex-col space-y-2 transition-opacity duration-300 ease-in-out">
          {isShareSupported && (
            <button
              onClick={handleShare}
              className="animate-popup delay-100 rounded-full bg-yellow-500 p-3 font-semibold text-white shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              aria-label="Share via Web Share API"
            >
              <IconShare size={20} />
            </button>
          )}
          <button
            onClick={handleCopy}
            className="animate-popup delay-200 rounded-full bg-yellow-500 p-3 font-semibold text-white shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
            aria-label="Copy to Clipboard"
          >
            <IconClipboard size={20} />
          </button>
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={toggleOptions} // Toggle options on click
        className='animate-popup delay-200 rounded-full bg-yellow-500 p-4 font-semibold text-white shadow-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50'
        aria-label="Share"
      >
        <IconShare3 size={24} />
      </button>
    </div>
  );
};

export default ShareButton;
