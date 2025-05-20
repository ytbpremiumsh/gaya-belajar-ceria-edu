
import React, { useEffect } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  style?: React.CSSProperties;
}

const AdSense: React.FC<AdSenseProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  style = { display: 'block' }
}) => {
  useEffect(() => {
    try {
      // Push ads when component mounts
      const pushAd = () => {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
      };

      // Only push if adsbygoogle is available
      if ((window as any).adsbygoogle) {
        pushAd();
      } else {
        // If not available, wait for it to load
        const observer = new MutationObserver((mutations, obs) => {
          if ((window as any).adsbygoogle) {
            pushAd();
            obs.disconnect(); // Stop observing once pushed
          }
        });
        
        observer.observe(document, {
          childList: true,
          subtree: true
        });
        
        // Cleanup observer
        return () => {
          observer.disconnect();
        };
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className="ad-container my-8">
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-2489487414102981"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive}
      />
    </div>
  );
};

export default AdSense;
