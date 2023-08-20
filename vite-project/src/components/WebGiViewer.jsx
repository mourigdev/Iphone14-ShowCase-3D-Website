import React from "react";

import {
  useRef,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";

import {
  ViewerApp,
  AssetManagerPlugin,
  AssetManagerBasicPopupPlugin,
  CanvasSnipperPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  GammaCorrectionPlugin,
  mobileAndTabletCheck,
} from "webgi";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { scrollAnimation } from "../lib/scroll.animation";
gsap.registerPlugin(ScrollTrigger);

const WebGiViewer = forwardRef((props, ref) => {
  const canvasRef = useRef(null);

  const [viewerRef, setViewerRef] = useState(null);
  const [targetRef, setTargetRef] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [positionRef, setPositionRef] = useState(null);
  const canvasContainerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    triggerPreview() {
      canvasContainerRef.current.style.pointerEvents = "all";
      props.contentRef.current.style.opacity = 0;
      gsap.to(positionRef, {
        x: 13.04,
        y: -2.01,
        z: 2.29,
        duration: 2,
        onUpdate: () => {
          viewerRef.setDirty();
          cameraRef.positionTargetUpdated(true);
        },
      });

      gsap.to(targetRef, {
        x: 0.11,
        y: 0.0,
        z: 0.0,
        duration: 2,
      });

      viewerRef.scene.activeCamera.setCameraOptions({ controlsEnabled: true });
    },
  }));

  const memorizScrollAnimation = useCallback((position, target, onUpdate) => {
    if (position && target && onUpdate) {
      scrollAnimation(position, target, onUpdate);
    }
  }, []);

  const setupViewer = useCallback(async () => {
    const viewer = new ViewerApp({
      canvas: canvasRef.current,
    });

    const manager = await viewer.addPlugin(AssetManagerPlugin);
    const camera = viewer.scene.activeCamera;
    const position = camera.position;
    const target = camera.target;

    setViewerRef(viewer);
    setCameraRef(camera);
    setPositionRef(position);
    setTargetRef(target);

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin);
    await viewer.addPlugin(new ProgressivePlugin(32));
    await viewer.addPlugin(new TonemapPlugin(true));
    await viewer.addPlugin(GammaCorrectionPlugin);
    await viewer.addPlugin(SSRPlugin);
    await viewer.addPlugin(SSAOPlugin);
    await viewer.addPlugin(BloomPlugin);

    viewer.renderer.refreshPipeline();

    // Import and add a GLB file.
    await manager.addFromPath("scene-black.glb");

    viewer.getPlugin(TonemapPlugin).config.clipBackground = true;
    // Disable user control the canvas the module
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false });

    window.scrollTo(0, 0);

    let needsUpdate = true;

    const onUpdate = () => {
      console.log("yes");
      needsUpdate = true;
      viewer.setDirty();
    };

    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true);
        needsUpdate = false;
      }
    });
    memorizScrollAnimation(position, target, onUpdate);
  }, []);

  useEffect(() => {
    setupViewer();
  }, [setupViewer]);

  return (
    <div ref={canvasContainerRef} id="webgi-canvas-container">
      <canvas id="webgi-canvas" ref={canvasRef} />
    </div>
  );
});

export default WebGiViewer;
