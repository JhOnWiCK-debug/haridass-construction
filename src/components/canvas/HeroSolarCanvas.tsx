"use client";

import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial } from "@react-three/drei";
import * as THREE from "three";

// Individual Photovoltaic Cell with glowing busbars
function SolarCell({
  position,
  index,
  active,
}: {
  position: [number, number, number];
  index: number;
  active: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  // Subdued neon pulse
  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const material = meshRef.current.material as THREE.MeshStandardMaterial;
    if (material) {
      const pulse = Math.sin(time * 2 + index * 0.3) * 0.15 + 0.85;
      material.emissiveIntensity = hovered ? 1.5 : active ? 0.6 * pulse : 0.25;
    }
  });

  return (
    <group position={position}>
      {/* Silicon Solar Wafer */}
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
        }}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[0.88, 0.05, 0.88]} />
        <meshStandardMaterial
          color="#051326"
          roughness={0.15}
          metalness={0.9}
          emissive="#00f0ff"
          emissiveIntensity={hovered ? 1.2 : 0.25}
        />
      </mesh>

      {/* Photovoltaic Busbar Gridlines (Fine silver-cyan conductive lines) */}
      <mesh position={[0, 0.03, 0]}>
        <boxGeometry args={[0.02, 0.01, 0.86]} />
        <meshBasicMaterial color="#00ff88" opacity={0.8} transparent />
      </mesh>
      <mesh position={[0.22, 0.03, 0]}>
        <boxGeometry args={[0.015, 0.01, 0.86]} />
        <meshBasicMaterial color="#00f0ff" opacity={0.6} transparent />
      </mesh>
      <mesh position={[-0.22, 0.03, 0]}>
        <boxGeometry args={[0.015, 0.01, 0.86]} />
        <meshBasicMaterial color="#00f0ff" opacity={0.6} transparent />
      </mesh>
      <mesh position={[0, 0.03, 0]}>
        <boxGeometry args={[0.86, 0.01, 0.02]} />
        <meshBasicMaterial color="#00ff88" opacity={0.5} transparent />
      </mesh>

      {/* Energy Collection Node at cell intersection */}
      <mesh position={[0.44, 0.04, 0.44]}>
        <sphereGeometry args={[0.035, 12, 12]} />
        <meshBasicMaterial
          color={hovered ? "#00ff88" : "#00f0ff"}
          wireframe={false}
        />
      </mesh>
    </group>
  );
}

