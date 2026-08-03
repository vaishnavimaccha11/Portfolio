import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import type { ShaderMaterial } from 'three'
import { Vector2 } from 'three'

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position = projectionMatrix
      * modelViewMatrix
      * vec4(position, 1.0);
  }
`

const fragmentShader = `
  precision highp float;

  uniform float uTime;
  uniform vec2 uPointer;
  uniform vec2 uResolution;

  varying vec2 vUv;

  float random(vec2 point) {
    return fract(
      sin(dot(point, vec2(12.9898, 78.233)))
      * 43758.5453123
    );
  }

  float noise(vec2 point) {
    vec2 integerPoint = floor(point);
    vec2 fractionalPoint = fract(point);

    fractionalPoint =
      fractionalPoint
      * fractionalPoint
      * (3.0 - 2.0 * fractionalPoint);

    float bottomLeft = random(integerPoint);
    float bottomRight =
      random(integerPoint + vec2(1.0, 0.0));
    float topLeft =
      random(integerPoint + vec2(0.0, 1.0));
    float topRight =
      random(integerPoint + vec2(1.0, 1.0));

    return mix(
      mix(bottomLeft, bottomRight, fractionalPoint.x),
      mix(topLeft, topRight, fractionalPoint.x),
      fractionalPoint.y
    );
  }

  float fbm(vec2 point) {
    float value = 0.0;
    float amplitude = 0.5;

    for (int index = 0; index < 5; index++) {
      value += amplitude * noise(point);

      point = point * 2.03 + vec2(7.1, 3.7);
      amplitude *= 0.5;
    }

    return value;
  }

  float softEllipse(
    vec2 point,
    vec2 center,
    vec2 scale,
    float softness
  ) {
    vec2 difference = (point - center) / scale;
    float distanceFromCenter = length(difference);

    return 1.0
      - smoothstep(
          1.0 - softness,
          1.0,
          distanceFromCenter
        );
  }

  void main() {
    vec2 uv = vUv;

    float aspectRatio =
      uResolution.x / max(uResolution.y, 1.0);

    vec2 centeredUv = uv - 0.5;
    centeredUv.x *= aspectRatio;

    vec2 pointerOffset = vec2(
      uPointer.x * 0.055,
      uPointer.y * 0.035
    );

    float slowTime = uTime * 0.055;

    float flowingNoise = fbm(
      vec2(
        centeredUv.x * 1.3 + slowTime,
        centeredUv.y * 1.15 - slowTime * 0.55
      )
    );

    float detailNoise = fbm(
      vec2(
        centeredUv.x * 2.15 - slowTime * 0.4,
        centeredUv.y * 1.7 + slowTime * 0.8
      )
    );

    vec2 movement =
      pointerOffset
      + vec2(
          sin(slowTime * 1.7) * 0.035,
          cos(slowTime * 1.3) * 0.025
        );

    /*
      Large blended light regions.
      These overlap softly instead of forming visible polygons.
    */

    float cyanGlow = softEllipse(
      centeredUv,
      vec2(-0.42, -0.12) + movement,
      vec2(0.68, 0.78),
      0.72
    );

    float blueGlow = softEllipse(
      centeredUv,
      vec2(0.46, -0.14) - movement * 0.6,
      vec2(0.72, 0.82),
      0.74
    );

    float violetGlow = softEllipse(
      centeredUv,
      vec2(0.08, 0.05) + movement * 0.35,
      vec2(0.58, 0.72),
      0.76
    );

    float warmGlow = softEllipse(
      centeredUv,
      vec2(0.02, -0.22),
      vec2(0.46, 0.52),
      0.78
    );

    /*
      Soft luminous source near the bottom.
      It is deliberately blurred and never becomes a sharp line.
    */

    float verticalDistance =
      abs(centeredUv.y + 0.34);

    float softSource =
      exp(-verticalDistance * 14.0)
      * exp(-abs(centeredUv.x) * 1.5);

    float sourceBloom = softEllipse(
      centeredUv,
      vec2(0.0, -0.36),
      vec2(0.78, 0.23),
      0.86
    );

    float atmosphericTexture =
      mix(flowingNoise, detailNoise, 0.35);

    cyanGlow *= 0.72 + atmosphericTexture * 0.48;
    blueGlow *= 0.72 + flowingNoise * 0.46;
    violetGlow *= 0.68 + detailNoise * 0.52;
    warmGlow *= 0.64 + atmosphericTexture * 0.38;

    vec3 cyanColor = vec3(0.08, 1.05, 1.35);
    vec3 blueColor = vec3(0.12, 0.46, 1.42);
    vec3 violetColor = vec3(0.64, 0.24, 1.18);
    vec3 warmColor = vec3(1.12, 0.72, 0.48);
    vec3 whiteColor = vec3(1.35, 1.42, 1.55);

    vec3 color = vec3(0.004, 0.008, 0.025);

    color += cyanColor * cyanGlow * 0.56;
    color += blueColor * blueGlow * 0.58;
    color += violetColor * violetGlow * 0.42;
    color += warmColor * warmGlow * 0.16;

    color += whiteColor * softSource * 0.38;
    color += whiteColor * sourceBloom * 0.18;

    /*
      Dark vignette keeps attention on the introduction.
    */

    float vignette = smoothstep(
      1.15,
      0.2,
      length(centeredUv * vec2(0.82, 0.95))
    );

    color *= mix(0.42, 1.0, vignette);

    /*
      Slightly darken the top so the navbar stays readable.
    */

    float topShade = smoothstep(0.38, 0.92, uv.y);
    color *= mix(0.72, 1.0, topShade);

    gl_FragColor = vec4(color, 1.0);
  }
`

function LightShader() {
  const materialRef = useRef<ShaderMaterial>(null)
  const { viewport, size, pointer } = useThree()

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
      uPointer: {
        value: new Vector2(0, 0),
      },
      uResolution: {
        value: new Vector2(size.width, size.height),
      },
    }),
    [size.height, size.width],
  )

  useFrame((state) => {
    const material = materialRef.current

    if (!material) {
      return
    }

    material.uniforms.uTime.value =
      state.clock.getElapsedTime()

    material.uniforms.uPointer.value.lerp(
      new Vector2(pointer.x, pointer.y),
      0.025,
    )

    material.uniforms.uResolution.value.set(
      size.width,
      size.height,
    )
  })

  return (
    <mesh>
      <planeGeometry
        args={[viewport.width, viewport.height, 1, 1]}
      />

      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        depthWrite={false}
        depthTest={false}
        toneMapped={false}
      />
    </mesh>
  )
}

function Prism() {
  return (
    <div className="hero-light-canvas" aria-hidden="true">
      <Canvas
        orthographic
        camera={{
          position: [0, 0, 1],
          zoom: 1,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: 'high-performance',
        }}
      >
        <LightShader />

        <EffectComposer multisampling={0}>
          <Bloom
            intensity={1.1}
            luminanceThreshold={0.12}
            luminanceSmoothing={0.72}
            mipmapBlur
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}

export default Prism