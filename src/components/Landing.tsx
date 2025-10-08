import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Landing = () => {
  const features = [
    {
      title: 'Опросы вовлечённости',
      description: 'Pulse, Onboarding, Exit — гибкие форматы для всех этапов жизненного цикла сотрудника',
    },
    {
      title: 'Глубокая аналитика',
      description: 'eNPS, индекс вовлечённости, тренды по отделам — всё для принятия решений',
    },
    {
      title: 'Полная анонимность',
      description: 'Защита данных на уровне GDPR и ФЗ-152. Сотрудники отвечают честно',
    },
    {
      title: 'Простая интеграция',
      description: 'API, экспорт CSV/PDF, подключение к HR-системам за минуты',
    },
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '0',
      period: 'навсегда',
      features: ['До 50 сотрудников', 'Базовые опросы', 'eNPS метрика', 'Email поддержка'],
    },
    {
      name: 'Professional',
      price: '49',
      period: 'за сотрудника/год',
      features: ['Неограниченно сотрудников', 'Все типы опросов', 'Продвинутая аналитика', 'API доступ', 'Приоритетная поддержка'],
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'По запросу',
      period: '',
      features: ['Кастомная разработка', 'Dedicated поддержка', 'On-premise установка', 'SLA 99.9%'],
    },
  ];

  const clients = ['СБЕР', 'ЯНДЕКС', 'VK', 'OZON', 'АВИТО'];

  return (
    <div className="bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-4xl">
          <h1 className="text-6xl font-bold leading-tight mb-6">
            Измеряйте вовлечённость.
            <br />
            Повышайте продуктивность.
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl">
            HR-платформа для опросов персонала с продвинутой аналитикой и защитой данных на уровне банка
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 h-12 px-8">
              Начать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-gray-50 h-12 px-8">
              Запросить демо
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-8 text-center">Нам доверяют</p>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            {clients.map((client) => (
              <div key={client} className="text-2xl font-bold text-black">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold mb-16">Ключевые функции</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 border-black">
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Как это работает</h2>
          <p className="text-xl text-gray-600 mb-16">Запуск за 4 простых шага</p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', text: 'Регистрация и настройка аккаунта' },
              { step: '02', text: 'Импорт списка сотрудников' },
              { step: '03', text: 'Создание и запуск опроса' },
              { step: '04', text: 'Анализ результатов и действия' },
            ].map((item) => (
              <div key={item.step}>
                <div className="text-6xl font-bold mb-4">{item.step}</div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-4xl font-bold mb-16 text-center">Тарифы</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricing.map((plan) => (
            <Card
              key={plan.name}
              className={`p-8 ${plan.highlight ? 'border-2 border-black' : 'border-black'}`}
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-gray-600 ml-2">{plan.period}</span>}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <span className="mr-3">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.highlight ? 'bg-black text-white hover:bg-gray-800' : 'border-black text-black hover:bg-gray-50'
                }`}
                variant={plan.highlight ? 'default' : 'outline'}
              >
                Выбрать
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-black text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-xl mb-12 text-gray-300">
            Присоединяйтесь к сотням компаний, которые уже повысили вовлечённость на 40%
          </p>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 h-12 px-8">
            Создать аккаунт
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
