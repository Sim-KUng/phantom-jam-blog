import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* 메인 타이틀과 서브 타이틀 */}
        <h1 className="hero__title">유령 정체 해결 프로젝트</h1>
        <p className="hero__subtitle">강화학습(PPO) 기반 다차로 교통 제어</p>
        
        {/* 버튼 영역 */}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            스터디 기록 보기
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{ marginLeft: '15px', backgroundColor: 'transparent', color: 'white', borderColor: 'white' }}
            to="https://github.com/Sim-KUng/phantom-jam-blog"> {/* 여기에 실제 깃허브 주소를 넣으세요 */}
            GitHub 바로가기
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Phantom Breakers`}
      description="강화학습 기반 유령 정체 해소 프로젝트 기술 블로그입니다.">
      <HomepageHeader />
      <main>
        {/* 거대한 공룡이 있던 자리(HomepageFeatures)를 지우고 깔끔한 소개 글로 대체했습니다 */}
        <div style={{textAlign: 'center', padding: '80px 20px'}}>
          <h2>[Sim-KUng]의 연구 기록</h2>
          <p style={{fontSize: '1.2rem', color: 'gray', marginTop: '20px'}}>
            이곳은 건국대학교 컴퓨터공학부 학우들이 진행하는<br/>
            강화학습 교통 제어 스터디 및 프로젝트 문서 저장소입니다.
          </p>
        </div>
      </main>
    </Layout>
  );
}