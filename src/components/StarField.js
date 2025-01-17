import React, { useEffect } from "react";
import { throttle } from 'lodash';

const StarField = () => {
  useEffect(() => {
    const STAR_COLOR = "#B0E0E6";
    const STAR_SIZE = 4;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const getStarCount = () => {
      if (window.innerWidth <= 768) {
        return 40;
      } else {
        return 100;
      }
    };
  
    let STAR_COUNT = getStarCount() || 40;
    const canvas = document.querySelector("canvas"),
      context = canvas.getContext("2d");
  
    let scale = window.devicePixelRatio || 1; // Use devicePixelRatio
    let width, height;
  
    let stars = [];
  
    let pointerX, pointerY;
  
    let velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
  
    let touchInput = false;
  
    generate();
    resize();
    step();
  
    window.onresize = resize;
    window.onorientationchange = resize;  // Handle orientation change
    const handleMouseMove = throttle((event) => {
      touchInput = false;
      movePointer(event.clientX, event.clientY);
    }, 100);  // Reduced throttle time to make the movement slower (increase value for less sensitivity)
    canvas.onmousemove = handleMouseMove;
    document.onmouseleave = onMouseLeave;
    
    function generate() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }
  
    function placeStar(star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }
  
    function recycleStar(star) {
      let direction = "z";
  
      let vx = Math.abs(velocity.x),
        vy = Math.abs(velocity.y);
  
      if (vx > 1 || vy > 1) {
        let axis;
  
        if (vx > vy) {
          axis = Math.random() < vx / (vx + vy) ? "h" : "v";
        } else {
          axis = Math.random() < vy / (vx + vy) ? "v" : "h";
        }
  
        if (axis === "h") {
          direction = velocity.x > 0 ? "l" : "r";
        } else {
          direction = velocity.y > 0 ? "t" : "b";
        }
      }
  
      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);
  
      if (direction === "z") {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === "l") {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === "r") {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === "t") {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === "b") {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    }
  
    function resize() {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;
  
      canvas.width = width;
      canvas.height = height;
  
      stars.forEach(placeStar);
    }
  
    function step() {
      context.clearRect(0, 0, width, height);
  
      update();
      render();
  
      requestAnimationFrame(step);
    }
  
    function update() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;
  
      velocity.x += (velocity.tx - velocity.x) * 0.5;  // Reduced effect of mouse movement
      velocity.y += (velocity.ty - velocity.y) * 0.5;  // Reduced effect of mouse movement
  
      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;
  
        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;
  
        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }
  
    function render() {
      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = "round";
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;
  
        context.beginPath();
        context.moveTo(star.x, star.y);
  
        var tailX = velocity.x * 2,
          tailY = velocity.y * 2;
  
        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;
  
        context.lineTo(star.x + tailX, star.y + tailY);
  
        context.stroke();
      });
    }
  
    function movePointer(x, y) {
      if (typeof pointerX === "number" && typeof pointerY === "number") {
        let ox = x - pointerX,
          oy = y - pointerY;
  
        velocity.tx = velocity.tx + (ox / 20) * scale * (touchInput ? 1 : -1);  // Reduced mouse movement effect
        velocity.ty = velocity.ty + (oy / 20) * scale * (touchInput ? 1 : -1);  // Reduced mouse movement effect
      }
  
      pointerX = x;
      pointerY = y;
    }
  
    function onMouseLeave() {
      pointerX = null;
      pointerY = null;
    }
  }, []);

  return <canvas id="canvas" className="canvas"></canvas>;
};

export default StarField;
