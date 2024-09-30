import { Outlet } from 'react-router-dom';
import Particles from '@tsparticles/react';

import { starsOptions } from '@/lib/particles';

import { useStarsParticles } from './use-stars-particles.ts';

import './index.scss';

export function RootRoute() {
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
