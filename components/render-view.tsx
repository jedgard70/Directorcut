import React, { useState } from 'react';
import Image from 'next/image';
import { Settings2, Camera, Film } from 'lucide-react';

export function RenderView() {
  const [samples, setSamples] = useState(1024);
  const [bounces, setBounces] = useState(12);
  const [roughness, setRoughness] = useState(0.45);

  return (
    <div className="relative h-full w-full">
      {/* Viewport Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdotJeeiZPphzeQ4zqOiLZR8oIwbJacGg1Xp9gqGQkl_MAxb5ao78O77ejvQiX3jl_qkja3fKAAXa6-pUsgVv1Gki3tr4YwcJscIz13Cy-XfEBlkgl-HJY9XFwmAVnN0dZMz7cFV7UMu9sgywdQhMvyeebNgy3Pv9qficmTmNcFMOTyuluprPulyYtYgeKviJLl3hVRqKhpTUbXN-rAxfNeJBThdOQ1t9K4POH6rTXshxT0GFJ1brIzvj2HLTFGR3NBvKgdmSR3Tr_" 
          alt="3D Render Viewport"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Gradient overlay to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/80 pointer-events-none"></div>
      </div>

      {/* Floating Viewport Controls */}
      <div className="absolute top-4 left-4 z-10 flex gap-2">
        <div className="bg-surface-container/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_rgba(0,240,255,0.6)]"></span>
            <span className="text-xs font-bold text-primary uppercase">RT Active</span>
          </div>
          <div className="h-4 w-px bg-outline-variant"></div>
          <span className="text-xs font-semibold text-on-surface">CAM_01</span>
        </div>
      </div>

      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10 flex flex-col gap-3">
        <button className="w-12 h-12 rounded-full bg-primary-container text-on-primary-container shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
          <Camera className="w-5 h-5" />
        </button>
        <button className="w-12 h-12 rounded-full bg-surface-container-highest text-primary-fixed-dim border border-primary/30 shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
          <Film className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Sheet - Rendering Properties */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="bg-surface-container-low/95 backdrop-blur-xl border-t border-outline-variant rounded-t-2xl px-6 pt-4 pb-8 max-w-3xl mx-auto">
          {/* Drag Handle */}
          <div className="w-12 h-1.5 bg-outline-variant rounded-full mx-auto mb-6"></div>
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Rendering Properties</h2>
            <button className="text-primary-fixed-dim text-xs font-bold flex items-center gap-1 hover:text-primary transition-colors">
              <Settings2 className="w-4 h-4" /> RESET
            </button>
          </div>

          <div className="space-y-6">
            {/* Slider 1 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-outline">Samples per Pixel</label>
                <span className="text-sm font-semibold text-primary">{samples}</span>
              </div>
              <input 
                type="range" min="1" max="4096" value={samples} 
                onChange={(e) => setSamples(parseInt(e.target.value))}
                style={{ background: `linear-gradient(to right, var(--color-primary-container) ${(samples/4096)*100}%, var(--color-outline-variant) ${(samples/4096)*100}%)` }}
              />
            </div>

            {/* Slider 2 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-outline">Max Bounces</label>
                <span className="text-sm font-semibold text-primary">{bounces}</span>
              </div>
              <input 
                type="range" min="1" max="32" value={bounces} 
                onChange={(e) => setBounces(parseInt(e.target.value))}
                style={{ background: `linear-gradient(to right, var(--color-primary-container) ${(bounces/32)*100}%, var(--color-outline-variant) ${(bounces/32)*100}%)` }}
              />
            </div>

            {/* Slider 3 */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-xs font-medium text-outline">Roughness Multiplier</label>
                <span className="text-sm font-semibold text-primary">{roughness.toFixed(2)}</span>
              </div>
              <input 
                type="range" min="0" max="1" step="0.01" value={roughness} 
                onChange={(e) => setRoughness(parseFloat(e.target.value))}
                style={{ background: `linear-gradient(to right, var(--color-primary-container) ${roughness*100}%, var(--color-outline-variant) ${roughness*100}%)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
