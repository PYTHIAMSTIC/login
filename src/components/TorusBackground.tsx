import { useEffect } from 'react';
import * as THREE from 'three';

const TorusBackground = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('bg-canvas').appendChild(renderer.domElement);

    camera.position.setZ(30);

    const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
    const material = new THREE.MeshBasicMaterial({ color: 0xff6347, wireframe: true });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    function animate() {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    }

    animate();

    const handleScroll = (event: WheelEvent) => {
      const delta = Math.sign(event.deltaY);
      camera.position.z += delta * 2;
      torus.position.z -= delta * 2;
      camera.position.z = Math.max(10, Math.min(camera.position.z, 50));
      torus.position.z = Math.max(-100, Math.min(torus.position.z, 20));
    };

    window.addEventListener('wheel', handleScroll);

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div id="bg-canvas" />;
};

export default TorusBackground;
