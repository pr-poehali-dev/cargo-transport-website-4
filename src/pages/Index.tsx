import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    weight: '',
    phone: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заявка отправлена:', formData);
  };

  const services = [
    {
      icon: 'Truck',
      title: 'Грузоперевозки',
      description: 'Быстрая доставка грузов по городу и области',
      price: 'от 1500 ₽'
    },
    {
      icon: 'Users',
      title: 'Услуги грузчиков',
      description: 'Профессиональная погрузка и разгрузка',
      price: 'от 500 ₽/час'
    },
    {
      icon: 'Home',
      title: 'Квартирные переезды',
      description: 'Комплексное решение для переездов',
      price: 'от 3000 ₽'
    },
    {
      icon: 'Package',
      title: 'Доставка мебели',
      description: 'Бережная транспортировка габаритных грузов',
      price: 'от 2000 ₽'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cargo-orange to-cargo-blue rounded-lg flex items-center justify-center animate-pulse-glow">
              <Icon name="Truck" size={24} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cargo-orange to-cargo-blue bg-clip-text text-transparent">
              ГрузоЭкспресс
            </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-cargo-dark hover:text-cargo-orange transition-colors">Услуги</a>
            <a href="#order" className="text-cargo-dark hover:text-cargo-orange transition-colors">Заказать</a>
            <a href="#contact" className="text-cargo-dark hover:text-cargo-orange transition-colors">Контакты</a>
          </nav>
          <Button className="bg-gradient-to-r from-cargo-orange to-cargo-blue text-white hover:scale-105 transition-transform">
            <Icon name="Phone" size={16} className="mr-2" />
            +7 (999) 123-45-67
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto text-center">
          <Badge className="bg-cargo-orange/10 text-cargo-orange border-cargo-orange mb-6 animate-scale-in">
            Работаем 24/7
          </Badge>
          <h2 className="text-5xl md:text-7xl font-bold text-cargo-dark mb-6 leading-tight">
            Быстрые и надёжные
            <span className="block bg-gradient-to-r from-cargo-orange to-cargo-blue bg-clip-text text-transparent">
              грузоперевозки
            </span>
          </h2>
          <p className="text-xl text-cargo-gray mb-10 max-w-2xl mx-auto">
            Профессиональные услуги грузчиков и перевозок. 
            Гарантируем сохранность груза и точные сроки доставки.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cargo-orange to-cargo-blue text-white hover:scale-105 transition-transform px-8 py-4 text-lg"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Рассчитать стоимость
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-cargo-orange text-cargo-orange hover:bg-cargo-orange hover:text-white transition-all px-8 py-4 text-lg"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Смотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold text-cargo-dark mb-4">Наши услуги</h3>
            <p className="text-cargo-gray text-xl max-w-2xl mx-auto">
              Полный спектр услуг для ваших задач по перевозке и переезду
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:scale-105 transition-all duration-300 hover:shadow-xl border-0 bg-white/80 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cargo-orange to-cargo-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-cargo-dark">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-2xl font-bold text-cargo-orange">{service.price}</p>
                  <Button className="w-full mt-4 bg-gradient-to-r from-cargo-orange to-cargo-blue text-white hover:scale-105 transition-transform">
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section id="order" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-4xl font-bold text-cargo-dark mb-4">Подать заявку</h3>
            <p className="text-cargo-gray text-xl">
              Заполните форму и мы свяжемся с вами в течение 5 минут
            </p>
          </div>

          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-cargo-dark">Онлайн заявка</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-cargo-dark font-medium mb-2 block">Откуда</label>
                    <Input
                      placeholder="Адрес отправления"
                      value={formData.from}
                      onChange={(e) => setFormData({...formData, from: e.target.value})}
                      className="border-cargo-gray/30 focus:border-cargo-orange"
                    />
                  </div>
                  <div>
                    <label className="text-cargo-dark font-medium mb-2 block">Куда</label>
                    <Input
                      placeholder="Адрес назначения"
                      value={formData.to}
                      onChange={(e) => setFormData({...formData, to: e.target.value})}
                      className="border-cargo-gray/30 focus:border-cargo-orange"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-cargo-dark font-medium mb-2 block">Вес груза (кг)</label>
                    <Input
                      placeholder="Примерный вес"
                      value={formData.weight}
                      onChange={(e) => setFormData({...formData, weight: e.target.value})}
                      className="border-cargo-gray/30 focus:border-cargo-orange"
                    />
                  </div>
                  <div>
                    <label className="text-cargo-dark font-medium mb-2 block">Телефон</label>
                    <Input
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="border-cargo-gray/30 focus:border-cargo-orange"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-cargo-dark font-medium mb-2 block">Описание груза</label>
                  <Textarea
                    placeholder="Опишите что нужно перевезти..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="border-cargo-gray/30 focus:border-cargo-orange"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-cargo-orange to-cargo-blue text-white hover:scale-105 transition-transform py-4 text-lg animate-pulse-glow"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-cargo-dark text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="animate-scale-in">
              <div className="text-4xl font-bold text-cargo-orange mb-2">1000+</div>
              <p className="text-white/80">Довольных клиентов</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-cargo-orange mb-2">24/7</div>
              <p className="text-white/80">Работаем круглосуточно</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-cargo-orange mb-2">5 лет</div>
              <p className="text-white/80">Опыт работы</p>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-cargo-orange mb-2">100%</div>
              <p className="text-white/80">Гарантия качества</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-md py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cargo-orange to-cargo-blue rounded-lg flex items-center justify-center">
                  <Icon name="Truck" size={20} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-cargo-dark">ГрузоЭкспресс</h4>
              </div>
              <p className="text-cargo-gray">Надёжные грузоперевозки с 2019 года</p>
            </div>
            
            <div>
              <h5 className="font-bold text-cargo-dark mb-4">Услуги</h5>
              <ul className="space-y-2 text-cargo-gray">
                <li><a href="#" className="hover:text-cargo-orange transition-colors">Грузоперевозки</a></li>
                <li><a href="#" className="hover:text-cargo-orange transition-colors">Услуги грузчиков</a></li>
                <li><a href="#" className="hover:text-cargo-orange transition-colors">Переезды</a></li>
                <li><a href="#" className="hover:text-cargo-orange transition-colors">Доставка мебели</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-cargo-dark mb-4">Контакты</h5>
              <ul className="space-y-2 text-cargo-gray">
                <li className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (999) 123-45-67
                </li>
                <li className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@gruzexpress.ru
                </li>
                <li className="flex items-center">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  г. Москва, ул. Транспортная, 1
                </li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold text-cargo-dark mb-4">Социальные сети</h5>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-cargo-orange rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="MessageCircle" size={20} className="text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-cargo-blue rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                  <Icon name="Phone" size={20} className="text-white" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-cargo-gray/20 mt-8 pt-8 text-center text-cargo-gray">
            <p>&copy; 2024 ГрузоЭкспресс. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;