// 3D Solar Array / Nexus Unit
function SolarArray({ isCanvasHovered }: { isCanvasHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const ring2Ref = useRef<THREE.Mesh>(null!);

  // Generate 4x5 grid of photovoltaic cells
  const cells = useMemo(() => {
    const items = [];
    const rows = 4;
    const cols = 5;
    const spacingX = 0.96;
    const spacingZ = 0.96;
    const offsetX = ((cols - 1) * spacingX) / 2;
    const offsetZ = ((rows - 1) * spacingZ) / 2;

    let idx = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        items.push({
          id: idx++,
          pos: [
            c * spacingX - offsetX,
            0,
            r * spacingZ - offsetZ,
          ] as [number, number, number],
        });
      }
    }
    return items;
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    // Smooth mouse tracking tilt
    const targetRotX = 0.45 - state.pointer.y * 0.45;
    const targetRotY = -0.6 + state.pointer.x * 0.65;

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.08
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotY,
      0.08
    );

    // Continuous slight floating sway
    groupRef.current.position.y =
      Math.sin(state.clock.getElapsedTime() * 1.5) * 0.12;

    // Orbiting rings
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.5;
      ringRef.current.rotation.x += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z -= delta * 0.35;
      ring2Ref.current.rotation.y += delta * 0.25;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Outer Anodized Chassis Frame */}
      <mesh position={[0, -0.08, 0]}>
        <boxGeometry args={[5.1, 0.12, 4.15]} />
        <meshStandardMaterial
          color="#0b111e"
          roughness={0.4}
          metalness={0.85}
        />
      </mesh>

      {/* Cybernetic Bevel Edge Accent */}
      <mesh position={[0, -0.02, 0]}>
        <boxGeometry args={[5.16, 0.02, 4.21]} />
        <meshBasicMaterial color="#00ff88" opacity={0.3} transparent />
      </mesh>

      {/* Sub-Frame Glow Heat-Sink */}
      <mesh position={[0, -0.16, 0]}>
        <boxGeometry args={[4.4, 0.08, 3.4]} />
        <meshStandardMaterial
          color="#030816"
          emissive="#00f0ff"
          emissiveIntensity={isCanvasHovered ? 0.4 : 0.15}
        />
      </mesh>

      {/* Grid of Photovoltaic Cells */}
      {cells.map((cell) => (
        <SolarCell
          key={cell.id}
          index={cell.id}
          position={cell.pos}
          active={isCanvasHovered}
        />
      ))}

      {/* Orbiting Quantum Energy Conduit Ring 1 */}
      <mesh ref={ringRef} position={[0, 0, 0]}>
        <torusGeometry args={[3.4, 0.018, 16, 80]} />
        <meshBasicMaterial color="#00f0ff" opacity={0.7} transparent />
      </mesh>

      {/* Orbiting Quantum Energy Conduit Ring 2 */}
      <mesh ref={ring2Ref} position={[0, 0, 0]}>
        <torusGeometry args={[3.8, 0.012, 16, 80]} />
        <meshBasicMaterial color="#00ff88" opacity={0.5} transparent />
      </mesh>

      {/* Corner Antenna / Telemetry Nodes */}
      {[
        [-2.4, 0.1, -1.9],
        [2.4, 0.1, -1.9],
        [-2.4, 0.1, 1.9],
        [2.4, 0.1, 1.9],
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          <mesh position={[0, 0.15, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
            <meshStandardMaterial color="#374151" metalness={0.9} />
          </mesh>
          <mesh position={[0, 0.32, 0]}>
            <sphereGeometry args={[0.07, 16, 16]} />
            <meshBasicMaterial color="#00ff88" />
          </mesh>
          <pointLight
            color="#00ff88"
            intensity={0.6}
            distance={1.5}
            position={[0, 0.35, 0]}
          />
        </group>
      ))}
    </group>
  );
}

// Surrounding floating energy quanta / photon dust
function PhotonParticles() {
  const ref = useRef<THREE.Points>(null!);
  const count = 120;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const c1 = new THREE.Color("#00ff88");
    const c2 = new THREE.Color("#00f0ff");

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;

      const c = Math.random() > 0.5 ? c1 : c2;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.1;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroSolarCanvas() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[440px] sm:h-[520px] lg:h-[600px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer ambient glow behind 3D canvas */}
      <div className="absolute inset-0 bg-radial-glow opacity-80 pointer-events-none" />

      {/* Floating Cybernetic Telemetry HUD overlays */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 border border-emerald-500/30 backdrop-blur-md text-[11px] font-mono text-emerald-400 shadow-[0_0_15px_rgba(0,255,136,0.15)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>NEXUS ARRAY // OPTICAL LINK ACTIVE</span>
        </div>
        <div className="mt-2 text-[10px] font-mono text-gray-400 pl-2">
          FREQ: 915.4 MHz • POD LATENCY: 12ms
        </div>
      </div>

      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 pointer-events-none text-right">
        <div className="px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md text-[11px] font-mono text-cyan-300">
          <div>PV CELL MATRIX: 20-NODE ARCHITECTURE</div>
          <div className="text-[10px] text-gray-400 mt-0.5">
            INTERACTIVE 3D • HOVER / TILT ENABLED
          </div>
        </div>
      </div>

      {/* Three.js Canvas */}
      <Canvas
        camera={{ position: [0, 2.8, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        {/* Lights */}
        <ambientLight intensity={0.4} />
        {/* Sun Directional Light for sharp specular reflection */}
        <directionalLight
          position={[5, 8, 4]}
          intensity={1.8}
          color="#ffffff"
        />
        {/* Neon Emerald Rim Light */}
        <pointLight
          position={[-4, 2, -2]}
          color="#00ff88"
          intensity={2.2}
          distance={12}
        />
        {/* Electric Cyan Fill Light */}
        <pointLight
          position={[4, -1, 3]}
          color="#00f0ff"
          intensity={1.8}
          distance={10}
        />

        <Float
          speed={1.6}
          rotationIntensity={0.2}
          floatIntensity={0.3}
          floatingRange={[-0.1, 0.1]}
        >
          <SolarArray isCanvasHovered={isHovered} />
          <PhotonParticles />
        </Float>
      </Canvas>
    </div>
  );
}
