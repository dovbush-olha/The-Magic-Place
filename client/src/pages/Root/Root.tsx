import { Outlet } from 'react-router-dom';
import Particles from '@tsparticles/react';

import { starsOptions } from '../../lib/particles/starsOptions.ts';

import { useStarsParticles } from './useStarsParticles.ts';

export function Root() {
  const isParticlesInitialized = useStarsParticles();

  return (
    <div>
      <Outlet />

      {isParticlesInitialized && <Particles options={starsOptions} />}
    </div>
  );
}
