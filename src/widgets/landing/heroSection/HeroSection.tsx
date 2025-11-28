import './HeroSection.scss';
import { Button } from 'rsuite';
import VideoIcon from '@rsuite/icons/Video';

const HeroSection = () => {
  const teams = [
    { id: 1, name: 'Unsplash', checked: false },
    { id: 2, name: 'Notion', checked: true },
    { id: 3, name: 'INTERCOM', checked: false },
    { id: 4, name: 'descript', checked: false },
    { id: 5, name: 'grammarly', checked: false }
  ];

  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Brandom<br />Фундамент вашего будущего🤝</h1>
        <p className="hero__description">
          В мире, где понятия «качество» и «сроки» слишком часто становятся предметом компромисса, необходима позиция бескомпромиссной ясности и ответственности. Такой позиции придерживается строительная компания «Brandom».        </p>
        <div className="hero__actions">
          <Button color="yellow" appearance="primary">Видео</Button>
          <Button appearance="primary" color='yellow'>Документация</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;