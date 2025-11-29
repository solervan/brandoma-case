import './ProductPage.scss';
import { useState } from 'react';
import { 
  Button, 
  Input, 
  Slider, 
  Checkbox, 
  SelectPicker,
  IconButton 
} from 'rsuite';
import { 
  Search, 
  Grid, 
  List 
} from '@rsuite/icons';
interface Product {
  id: number;
  name: string;
  price?: number;
  image: string;
  category: string;
  company: string;
  district: string;
  workType: string;
  rating: number;
  description: string;
}

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedWorkTypes, setSelectedWorkTypes] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock данные
  const districts = ['Центральный', 'Северный', 'Южный', 'Западный', 'Восточный'];
  const companies = ['Строительная компания А', 'Ремонт Сервис', 'Профи Строй', 'Мастер Хоум'];
  const workTypes = ['Ремонт под ключ', 'Дизайн интерьера', 'Электрика', 'Сантехника', 'Отделочные работы'];
  
  const products: Product[] = [
    {
      id: 1,
      name: 'Капитальный ремонт квартиры',
      image: '/api/placeholder/300/200',
      category: 'Ремонт',
      company: 'Строительная компания А',
      district: 'Центральный',
      workType: 'Ремонт под ключ',
      rating: 4.8,
      description: 'Полный цикл ремонтных работ с качественными материалами'
    },

     {
      id: 2,
      name: 'Капитальный ремонт квартиры',
      image: '/api/placeholder/300/200',
      category: 'Ремонт',
      company: 'Строительная компания А',
      district: 'Центральный',
      workType: 'Ремонт под ключ',
      rating: 4.8,
      description: 'Полный цикл ремонтных работ с качественными материалами'
    },
     {
      id: 3,
      name: 'Капитальный ремонт квартиры',
      image: '/api/placeholder/300/200',
      category: 'Ремонт',
      company: 'Строительная компания А',
      district: 'Центральный',
      workType: 'Ремонт под ключ',
      rating: 4.8,
      description: 'Полный цикл ремонтных работ с качественными материалами'
    },
     {
      id: 4,
      name: 'Капитальный ремонт квартиры',
      image: '/api/placeholder/300/200',
      category: 'Ремонт',
      company: 'Строительная компания А',
      district: 'Центральный',
      workType: 'Ремонт под ключ',
      rating: 4.8,
      description: 'Полный цикл ремонтных работ с качественными материалами'
    },
    // ... остальные продукты
  ];

  const handleFilterApply = () => {
    console.log('Фильтры применены:', {
      priceRange,
      selectedDistricts,
      selectedCompanies,
      selectedWorkTypes,
      searchQuery
    });
  };

  const handleResetFilters = () => {
    setPriceRange([0, 100000]);
    setSelectedDistricts([]);
    setSelectedCompanies([]);
    setSelectedWorkTypes([]);
    setSearchQuery('');
  };

  return (
    <div className="products-page">
      <div className="products-page__container">
        {/* Заголовок и поиск */}
        <div className="products-page__header">
          <div className="products-page__title-section">
            <h1 className="products-page__title">Услуги и подрядчики</h1>
            <p className="products-page__subtitle">Найдите надежных исполнителей для ваших задач</p>
          </div>
          
          <div className="products-page__search-section">
            <div className="products-page__search">
              <Search className="products-page__search-icon" />
              <Input
                placeholder="Поиск услуг или компаний..."
                value={searchQuery}
                onChange={(value) => setSearchQuery(value)}
                className="products-page__search-input"
              />
            </div>
            
            <div className="products-page__view-controls">
              <IconButton
                icon={<Grid />}
                active={viewMode === 'grid'}
                onClick={() => setViewMode('grid')}
                className="products-page__view-btn"
              />
              <IconButton
                icon={<List />}
                active={viewMode === 'list'}
                onClick={() => setViewMode('list')}
                className="products-page__view-btn"
              />
            </div>
          </div>
        </div>

        <div className="products-page__content">
          {/* Боковая панель с фильтрами */}
          <div className="products-page__sidebar">
            <div className="products-page__filters">
              <div className="products-page__filters-header">
                <span>Фильтры</span>
                <Button 
                  size="xs" 
                  appearance="link" 
                  onClick={handleResetFilters}
                  className="products-page__reset-btn"
                >
                  Сбросить
                </Button>
              </div>

              {/* Фильтр по цене */}
              <div className="products-page__filter-group">
               
                <div className="products-page__price-range">
              
                </div>
              </div>

              {/* Фильтр по районам */}
              <div className="products-page__filter-group">
                <label className="products-page__filter-label">Район</label>
                {districts.map((district) => (
                  <Checkbox
                    key={district}
                    checked={selectedDistricts.includes(district)}
                    onChange={(_, checked) => {
                      setSelectedDistricts(prev =>
                        checked
                          ? [...prev, district]
                          : prev.filter(d => d !== district)
                      );
                    }}
                    className="products-page__checkbox"
                  >
                    {district}
                  </Checkbox>
                ))}
              </div>

              {/* Фильтр по компаниям */}
              <div className="products-page__filter-group">
                <label className="products-page__filter-label">Компания</label>
                {companies.map((company) => (
                  <Checkbox
                    key={company}
                    checked={selectedCompanies.includes(company)}
                    onChange={(_, checked) => {
                      setSelectedCompanies(prev =>
                        checked
                          ? [...prev, company]
                          : prev.filter(c => c !== company)
                      );
                    }}
                    className="products-page__checkbox"
                  >
                    {company}
                  </Checkbox>
                ))}
              </div>

              {/* Фильтр по типу работ */}
              <div className="products-page__filter-group">
                <label className="products-page__filter-label">Тип работ</label>
                {workTypes.map((workType) => (
                  <Checkbox
                    key={workType}
                    checked={selectedWorkTypes.includes(workType)}
                    onChange={(_, checked) => {
                      setSelectedWorkTypes(prev =>
                        checked
                          ? [...prev, workType]
                          : prev.filter(w => w !== workType)
                      );
                    }}
                    className="products-page__checkbox"
                  >
                    {workType}
                  </Checkbox>
                ))}
              </div>

              <Button 
                appearance="primary" 
                block 
                onClick={handleFilterApply}
                className="products-page__apply-btn"
                
              >
                Применить фильтры
              </Button>
            </div>
          </div>

          {/* Основной контент с карточками товаров */}
          <div className="products-page__main">
            <div className="products-page__stats">
              <span className="products-page__results-count">
                Найдено {products.length} услуг
              </span>
              <div className="products-page__sort">
                <SelectPicker
                  placeholder="Сортировка"
                  data={[
                    { label: 'По цене (возр.)', value: 'price_asc' },
                    { label: 'По цене (убыв.)', value: 'price_desc' },
                    { label: 'По рейтингу', value: 'rating' },
                    { label: 'По популярности', value: 'popular' }
                  ]}
                  className="products-page__sort-select"
                />
              </div>
            </div>

            <div className={`products-page__products products-page__products--${viewMode}`}>
              {products.map((product) => (
                <div key={product.id} className="products-page__product-card">
                  <div className="products-page__product-image">
                    <img src={product.image} alt={product.name} />
                    <div className="products-page__product-badge">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="products-page__product-content">
                    <div className="products-page__product-header">
                      <h3 className="products-page__product-title">{product.name}</h3>
                      <div className="products-page__product-rating">
                        ⭐ {product.rating}
                      </div>
                    </div>
                    
                    <p className="products-page__product-description">
                      {product.description}
                    </p>
                    
                    <div className="products-page__product-meta">
                      <span className="products-page__product-company">
                        {product.company}
                      </span>
                      <span className="products-page__product-district">
                        {product.district}
                      </span>
                    </div>
                    
                    <div className="products-page__product-footer">
                      {/* <div className="products-page__product-price">
                        {product.price.toLocaleString()} ₽
                      </div> */}
                      <Button appearance="primary" size="sm" color='yellow'>
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}