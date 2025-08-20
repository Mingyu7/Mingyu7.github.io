// 파티클 효과 JavaScript
class ParticleSystem {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.mouseX = 0;
    this.mouseY = 0;
    this.init();
  }

  init() {
    // 캔버스 생성
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'particles-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '80px';
    this.canvas.style.left = '0';
    this.canvas.style.zIndex = '10';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.width = '300px';
    this.canvas.style.height = 'calc(100vh - 80px)';
    document.body.insertBefore(this.canvas, document.body.firstChild);
    
    this.ctx = this.canvas.getContext('2d');
    this.resize();
    
    // 다크모드 여부 감지
    this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // 파티클 생성
    this.createParticles();
    
    // 이벤트 리스너
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => this.updateMouse(e));
    
    // 다크모드 변경 감지
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      this.isDarkMode = e.matches;
      this.createParticles(); // 파티클 색상 재설정
    });
    
    // 애니메이션 시작
    this.animate();
    
    // 스크롤 애니메이션 초기화
    this.initScrollAnimations();
    
    // 마우스 트레일 효과 (왼쪽만)
    this.initCursorTrail();
    
    // 플로팅 셰이프 추가 (왼쪽만)
    this.addFloatingShapes();
  }

  resize() {
    // 고정 너비 300px, 메뉴바 제외한 높이
    this.canvas.width = 300;
    this.canvas.height = window.innerHeight - 80;
  }

  createParticles() {
    this.particles = []; // 기존 파티클 초기화
    const particleCount = 120; // 더 많은 파티클로 조밀하게
    
    for (let i = 0; i < particleCount; i++) {
      this.particles.push({
        x: Math.random() * 300, // 300px 너비 내에서
        y: Math.random() * (window.innerHeight - 80), // 메뉴바 제외한 높이
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 5 + 2, // 더 크게
        opacity: Math.random() * 0.8 + 0.4,
        color: this.getRandomColor(),
        originalSize: 0,
        pulse: Math.random() * Math.PI * 2
      });
    }
    
    // 파티클에 오리지널 사이즈 저장
    this.particles.forEach(particle => {
      particle.originalSize = particle.size;
    });
  }

  getRandomColor() {
    if (this.isDarkMode) {
      // 다크모드 색상
      const darkColors = [
        'rgba(102, 126, 234, 0.7)',
        'rgba(118, 75, 162, 0.7)',
        'rgba(52, 152, 219, 0.7)',
        'rgba(155, 89, 182, 0.7)',
        'rgba(46, 204, 113, 0.7)'
      ];
      return darkColors[Math.floor(Math.random() * darkColors.length)];
    } else {
      // 라이트모드 색상 (더 진하고 선명하게)
      const lightColors = [
        'rgba(63, 81, 181, 0.9)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(33, 150, 243, 0.9)',
        'rgba(103, 58, 183, 0.9)',
        'rgba(0, 150, 136, 0.9)',
        'rgba(255, 87, 34, 0.8)',
        'rgba(255, 152, 0, 0.8)'
      ];
      return lightColors[Math.floor(Math.random() * lightColors.length)];
    }
  }

  updateMouse(event) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 파티클 업데이트 및 그리기
    this.updateParticles();
    this.drawParticles();
    this.drawConnections();
    
    requestAnimationFrame(() => this.animate());
  }


  updateParticles() {
    this.particles.forEach((particle, index) => {
      // 마우스와의 거리 계산
      const dx = this.mouseX - particle.x;
      const dy = this.mouseY - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // 마우스 근처에서 파티클이 반응
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx -= (dx / distance) * force * 0.01;
        particle.vy -= (dy / distance) * force * 0.01;
        particle.size = particle.originalSize * (1 + force * 0.5);
        particle.opacity = Math.min(1, particle.opacity + force * 0.3);
      } else {
        particle.size = particle.originalSize;
        particle.opacity = Math.max(0.2, particle.opacity - 0.01);
      }
      
      // 펄스 효과
      particle.pulse += 0.02;
      particle.size += Math.sin(particle.pulse) * 0.2;
      
      // 위치 업데이트
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // 속도 감쇠
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // 경계 처리 (300px 너비, 메뉴바 제외한 높이)
      if (particle.x < 0 || particle.x > 300) {
        particle.vx = -particle.vx;
        particle.x = Math.max(0, Math.min(300, particle.x));
      }
      if (particle.y < 0 || particle.y > (window.innerHeight - 80)) {
        particle.vy = -particle.vy;
        particle.y = Math.max(0, Math.min(window.innerHeight - 80, particle.y));
      }
    });
  }

  drawParticles() {
    this.particles.forEach(particle => {
      this.ctx.save();
      this.ctx.globalAlpha = particle.opacity;
      this.ctx.fillStyle = particle.color;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx.fill();
      
      // 글로우 효과
      this.ctx.shadowColor = particle.color;
      this.ctx.shadowBlur = particle.size * 2;
      this.ctx.fill();
      
      this.ctx.restore();
    });
  }

  drawConnections() {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          this.ctx.save();
          this.ctx.globalAlpha = (100 - distance) / 100 * 0.4;
          
          if (this.isDarkMode) {
            this.ctx.strokeStyle = 'rgba(102, 126, 234, 0.6)';
          } else {
            this.ctx.strokeStyle = 'rgba(63, 81, 181, 0.7)';
          }
          
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.stroke();
          this.ctx.restore();
        }
      }
    }
  }

  initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // 모든 섹션에 fade-in-up 클래스 추가
    document.querySelectorAll('h2, .hero-section, .intro-section, .education-section, .cert-grid, .tech-section').forEach(el => {
      el.classList.add('fade-in-up');
      observer.observe(el);
    });
  }

  initCursorTrail() {
    const trails = [];
    const trailCount = 5;

    // 트레일 요소들 생성
    for (let i = 0; i < trailCount; i++) {
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.opacity = (trailCount - i) / trailCount * 0.5;
      trail.style.transform = `scale(${(trailCount - i) / trailCount})`;
      document.body.appendChild(trail);
      trails.push({
        element: trail,
        x: 0,
        y: 0
      });
    }

    // 마우스 움직임 추적
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // 트레일 애니메이션
    const animateTrails = () => {
      trails.forEach((trail, index) => {
        const factor = (index + 1) * 0.15;
        trail.x += (mouseX - trail.x) * factor;
        trail.y += (mouseY - trail.y) * factor;
        
        trail.element.style.left = trail.x - 10 + 'px';
        trail.element.style.top = trail.y - 10 + 'px';
      });
      
      requestAnimationFrame(animateTrails);
    };
    
    animateTrails();
  }

  addFloatingShapes() {
    const shapesContainer = document.createElement('div');
    shapesContainer.className = 'floating-shapes';
    document.body.insertBefore(shapesContainer, document.body.firstChild);

    for (let i = 0; i < 5; i++) {
      const shape = document.createElement('div');
      shape.className = 'floating-shape';
      shapesContainer.appendChild(shape);
    }
  }
}

// DOM이 로드되면 파티클 시스템 초기화
document.addEventListener('DOMContentLoaded', () => {
  new ParticleSystem();
  
  // 호버 효과 강화
  document.querySelectorAll('.cert-card, .tech-section > div, .hero-badge').forEach(el => {
    el.classList.add('enhanced-hover');
  });
  
  // 글로우 효과 추가
  document.querySelectorAll('h1, h2').forEach(el => {
    el.classList.add('glow-effect');
  });
});

// 성능 최적화를 위한 디바이스 감지
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
  // 모바일에서는 파티클 수 줄이기
  document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('particles-canvas');
    if (canvas) {
      canvas.style.display = 'none'; // 모바일에서는 파티클 비활성화
    }
  });
}