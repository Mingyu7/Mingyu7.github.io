---
permalink: /
title: "About Me"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<style>
  /* 다크모드 대응 CSS - 파티클 효과와 조화 */
  .hero-section {
    text-align: center; 
    margin-bottom: 30px;
    position: relative;
    z-index: 1;
  }
  
  .hero-title {
    font-size: 2.5em; 
    margin-bottom: 10px;
    color: #1a1a1a !important;
    text-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
    transition: all 0.3s ease;
  }
  
  .hero-subtitle {
    font-size: 1.8em; 
    margin-bottom: 20px;
    color: #3498db !important;
    text-shadow: 0 0 15px rgba(52, 152, 219, 0.3);
  }
  
  .hero-badge {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
    color: white; 
    padding: 20px; 
    border-radius: 15px; 
    margin: 20px 0;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .hero-badge p {
    font-size: 1.2em; 
    margin: 0;
  }
  
  .intro-section {
    background: rgba(248, 249, 250, 0.8); 
    padding: 25px; 
    border-radius: 15px; 
    border-left: 5px solid #3498db; 
    margin: 25px 0;
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    z-index: 1;
  }
  
  .intro-section h3 {
    color: #2c3e50 !important; 
    margin-top: 0;
  }
  
  .intro-section p {
    font-size: 1.1em; 
    line-height: 1.8;
    color: #2c3e50 !important;
  }
  
  .intro-section strong {
    color: #1a252f !important;
  }
  
  /* 학력 정보 스타일 - 파티클 효과와 조화 */
  .education-section {
    background: rgba(232, 245, 232, 0.9); 
    padding: 25px; 
    border-radius: 15px; 
    margin: 20px 0;
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
    z-index: 1;
  }
  
  .education-section ul {
    list-style: none; 
    padding: 0;
  }
  
  .education-section li {
    margin: 15px 0; 
    font-size: 1.1em;
    color: #2c3e50 !important;
    padding: 10px;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
  }
  
  .education-section li strong {
    color: #1a252f !important;
  }
  
  .education-section li:hover {
    transform: translateX(5px);
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  /* 자격증 카드 스타일 - 파티클 효과와 조화 */
  .cert-grid {
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); 
    gap: 20px; 
    margin: 25px 0;
  }
  
  .cert-card {
    padding: 20px; 
    border-radius: 15px; 
    border-left: 4px solid;
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }
  
  .cert-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
  
  .cert-card h4, .cert-card p {
    margin: 0;
  }
  
  .cert-card h4 {
    margin-bottom: 10px;
    font-size: 1.2em;
    color: #1a1a1a !important;
  }
  
  .cert-card p {
    color: #2c3e50 !important;
  }
  
  /* 기술 스택 스타일 - 파티클 효과와 조화 */
  .tech-section {
    background: rgba(248, 249, 250, 0.9); 
    padding: 30px; 
    border-radius: 15px; 
    margin: 25px 0;
    backdrop-filter: blur(15px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    position: relative;
    z-index: 1;
  }
  
  .tech-grid {
    display: grid; 
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); 
    gap: 25px;
  }
  
  .tech-category {
    background: rgba(255, 255, 255, 0.5);
    padding: 20px;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  
  .tech-category:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .tech-category h4 {
    color: #495057 !important; 
    border-bottom: 2px solid #dee2e6; 
    padding-bottom: 8px;
    margin-bottom: 15px;
  }
  
  .tech-category ul {
    color: #6c757d !important;
    margin: 0;
  }
  
  .tech-category li {
    margin: 8px 0;
    transition: all 0.2s ease;
    color: #6c757d !important;
  }
  
  .tech-category li strong {
    color: #495057 !important;
  }
  
  .tech-category li:hover {
    color: #3498db !important;
    transform: translateX(3px);
  }
  
  /* 섹션 제목 라이트 모드 */
  h2 {
    color: #1a1a1a !important;
  }
  
  /* 다크모드 전용 스타일 */
  @media (prefers-color-scheme: dark) {
    .hero-title {
      color: #e8e8e8 !important;
    }
    
    .hero-subtitle {
      color: #64b5f6 !important;
    }
    
    .intro-section {
      background: rgba(45, 45, 45, 0.9) !important;
      border-left-color: #64b5f6 !important;
    }
    
    .intro-section h3 {
      color: #e8e8e8 !important;
    }
    
    .intro-section p {
      color: #e8e8e8 !important;
    }
    
    .intro-section p strong {
      color: #ffffff !important;
    }
    
    .education-section {
      background: rgba(45, 65, 45, 0.9) !important;
    }
    
    .education-section li {
      color: #e8e8e8 !important;
      background: rgba(255, 255, 255, 0.1) !important;
    }
    
    .education-section li strong {
      color: #ffffff !important;
    }
    
    .education-section li:hover {
      background: rgba(255, 255, 255, 0.2) !important;
    }
    
    .tech-section {
      background: rgba(40, 40, 40, 0.9) !important;
    }
    
    .tech-category {
      background: rgba(255, 255, 255, 0.1) !important;
    }
    
    .tech-category h4 {
      color: #e8e8e8 !important;
      border-bottom-color: #555 !important;
    }
    
    .tech-category ul {
      color: #cccccc !important;
    }
    
    .tech-category li {
      color: #cccccc !important;
    }
    
    .tech-category li strong {
      color: #ffffff !important;
    }
    
    .tech-category li:hover {
      color: #64b5f6 !important;
    }
    
    /* 섹션 제목 다크모드 */
    h2 {
      color: #e8e8e8 !important;
    }
    
    /* 자격증 카드 제목들 다크모드에서만 밝게 */
    .cert-card h4 {
      color: inherit !important;
    }
    
    /* 자격증 카드 다크모드 색상 */
    .cert-card:nth-child(1) {
      background-color: rgba(255, 243, 205, 0.2) !important;
      color: #ffd54f !important;
      border-left-color: #ffc107 !important;
    }
    
    .cert-card:nth-child(1) h4 {
      color: #ffd54f !important;
    }
    
    .cert-card:nth-child(1) p {
      color: #ffecb3 !important;
    }
    
    .cert-card:nth-child(2) {
      background-color: rgba(212, 237, 218, 0.2) !important;
      color: #81c784 !important;
      border-left-color: #28a745 !important;
    }
    
    .cert-card:nth-child(2) h4 {
      color: #81c784 !important;
    }
    
    .cert-card:nth-child(2) p {
      color: #c8e6c9 !important;
    }
    
    .cert-card:nth-child(3) {
      background-color: rgba(204, 229, 255, 0.2) !important;
      color: #64b5f6 !important;
      border-left-color: #007bff !important;
    }
    
    .cert-card:nth-child(3) h4 {
      color: #64b5f6 !important;
    }
    
    .cert-card:nth-child(3) p {
      color: #bbdefb !important;
    }
    
    .cert-card:nth-child(4) {
      background-color: rgba(248, 215, 218, 0.2) !important;
      color: #f48fb1 !important;
      border-left-color: #dc3545 !important;
    }
    
    .cert-card:nth-child(4) h4 {
      color: #f48fb1 !important;
    }
    
    .cert-card:nth-child(4) p {
      color: #f8bbd9 !important;
    }
  }
</style>

<div class="hero-section">
  <h1 class="hero-title">
    안녕하세요! 👋
  </h1>
  <h2 class="hero-subtitle">
    AI와 소프트웨어 기술로 미래를 만들어가는 <strong>이민규</strong>입니다
  </h2>
  <div class="hero-badge">
    <p>
      <strong>유원대학교 AI소프트웨어학과 4학년</strong> • <strong>평균학점 4.3/4.5</strong>
    </p>
  </div>
</div>

<div class="intro-section">
  <h3>🌟 저에 대해</h3>
  <p>
    저는 <strong>게으르지 않고 꾸준히 노력하는 것</strong>을 신념으로 삼고 있으며, 이러한 <strong>성실함</strong>이 저의 가장 큰 장점입니다. 이론과 실무를 균형있게 발전시키기 위해 노력한 결과, 다양한 자격증을 취득하며 전문성을 입증했습니다.
  </p>
  <p>
    새로운 기술을 배우고 적용하는 것에 흥미를 느끼며, <strong>지속적인 성장과 학습</strong>을 통해 가치 있는 소프트웨어를 개발하고자 합니다.
  </p>
</div>

---

## 🎓 학력 정보
<div class="education-section">
  <ul>
    <li>
      🏫 <strong>유원대학교 AI소프트웨어학과</strong> (4학년 재학 중)
    </li>
    <li>
      📊 <strong>평균학점</strong>: 4.3/4.5
    </li>
    <li>
      ⭐ <strong>성실한 학업 태도</strong>로 우수한 성적 유지
    </li>
  </ul>
</div>

## 🏅 취득 자격증
<div class="cert-grid">
  <div class="cert-card" style="background-color: #fff3cd; color: #856404; border-left-color: #ffc107;">
    <h4>💼 정보처리기사</h4>
    <p>시스템 개발 및 소프트웨어 엔지니어링 전문성</p>
  </div>
  <div class="cert-card" style="background-color: #d4edda; color: #155724; border-left-color: #28a745;">
    <h4>📊 컴퓨터활용능력 2급</h4>
    <p>데이터 처리 및 분석 역량</p>
  </div>
  <div class="cert-card" style="background-color: #cce5ff; color: #004085; border-left-color: #007bff;">
    <h4>⚙️ 정보처리기능사</h4>
    <p>프로그래밍 및 시스템 운영 기초</p>
  </div>
  <div class="cert-card" style="background-color: #f8d7da; color: #721c24; border-left-color: #dc3545;">
    <h4>📝 워드프로세서</h4>
    <p>문서 작성 및 편집 능력</p>
  </div>
</div>

## 💻 기술 스택
<div class="tech-section">
  <div class="tech-grid">
    <div class="tech-category">
      <h4>🐍 Programming Languages</h4>
      <ul>
        <li><strong>Python</strong> - AI/ML, 데이터 분석</li>
        <li><strong>Java</strong> - 웹 개발, OOP</li>
        <li><strong>C/C++</strong> - 알고리즘, 시스템</li>
        <li><strong>SQL</strong> - 데이터베이스</li>
      </ul>
    </div>
    <div class="tech-category">
      <h4>🌐 Web Technologies</h4>
      <ul>
        <li><strong>Frontend</strong>: HTML5, CSS3, JavaScript</li>
        <li><strong>Backend</strong>: Spring Framework</li>
        <li><strong>Database</strong>: MySQL</li>
      </ul>
    </div>
    <div class="tech-category">
      <h4>🤖 AI/ML & Data</h4>
      <ul>
        <li><strong>Frameworks</strong>: TensorFlow, Keras</li>
        <li><strong>Libraries</strong>: NumPy, Pandas</li>
        <li><strong>CV</strong>: OpenCV</li>
      </ul>
    </div>
    <div class="tech-category">
      <h4>🛠️ Development Tools</h4>
      <ul>
        <li><strong>Version Control</strong>: Git, GitHub</li>
        <li><strong>IDE</strong>: VS Code, IntelliJ</li>
        <li><strong>OS</strong>: Windows, Linux</li>
      </ul>
    </div>
  </div>
</div>

## 🚀 핵심 역량
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 25px 0;">
  <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; text-align: center;">
    <h4 style="margin: 0 0 15px 0; font-size: 1.3em;">🎯 성실함과 끈기</h4>
    <p style="margin: 0; opacity: 0.9;">게으르지 않고 꾸준히 학습하며 평균학점 4.3으로 증명된 성실성</p>
  </div>
  <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 20px; border-radius: 12px; text-align: center;">
    <h4 style="margin: 0 0 15px 0; font-size: 1.3em;">🧠 문제 해결 능력</h4>
    <p style="margin: 0; opacity: 0.9;">복잡한 문제를 논리적으로 분석하고 300+ 알고리즘 문제 해결</p>
  </div>
  <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 20px; border-radius: 12px; text-align: center;">
    <h4 style="margin: 0 0 15px 0; font-size: 1.3em;">📚 지속적 학습</h4>
    <p style="margin: 0; opacity: 0.9;">새로운 기술 습득에 대한 열정과 트렌드 기술 학습</p>
  </div>
  <div style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); color: white; padding: 20px; border-radius: 12px; text-align: center;">
    <h4 style="margin: 0 0 15px 0; font-size: 1.3em;">🤝 협업과 실무</h4>
    <p style="margin: 0; opacity: 0.9;">이론을 실제 프로젝트에 적용하고 팀워크를 통한 성과 달성</p>
  </div>
</div>

<div style="text-align: center; margin: 40px 0; padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 15px;">
  <h3 style="margin: 0 0 15px 0; font-size: 1.5em;">💫 나의 목표</h3>
  <p style="font-size: 1.2em; margin: 0; opacity: 0.95;">
    <em>"성실함과 끊임없는 학습으로 가치 있는 소프트웨어를 만들어가겠습니다!"</em>
  </p>
</div>
