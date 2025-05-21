
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import AdSense from './AdSense';

interface StickyAdProps {
  adSlot: string;
  position?: 'bottom' | 'top';
}

const StickyAd: React.FC<StickyAdProps> = ({ adSlot, position = 'bottom' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show ad after 3 seconds
    const timer = setTimeout(() => {
      // Check if user hasn't dismissed the ad in this session
      const adDismissed = localStorage.getItem(`ad-dismissed-${adSlot}`);
      if (!adDismissed) {
        setIsVisible(true);
      } else {
        setDismissed(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [adSlot]);

  const handleClose = () => {
    setIsVisible(false);
    setDismissed(true);
    // Remember the ad was closed for 1 hour (3600000 ms)
    localStorage.setItem(`ad-dismissed-${adSlot}`, 'true');
    // Set a timeout to clear the localStorage after 1 hour
    setTimeout(() => {
      localStorage.removeItem(`ad-dismissed-${adSlot}`);
    }, 3600000);
  };

  if (dismissed) return null;

  return (
    <div 
      className={`fixed left-0 w-full z-50 bg-white shadow-lg transition-transform duration-300 ${position === 'bottom' ? 'bottom-0' : 'top-0'} ${isVisible ? 'translate-y-0' : position === 'bottom' ? 'translate-y-full' : '-translate-y-full'}`}
    >
      <div className="container relative mx-auto p-2">
        <button 
          onClick={handleClose}
          className="absolute top-1 right-1 bg-gray-100 hover:bg-gray-200 rounded-full p-1 z-10"
          aria-label="Close advertisement"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="pt-1 pb-1">
          <AdSense 
            adSlot={adSlot} 
            adFormat="horizontal"
            style={{ display: 'block', minHeight: '90px' }}
            className="my-2"
          />
        </div>
      </div>
    </div>
  );
};

export default StickyAd;
