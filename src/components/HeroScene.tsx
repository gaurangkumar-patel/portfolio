import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox, Sparkles } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

interface SceneProps {
  reducedMotion: boolean;
}

function BackendCore({ reducedMotion }: SceneProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current || reducedMotion) {
      return;
    }

    group.current.rotation.y += delta * 0.18;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.06;
  });

  return (
    <group ref={group} rotation={[0.18, -0.45, 0]}>
      <Float
        speed={reducedMotion ? 0 : 1.2}
        rotationIntensity={reducedMotion ? 0 : 0.12}
        floatIntensity={reducedMotion ? 0 : 0.25}
      >
        {[0, 1, 2].map((server) => (
          <group key={server} position={[0, (server - 1) * 0.48, 0]}>
            <RoundedBox args={[2.15, 0.32, 1.08]} radius={0.08} smoothness={4}>
              <meshStandardMaterial
                color="#17221d"
                metalness={0.75}
                roughness={0.28}
                emissive="#183426"
                emissiveIntensity={0.35}
              />
            </RoundedBox>

            <mesh position={[0.72, 0, 0.55]}>
              <sphereGeometry args={[0.045, 20, 20]} />
              <meshStandardMaterial
                color="#79e6a7"
                emissive="#79e6a7"
                emissiveIntensity={3}
              />
            </mesh>

            <mesh position={[0.9, 0, 0.55]}>
              <sphereGeometry args={[0.045, 20, 20]} />
              <meshStandardMaterial
                color="#ef4d4d"
                emissive="#ef4d4d"
                emissiveIntensity={2}
              />
            </mesh>
          </group>
        ))}

        <mesh>
          <icosahedronGeometry args={[0.48, 3]} />
          <meshStandardMaterial
            color="#79e6a7"
            emissive="#46a66c"
            emissiveIntensity={1.6}
            metalness={0.55}
            roughness={0.18}
          />
        </mesh>

        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.48, 0.025, 16, 100]} />
          <meshStandardMaterial
            color="#79e6a7"
            emissive="#79e6a7"
            emissiveIntensity={2}
          />
        </mesh>

        <mesh rotation={[0.7, 0.3, 0.5]}>
          <torusGeometry args={[1.18, 0.018, 16, 100]} />
          <meshStandardMaterial
            color="#ef4d4d"
            emissive="#ef4d4d"
            emissiveIntensity={1.8}
          />
        </mesh>
      </Float>
    </group>
  );
}

function SceneContent({ reducedMotion }: SceneProps) {
  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <pointLight position={[-2, 1, 2]} intensity={10} color="#79e6a7" />

      <BackendCore reducedMotion={reducedMotion} />

      {!reducedMotion && (
        <Sparkles
          count={45}
          scale={[4.5, 3.5, 2.5]}
          size={1.3}
          speed={0.35}
          color="#79e6a7"
        />
      )}
    </>
  );
}

export default function HeroScene() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => {
      setReducedMotion(mediaQuery.matches);
    };

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  return (
    <div className="three-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0.35, 5], fov: 42 }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <SceneContent reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
