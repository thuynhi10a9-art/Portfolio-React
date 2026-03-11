"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Particle array
    const particles: Particle[] = [];
    const particleCount = 50;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw and update particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.vx *= -1;
          particle.x = Math.max(particle.radius, Math.min(canvas.width - particle.radius, particle.x));
        }
        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.vy *= -1;
          particle.y = Math.max(particle.radius, Math.min(canvas.height - particle.radius, particle.y));
        }

        // Draw particle
        ctx.fillStyle = `rgba(100, 200, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ background: "transparent", zIndex: -1 }}
    />
  );
}
