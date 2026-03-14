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
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/1-rl-basics">
            1주 차 스터디 기록 보기
          </Link>
          <Link
            className="button button--outline button--secondary button--lg"
            style={{ marginLeft: '15px', backgroundColor: 'transparent', color: 'white', borderColor: 'white' }}
            to="https://github.com/Sim-KUng/phantom-jam-blog">
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
      title={`Sim-KUng 블로그`}
      description="강화학습 기반 유령 정체 해소 프로젝트 기술 블로그입니다.">
      <HomepageHeader />
      <main>
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