import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import Social from '../components/Social';

import demo1 from '../assets/images/demo-screen-1.jpg';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';
import hero from '../assets/images/hero.png';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12 my-auto">
            <div className="mx-auto">
              <img src={hero} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              Scrap MediaならScrapboxで簡単に読書管理ができます。
            </h2>
            <p>
              アプリはAndroidで利用可能です。今すぐダウンロードして始めましょう。
            </p>
            <div className="badges">
              <a className="badge-link" href="https://play.google.com/store/apps/details?id=com.meganii.flutter_scrapmedia">
                <img src={gplay} alt="Android app Scrap Media" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>Scrap Mediaでできること</h2>
          <p className="text-muted">
            以下の機能を利用できます。
          </p>
          <hr />
        </div>
        <div className="row">
          <div className="col-lg-12 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-4">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>書籍のISBNコードを読み取り書影付きのページをScrapboxに作成</h3>
                    <p className="text-muted">
                      Scrapboxで読書管理をする上で必須となる書影をopenBD / Amazonから取得
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>手動でISBNを入力し、検索可能</h3>
                    <p className="text-muted">
                      ISBNの手動入力へも対応
                    </p>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>Twitterにアフィリエイトリンク付きの短縮URLを作成</h3>
                    <p className="text-muted">
                      Amazon Product Advertising APIを利用してAmazonアフィリエイトリンクを作成
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta">
      <div className="cta-content">
        <div className="container">
          <h2>
            Stop waiting.
            <br />
            Start building.
          </h2>
          <Scroll type="id" element="contact">
            <a href="#contact" className="btn btn-outline btn-xl">
              Let's Get Started!
            </a>
          </Scroll>
        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <section className="contact bg-primary" id="contact">
      <div className="container">
        <h2>
          We
          <i className="fas fa-heart"></i>
          new friends!
        </h2>
        <Social />
      </div>
    </section>

    <Footer />
  </Layout>
);

export default IndexPage;
