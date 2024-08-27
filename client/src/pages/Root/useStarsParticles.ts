import { useEffect, useState } from 'react';
import { loadStarsPreset } from '@tsparticles/preset-stars';
import { initParticlesEngine } from '@tsparticles/react';

export function useStarsParticles(maxRetries = 3, retryDelay = 3000) {
  const [isInitialized, setIsInitialized] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadStarsPreset(engine);
    })
      .then(() => {
        setIsInitialized(true);
      })
      .catch((error) => {
        console.error(error);
        if (retryCount < maxRetries) {
          setTimeout(() => {
            setRetryCount(retryCount + 1);
          }, retryDelay);
        }
      });
  }, [maxRetries, retryCount, retryDelay]);

  return isInitialized;
}
