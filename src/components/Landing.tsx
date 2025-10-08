import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Landing = () => {
  const features = [
    {
      title: 'Pulse-опросы',
      description: 'Короткие еженедельные опросы для мониторинга настроений команды в режиме реального времени',
    },
    {
      title: 'Аналитика вовлечённости',
      description: 'Глубокая аналитика по командам, отделам и проектам с визуализацией трендов',
    },
    {
      title: 'Анонимная обратная связь',
      description: 'Сотрудники делятся мнением честно благодаря гарантированной анонимности',
    },
    {
      title: 'eNPS метрика',
      description: 'Измерение индекса лояльности сотрудников и готовности рекомендовать компанию',
    },
  ];

  const stats = [
    { value: '89%', label: 'Средний отклик' },
    { value: '2.5x', label: 'Рост вовлечённости' },
    { value: '500+', label: 'Компаний' },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Вовлечённость команды —
            <span className="text-primary"> под контролем</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-10">
            Платформа для измерения и повышения вовлечённости сотрудников через умные опросы и аналитику
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="h-12 px-8">
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              Посмотреть демо
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Возможности платформы</h2>
            <p className="text-xl text-muted-foreground">Всё необходимое для работы с вовлечённостью</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Как это работает?</h2>
            <p className="text-xl mb-12 opacity-90">Простой процесс из 3 шагов</p>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { num: '01', text: 'Создайте опрос за 5 минут' },
                { num: '02', text: 'Сотрудники отвечают анонимно' },
                { num: '03', text: 'Получите аналитику и инсайты' },
              ].map((step) => (
                <div key={step.num}>
                  <div className="text-6xl font-bold mb-4 opacity-50">{step.num}</div>
                  <p className="text-lg">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Выберите план для вашей команды</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Стартовый',
                price: '0',
                period: 'навсегда',
                features: ['До 30 сотрудников', 'Базовые опросы', 'eNPS', 'Email поддержка'],
              },
              {
                name: 'Профессиональный',
                price: '990',
                period: 'в месяц',
                features: ['До 200 сотрудников', 'Все типы опросов', 'Углублённая аналитика', 'API', 'Приоритетная поддержка'],
                highlight: true,
              },
              {
                name: 'Корпоративный',
                price: 'Индивидуально',
                period: '',
                features: ['Без ограничений', 'Кастомизация', 'Dedicated менеджер', 'SLA'],
              },
            ].map((plan) => (
              <Card
                key={plan.name}
                className={`p-8 ${plan.highlight ? 'border-2 border-primary shadow-lg scale-105' : ''}`}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground ml-2">₽ {plan.period}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.highlight ? '' : 'bg-gray-900 hover:bg-gray-800'}`}>
                  {plan.price === 'Индивидуально' ? 'Связаться' : 'Начать'}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl text-muted-foreground mb-10">
            Присоединяйтесь к сотням компаний, которые улучшили атмосферу в команде
          </p>
          <Button size="lg" className="h-12 px-8">
            Создать бесплатный аккаунт
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
