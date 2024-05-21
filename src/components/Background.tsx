import React, { useEffect } from 'react';
import * as THREE from 'three';

const SmokeBackground: React.FC = () => {
    useEffect(() => {
        const $bkg = document.getElementById("smoke-bg");
        const w = window.innerWidth;
        const h = window.innerHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, w / h, 1, 1000);
        camera.position.z = 10;
        scene.add(camera);

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(w, h);
        renderer.setClearColor(0xF1F1F3, 0.5);

        if ($bkg) {
            $bkg.appendChild(renderer.domElement);
        }

        const light = new THREE.DirectionalLight(0x000000, 0.5);
        light.position.set(-1, 3, 1);
        scene.add(light);

        const smokeParticles: THREE.Mesh[] = [];

        const loader = new THREE.TextureLoader();
        loader.crossOrigin = "";
        loader.load("/smoke.webp", (texture) => {
            const smokeGeo = new THREE.PlaneGeometry(300, 300);
            const smokeMaterial = new THREE.MeshLambertMaterial({
                map: texture,
                transparent: true,
            });

            const NUM_PARTICLES = 75;
            for (let p = 0; p < NUM_PARTICLES; p++) {
                const particle = new THREE.Mesh(smokeGeo, smokeMaterial);
                particle.position.set(
                    Math.random() * 500 - 250,
                    Math.random() * 500 - 250,
                    Math.random() * 1000 - 100,
                );
                particle.rotation.z = Math.random() * 360;
                scene.add(particle);
                smokeParticles.push(particle);
            }

            const resize = () => {
                const newHeight = window.innerHeight;
                const newWidth = window.innerWidth;
                camera.aspect = newWidth / newHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(newWidth, newHeight);
            };

            const animate = () => {
                requestAnimationFrame(animate);
                smokeParticles.forEach(particle => {
                    particle.rotation.z += 0.0005;
                });
                renderer.render(scene, camera);
            };

            animate();
            window.addEventListener("resize", resize);

            return () => {
                window.removeEventListener("resize", resize);
            };
        });
    }, []); // Empty dependency array ensures this effect runs only once after the component is mounted

    return (
        <div>
            <div id='smoke-bg' className='-z-10'>
            </div>
        </div>
    );
};

export default SmokeBackground;
