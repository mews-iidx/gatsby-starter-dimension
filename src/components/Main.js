import PropTypes from 'prop-types'
import React from 'react'
import od2 from '../images/predict.jpg'
import robot from '../images/robot.jpg'
import int from '../images/int.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
          少しの技術だけで幸せになれる人はたくさんいると思っています。<br/>
          いわゆる普通エンジニアだけど、やれる事をやりたいと思っています。<br/>
          Web開発と画像認識と業務効率化が好きです。<br/>
          vim派。過激ではない。<br/>
          </p>
          <p>
          このサイトはGatsby + Netlifyで構成されています。
          </p>
          {close}
        </article>

        <article
          id="services"
          className={`${this.props.article === 'services' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Services</h2>
          <p>
            <h3> 画像処理･ディープラーニング </h3>
            5年程度の実務経験により、大体何かの役には立てるかと思います。<br/>
            車向けや研究所向けなど、様々なお客様と共に開発してきました。<br/>
            <li> ライブラリ環境構築(C++/Python) </li>
            <li> 教師データの作成 </li>
            <li> 画像, 推論, 精度および速度評価 </li>
            <li> Jetson, Driveシリーズ向けの環境構築, チューニング </li>
            <li> CUDAによる高速化(C++) </li>
            <li> 本番環境へデプロイ </li>
            <span className="image main">
              <img src={od2} alt="" />
            </span>
          </p>
          <p>
            <h3> bot開発 </h3>
            趣味で自社のビジネスサイド向けによくBotを作っています。<br/>
            <li> SlackやLINEのBotコンサルティング < /li>
            <li> SlackやLINEの自動応答Bot開発 </li>
            <li> Slackインテグレーションアプリ開発 </li>
            <li> 各種サービス連携 </li>
            <li> Qtによるクロスプラットフォームのネイティブアプリケーション開発</li>
            <li> Web GUI開発 </li>
            <span className="image main">
              <img src={robot} alt="" />
            </span>
            </p>
          <p>
            <h3> 業務効率化 </h3>
            こちらも趣味で、自身の単純作業やビジネスサイド向けに効率化を行っています。<br/>
            必要に応じて開発も行います。(ほぼ開発してる。。)
            <li> Webサイト・Excelなどの単純作業の自動化コンサルティングおよび実装 </li>
            <li> スクレイピングツールの開発 </li>
            <span className="image main">
              <img src={int} alt="" />
            </span>
          </p>
          
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
          </p>
          <p>
          <h2> 経歴 </h2>
          <h3> エッジテクノロジー株式会社 (2019/4 - )</h3>
            <li> 画像認識/処理系開発 </li>
            <li> プリセールス･要件定義 </li>
            <li> TreasureData をハブとしたDWH開発･運用･保守 </li>
            <li> 社内向け業務効率化コンサルティング </li>
          </p>
          <p>

          <h3> 車載向け組込みアプリ開発会社 (2015/4 - 2019/3) </h3>
            <li> 画像認識/処理系案件  </li>
            <li> Jetson お客様サポート </li>
            <li> CUDAによる高速化 </li>
            <li> データレイクの研究･開発</li>
            <li> 社内サーバ管理者 </li>
          </p>

          <p>
           <h2> 言語 </h2>
           <li> C++ </li>
           <li> Python </li>
           <li> PHP </li>
           <li> java script </li>
          </p>
          <p>
           <h2> 主要ライブラリ < /h2>
           <li> OpenCV (C++/Python) </li>
           <li> CUDA (C++) </li>
           <li> Qt (C++/Python) </li>
           <li> TensorRT (C++) </li>
          </p>
          <p>
           <h2> 機械学習系フレームワーク </h2>
           <li> Tensorflow </li>
           <li> YOLO(C++)  </li>
           <li> caffe(C++) </li>
           <li> Keras      </li>
           <li> chainer    </li>
          </p>
          <p>
           <h2> Web系 </h2>
           <li> Gatsby React </li>
           <li> laravel </li>
          </p>
          <p>
           <h2> クラウドサービス </h2>
           <li> AWS (EC2, VPCなど) </li>
           <li> GCP (VisionAPIのみ)</li>
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p> 雑談・気軽な相談からお仕事の依頼まで、お気軽にどうぞ。</p>
          <form method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="bot-field" />
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/mews_base"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/m2dx765" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mews-iidx/"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
