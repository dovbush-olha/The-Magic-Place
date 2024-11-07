import { Outlet } from 'react-router-dom';
import Particles from '@tsparticles/react';

import { Header } from '@/components/layouts/header';
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

      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
}
