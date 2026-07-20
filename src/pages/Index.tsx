import Icon from '@/components/ui/icon';

const DISH_IMAGE =
  'https://cdn.poehali.dev/projects/cff7e38b-d3d7-405f-8dee-c5199949622d/bucket/7487fc60-d50b-4d1d-9934-212b5318d4cc.png';

const LOGO_IMAGE =
  'https://cdn.poehali.dev/projects/cff7e38b-d3d7-405f-8dee-c5199949622d/bucket/187e8c8a-5e8a-45b9-8539-3ed94d3a7dd8.png';

const benefits = [
  {
    icon: 'Gift',
    title: 'Бесплатные стаканы для воды',
    text: 'При покупке нашего основного ассортимента вы получаете набор стаканов для воды абсолютно бесплатно.',
  },
  {
    icon: 'PiggyBank',
    title: 'Экономия на старте',
    text: 'Получив бесплатные стаканы, вы сможете сократить стартовые расходы, что особенно важно для нового бизнеса.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Качество',
    text: 'Мы гарантируем высокое качество нашего фарфора и кухонного инвентаря, что обеспечит вашему предприятию хорошую репутацию и привлечет постоянных гостей.',
  },
  {
    icon: 'GlassWater',
    title: 'Количество стаканов',
    text: 'Вы получаете двойное количество стаканов для воды в зависимости от посадочных мест вашего проекта.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-300 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* A4 slide */}
      <div
        className="relative w-full max-w-[794px] aspect-[210/297] bg-white text-brand-gray overflow-hidden shadow-2xl flex flex-col"
        style={{ padding: '0.5cm' }}
      >

        {/* top red stripe */}
        <div className="h-2 w-full bg-brand-red shrink-0" />

        {/* ===== HEADER: white bg ===== */}
        <header className="relative bg-white px-8 sm:px-12 pt-4 sm:pt-5 pb-3 sm:pb-4">
          {/* logo + city */}
          <div className="flex items-center justify-end gap-4 mb-2 animate-fade-in">
            <div className="shrink-0 rounded-full bg-white shadow-md ring-2 ring-brand-red/20 p-0.5">
              <img
                src={LOGO_IMAGE}
                alt="Логотип Комплекс-бар"
                className="object-contain rounded-full"
                style={{ width: '100px', height: '100px' }}
              />
            </div>
          </div>

          {/* yellow accent badge */}
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-3 py-1 mb-2">
            <Icon name="Tag" size={14} className="text-brand-gray" />
            <span className="text-brand-gray text-xs font-bold uppercase tracking-widest">Акция</span>
          </div>

          <h1 className="font-display font-extrabold leading-[1.15] text-xl sm:text-2xl tracking-tight text-brand-gray">
            Уникальное предложение. Наша компания предлагает <span className="text-brand-red">акцию на покупку
            высококачественного фарфора, столовых приборов и кухонного инвентаря</span>
            <span className="align-super text-brand-red text-sm">*</span>
          </h1>
        </header>

        {/* thin red divider */}
        <div className="h-px bg-brand-red/20 mx-8 sm:mx-12" />

        {/* ===== BODY: 2 columns ===== */}
        <main className="relative flex-1 bg-brand-lightgray px-8 sm:px-12 py-3 sm:py-4 grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-4 sm:gap-6 items-center">
          {/* visual */}
          <div className="relative animate-scale-in overflow-hidden">
            <div className="absolute -inset-2 border-2 border-brand-red/15" />
            <img
              src={DISH_IMAGE}
              alt="Премиальный рельефный сервиз"
              className="relative w-full h-full object-cover aspect-[3/4]"
            />
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
              <p className="font-display font-black uppercase text-center leading-[0.9] text-white text-4xl sm:text-5xl tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.95)] -rotate-[28deg] w-[150%]">
                Стаканы<br />
                для воды<br />
                <span className="text-brand-yellow text-5xl sm:text-6xl block mt-1">бесплатно!</span>
              </p>
            </div>
          </div>

          {/* benefits */}
          <ul className="flex flex-col gap-2.5 sm:gap-3">
            {benefits.map((b, i) => (
              <li
                key={b.title}
                className="flex gap-3 sm:gap-4 animate-fade-in"
                style={{ animationDelay: `${0.1 + i * 0.12}s`, animationFillMode: 'both' }}
              >
                <div className="shrink-0 mt-0.5 h-9 w-9 flex items-center justify-center bg-brand-red text-white">
                  <Icon name={b.icon} size={17} />
                </div>
                <div>
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-tight text-brand-red">
                    {b.title}
                  </h3>
                  <p className="text-brand-gray/75 text-xs sm:text-sm leading-snug mt-0.5">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>

        {/* ===== CTA: red bg ===== */}
        <section className="relative bg-brand-red text-white px-8 sm:px-12 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <p className="font-display text-xl sm:text-2xl font-bold leading-tight">
                Свяжитесь с менеджером
              </p>
              <p className="text-white/80 text-xs">
                для подбора комплекта под ваше заведение
              </p>
            </div>
            <div className="space-y-1 text-sm sm:text-base font-bold">
              <a href="tel:+79061715498" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Icon name="Phone" size={14} /> +7 (906) 171-54-98
              </a>
              <a href="mailto:volgograd@complexbar.ru" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Icon name="Mail" size={14} /> volgograd@complexbar.ru
              </a>
              <a href="https://complexbar.ru" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Icon name="Globe" size={14} /> complexbar.ru
              </a>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="relative bg-white px-8 sm:px-12 py-2 text-center border-t border-brand-red/10">
          <p className="text-xs sm:text-sm text-brand-gray/70 leading-snug">
            *Список стаканов для подарка запрашивайте у менеджера. Количество подарков ограничено.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;