import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Social from '../components/Social';

const PrivacyPage = () => (
  <Layout>
    <Header />

    <section className="privacy">
      <div className="container">
        <h1 className="section-heading">「Scrap Media」プライバシーポリシー</h1>
        <div className="row">
          <div className="col-md-12 mx-auto">
            <p>「Scrap Media」ではアプリケーションにおける以下の機能を利用しています。</p>
            <ul>
              <li>カメラ</li>
              <li>ストレージ</li>
              <li>インターネット</li>
            </ul>
            <p>それぞれの利用用途は以下の通りです。</p>
            <h3>カメラ</h3>
            <ul>
              <li>コードリーダーを利用し、対象の情報を読み取るだけに利用します。</li>
            </ul>
            <h3>ストレージ</h3>
            <ul>
              <li>Amazon Product Advertising APIのアクセスキーを保存する場合、データの暗号化を行なった後にローカルストレージにデータを保存します。</li>
            </ul>
            <h3>インターネット</h3>
            <ul>
              <li>詳細情報を取得するため、openBD APIもしくはAmazon Product Advertising APIを介してインターネットへ接続し、情報を取得します。</li>
              <li><a href="https://openbd.jp/">openBD | 書誌情報・書影を自由に</a></li>
              <li><a href="https://affiliate.amazon.co.jp/help/node/topic/GMEDADBTCJ9KD8DQ">アソシエイト・セントラル</a></li>
            </ul>
          </div>
          
        </div>
      </div>
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

export default PrivacyPage;
