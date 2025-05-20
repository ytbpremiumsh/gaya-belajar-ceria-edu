
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
      // Push ads when component mounts or updates
      const pushAd = () => {
        if ((window as any).adsbygoogle) {
          try {
            (window as any).adsbygoogle.push({});
          } catch (e) {
            console.error('AdSense push error:', e);
          }
        }
      };

      // Call pushAd once - if adsbygoogle is available
      if ((window as any).adsbygoogle) {
        pushAd();
      } else {
        // If not available yet, set up a small delay to try again
        const timeout = setTimeout(() => {
          if ((window as any).adsbygoogle) {
            pushAd();
          }
        }, 300);
        
        return () => clearTimeout(timeout);
      }
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, [adSlot]); // Re-run when adSlot changes

  return (
    <div className="ad-container my-6 overflow-hidden">
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
