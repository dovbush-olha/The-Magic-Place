import { Outlet } from 'react-router-dom';
import Particles from '@tsparticles/react';

import { starsOptions } from '@/lib/particles';

import { useStarsParticles } from './useStarsParticles.ts';

import './index.scss';

export function Root() {
  const isParticlesInitialized = useStarsParticles();

  return (
    <>
      {isParticlesInitialized && (
        <Particles
          options={starsOptions}
          className="particles"
        />
      )}

      <div>
        <Outlet />
      </div>
    </>
  );
}
