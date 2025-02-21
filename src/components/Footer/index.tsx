import { Link } from 'react-router-dom';
import carjem from '../../assets/images/logos/CarJem_standalone.gif';
import coolAbhi from '../../assets/images/logos/CoolAbhi1290.png';
import FooterCardItem from './components/FooterCardItem';
import FooterLinkItem from './components/FooterLinkItem';
import './index.scss';

const index = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="container">
        <nav>
          <ul>
            <FooterLinkItem label="credits" goTo="/credits">
              Credits
            </FooterLinkItem>
            <FooterLinkItem label="repo link" goTo="https://github.com/BedrockLauncher/BedrockLauncher">
              Source
            </FooterLinkItem>
            <FooterLinkItem label="license link" goTo="https://github.com/BedrockLauncher/BedrockLauncher/tree/master/docs/LICENSE.md">
              License
            </FooterLinkItem>
            <FooterLinkItem label="releases link" goTo="https://github.com/BedrockLauncher/BedrockLauncher/releases">
              Releases
            </FooterLinkItem>
          </ul>
        </nav>
        <div className="footer-cards">
          <FooterCardItem label="Carjem" link="https://carjem.carrd.co/" icon={carjem} title="Carjem" description="Creator of Bedrock Launcher" />
          <FooterCardItem label="TrésAbhi" link="https://tresabhi.github.io/" icon={coolAbhi} title="TrésAbhi" description="Creator of Bedrock Launcher's Website" />
          <FooterCardItem
            label="KalmeMarq"
            link="https://github.com/KalmeMarq"
            icon="https://github.com/KalmeMarq.png?size=80"
            title="KalmeMarq"
            description="Developer of Bedrock Launcher's Website"
          />
        </div>
        <Link to="/credits" onClick={() => window.scroll(0, 0)} className="copyright">
          Carjem 2021 {`${currentYear > 2021 ? `- ${currentYear}` : ''}`} &#169; Not associated or approved by Mojang
        </Link>
      </div>
    </div>
  );
};

export default index;
