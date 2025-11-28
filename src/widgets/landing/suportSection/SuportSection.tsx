import './SuportSection.scss'

const SupportSection = () => {
  const ratings = [
    { 
      stars: 5, 
      rating: "4.9 / 5", 
      company: "СтройГарант" 
    },
    { 
      stars: 5, 
      rating: "4.8 / 5", 
      company: "ФундаментПро"  
    }
  ];

  const features = [
    {
      title: "Проектирование",
      description: "Планируйте, сотрудничайте и создавайте проекты, которые обеспечивают значительный рост и развитие вашего строительного бизнеса"
    },
    {
      title: "Аналитика",
      description: "Анализируйте эффективность работы и создавайте детальные отчеты по всем этапам строительства"
    },
    {
      title: "Взаимодействие",
      description: "Быстро координируйте работу команды и эффективно взаимодействуйте с заказчиками и подрядчиками"
    }
  ];

  return (
    <div className="support">
      <div className="support__container">
        <div className="support__header">
          <h1 className="support__title">
            Как мы поддерживаем наших<br />
            <strong className="support__title--highlight">партнеров по всему миру</strong>
          </h1>
          <p className="support__description">
            Строительная платформа стала стандартным решением для многих бизнес-процессов, 
            включая управление проектами, контроль сроков, расчет смет, 
            управление поставками и координацию рабочих бригад
          </p>
        </div>
        <div className="support__content">
          <div className="support__ratings">
            {ratings.map((item, index) => (
              <div key={index} className="support__rating-item">
                <div className="support__stars">
                  {'★'.repeat(item.stars)}
                </div>
                <div className="support__rating-info">
                  <span className="support__rating-value">{item.rating}</span>
                  <span className="support__rating-company">{item.company}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="support__divider"></div>
          <div className="support__features">
            {features.map((feature, index) => (
              <div key={index} className="support__feature">
                <div className="support__feature-icon">
                  {index === 0 && '🏗️'}
                  {index === 1 && '📊'}
                  {index === 2 && '🤝'}
                </div>
                <div className="support__feature-content">
                  <h3 className="support__feature-title">{feature.title}</h3>
                  <p className="support__feature-description">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportSection;