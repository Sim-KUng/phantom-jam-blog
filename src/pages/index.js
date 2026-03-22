import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.logoWrapper}>
          <img 
            src={useBaseUrl('/img/main-logo.png')} 
            alt="Sim:KUng! Logo"
            className={styles.heroLogo}
          />
        </div>
        <Heading as="h1" className="hero__title">
          Phantom Jam Project
        </Heading>
        <p className="hero__subtitle">
          Solving Phantom Jams through Reinforcement Learning and Autonomous Mobility
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/week1/rl-basics">
            Explore Week 1 Log
          </Link>
        </div>
      </div>
    </header>
  );
}

// --- 2. 스터디 로드맵 (목차) 데이터 ---
const RoadmapData = [
  {
    week: 'Week 1 - Part 1',
    title: '강화학습 기초 및 핵심 용어',
    description: 'OpenAI Spinning Up 기반 강화학습(RL)의 기본 개념, MDP, 가치 함수 및 벨만 방정식 정리',
    link: '/docs/week1/rl-basics',
    isActive: true, // 작성 완료
  },
  {
    week: 'Week 1 - Part 2',
    title: 'PPO Algorithm (근접 정책 최적화)',
    description: '기존 RL의 한계를 극복한 PPO의 핵심 수식(Clipped Objective)과 Stable Baselines3 코드 분석',
    link: '/docs/week1/ppo-algorithm',
    isActive: true, // 작성 완료
  },
  {
    week: 'Week 1 - Part 3',
    title: '교통 정체 파동과 MOBIL 모델',
    description: '유령 정체(Phantom Jam)의 발생 원리와 시뮬레이션 내 일반 차량의 차선 변경 알고리즘(MOBIL) 이해',
    link: '/docs/week1/traffic-models',
    isActive: true, // 작성 완료
  },
  {
    week: 'Week 2',
    title: '커스텀 환경 구축 및 학습 세팅',
    description: 'highway-env를 활용한 사용자 정의 환경 구성 및 PPO 에이전트 학습 준비',
    link: '#', 
    isActive: false, // 아직 미작성 (버튼 비활성화)
  },
];

// --- 3. 로드맵 섹션 컴포넌트 (세로 리스트 형태) ---
function StudyRoadmap() {
  return (
    <section style={{ padding: '4rem 0' }}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {/* 제목을 프로젝트 전체를 아우르도록 변경 */}
            <Heading as="h2" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              Project Study Roadmap
            </Heading>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {RoadmapData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="card shadow--sm" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    alignItems: 'center', 
                    padding: '1.5rem',
                    borderLeft: item.isActive ? '4px solid #4ade80' : '4px solid #ccc',
                    // 비활성화된 카드는 배경색을 살짝 어둡게 해서 시각적 차이를 줌
                    backgroundColor: item.isActive ? 'inherit' : 'var(--ifm-color-emphasis-100)'
                  }}
                >
                  <div style={{ flexGrow: 1, paddingRight: '1.5rem' }}>
                    <Heading as="h3" style={{ fontSize: '1.1rem', color: 'var(--ifm-color-primary)', margin: 0 }}>
                      {item.week}
                    </Heading>
                    <Heading as="h4" style={{ margin: '0.5rem 0' }}>
                      {item.title}
                    </Heading>
                    <p style={{ margin: 0, color: 'var(--ifm-color-emphasis-700)' }}>
                      {item.description}
                    </p>
                  </div>
                  
                  <div style={{ minWidth: '130px', textAlign: 'right' }}>
                    {item.isActive ? (
                      <Link className="button button--outline button--primary" to={item.link}>
                        학습 노트 보기
                      </Link>
                    ) : (
                      <button className="button button--outline button--secondary" disabled style={{ cursor: 'not-allowed', width: '100%' }}>
                        진행 예정
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 4. 팀원 소개 섹션 (Team Profiles) ---
const TeamData = [
  {
    name: '김서진',
    role: 'Study Member',
    description: '.',
    github: 'https://github.com/seojin235', // 본인 깃허브 주소
    avatar: 'https://github.com/seojin235.png', // 주소 뒤에 .png를 붙이면 프sa 자동 연동!
  },
  {
    name: '남성현',
    role: 'Study Lead',
    description: '.',
    github: 'https://github.com/namsunghyun3057',
    avatar: 'https://github.com/namsunghyun3057.png',
  },
  {
    name: '박상현',
    role: 'Study Member',
    description: '.',
    github: 'https://github.com/geosang122',
    avatar: 'https://github.com/geosang122.png',
  },
];

function TeamProfile() {
  return (
    <section style={{ padding: '2rem 0 4rem 0', textAlign: 'center' }}>
      <div className="container">
        {/* 캡처해서 보여준 안내 문구가 바로 여기 들어감! */}
        <p style={{ color: 'var(--ifm-color-emphasis-600)', marginBottom: '4rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
          이곳은 건국대학교 컴퓨터공학부 학우들이 진행하는<br/>
          강화학습 교통 제어 스터디 및 프로젝트 문서 저장소입니다.
        </p>
        
        <Heading as="h2" style={{ marginBottom: '3rem' }}>
          Meet the Sim:KUng! Team
        </Heading>
        
        <div className="row" style={{ justifyContent: 'center' }}>
          {TeamData.map((member, idx) => (
            <div key={idx} className="col col--4" style={{ marginBottom: '2rem' }}>
              <div className="avatar avatar--vertical">
                <img
                  className="avatar__photo avatar__photo--xl shadow--sm"
                  src={member.avatar}
                  alt={`${member.name}'s avatar`}
                  style={{ border: '3px solid var(--ifm-color-primary)', backgroundColor: 'white' }}
                />
                <div className="avatar__intro" style={{ marginTop: '1.2rem' }}>
                  <div className="avatar__name" style={{ fontSize: '1.2rem' }}>{member.name}</div>
                  <small className="avatar__subtitle" style={{ color: 'var(--ifm-color-primary)', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                    {member.role}
                  </small>
                  <p style={{ fontSize: '0.9rem', color: 'var(--ifm-color-emphasis-700)', minHeight: '40px' }}>
                    {member.description}
                  </p>
                  <a href={member.github} target="_blank" rel="noopener noreferrer" className="button button--sm button--outline button--secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="강화학습 기반 유령 정체 해소 프로젝트 기술 블로그입니다.">
      <HomepageHeader />
      <main>

        <div style={{textAlign: 'center', padding: '80px 20px'}}>
          <h2>[Sim-KUng]의 연구 기록</h2>
          <StudyRoadmap />
          <TeamProfile />
        </div>
      </main>
    </Layout>
  );
}