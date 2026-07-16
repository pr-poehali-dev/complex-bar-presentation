import Icon from '@/components/ui/icon';

const DISH_IMAGE =
  'https://cdn.poehali.dev/projects/cff7e38b-d3d7-405f-8dee-c5199949622d/bucket/7487fc60-d50b-4d1d-9934-212b5318d4cc.png';

const LOGO_IMAGE =
  'https://cdn.poehali.dev/projects/cff7e38b-d3d7-405f-8dee-c5199949622d/bucket/187e8c8a-5e8a-45b9-8539-3ed94d3a7dd8.png';

const benefits = [
  {
    icon: 'Handshake',
    title: 'Комплексное оснащение',
    text: 'Партнёрство с «Комплекс-бар» — всё для вашего заведения в одном месте.',
  },
  {
    icon: 'Gift',
    title: 'Стаканы в подарок',
    text: 'Дарим стаканы для воды при старте сотрудничества.',
  },
  {
    icon: 'LayoutGrid',
    title: 'Ассортимент на выбор',
    text: 'Линейка стаканов под ваш формат — уточняйте у менеджера.',
  },
  {
    icon: 'LifeBuoy',
    title: 'Поддержка запуска',
    text: 'Консультации, подбор позиций и логистика на этапе открытия.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-300 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* A4 slide */}
      <div className="relative w-full max-w-[794px] aspect-[210/297] bg-white text-brand-gray overflow-hidden shadow-2xl flex flex-col">

        {/* top red stripe */}
        <div className="h-2 w-full bg-brand-red shrink-0" />

        {/* ===== HEADER: white bg ===== */}
        <header className="relative bg-white px-8 sm:px-12 pt-7 sm:pt-8 pb-6 sm:pb-7">
          {/* logo + city */}
          <div className="flex items-center justify-between gap-4 mb-5 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-brand-red" />
              <span className="text-brand-red tracking-[0.3em] text-[10px] sm:text-xs uppercase font-bold">
                Волгоград
              </span>
            </div>
            <div className="shrink-0 rounded-full bg-white shadow-md ring-2 ring-brand-red/20 p-0.5">
              <img
                src={LOGO_IMAGE}
                alt="Логотип Комплекс-бар"
                className="object-contain rounded-full"
                style={{ width: '189px', height: '189px' }}
              />
            </div>
          </div>

          {/* yellow accent badge */}
          <div className="inline-flex items-center gap-2 bg-brand-yellow px-3 py-1 mb-3">
            <Icon name="Tag" size={13} className="text-brand-gray" />
            <span className="text-brand-gray text-[10px] sm:text-xs font-bold uppercase tracking-widest">Акция</span>
          </div>

          <h1 className="font-display font-bold leading-[1.15] text-lg sm:text-2xl tracking-tight text-brand-gray">
            Мы рады представить вам уникальное предложение, которое поможет вашему новому предприятию выгодно
            стартовать на рынке. Наша компания предлагает <span className="text-brand-red">акцию на покупку
            высококачественного фарфора, столовых приборов и кухонного инвентаря</span>
            <span className="align-super text-brand-red text-sm sm:text-base">*</span>
          </h1>
        </header>

        {/* thin red divider */}
        <div className="h-px bg-brand-red/20 mx-8 sm:mx-12" />

        {/* ===== BODY: 2 columns ===== */}
        <main className="relative flex-1 bg-brand-lightgray px-8 sm:px-12 py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* visual */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-2 border-2 border-brand-red/15" />
            <img
              src={DISH_IMAGE}
              alt="Премиальный рельефный сервиз"
              className="relative w-full h-full object-cover aspect-[3/4]"
            />

          </div>

          {/* benefits */}
          <ul className="flex flex-col gap-4 sm:gap-5">
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
                  <h3 className="font-display text-lg sm:text-2xl font-semibold leading-tight text-brand-gray">
                    {b.title}
                  </h3>
                  <p className="text-brand-gray/60 text-xs sm:text-sm leading-snug mt-0.5">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>

        {/* ===== CTA: red bg ===== */}
        <section className="relative bg-brand-red text-white px-8 sm:px-12 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                Свяжитесь с менеджером
              </p>
              <p className="text-white/70 text-xs sm:text-sm">
                для подбора комплекта под ваше заведение
              </p>
            </div>
            <div className="space-y-1.5 text-sm sm:text-base font-medium">
              <a href="tel:+79061715498" className="flex items-center gap-2.5 hover:text-brand-yellow transition-colors">
                <Icon name="Phone" size={15} /> +7 (906) 171-54-98
              </a>
              <a href="mailto:volgoglass@mail.ru" className="flex items-center gap-2.5 hover:text-brand-yellow transition-colors">
                <Icon name="Mail" size={15} /> volgoglass@mail.ru
              </a>
              <a href="https://complexbar.ru" className="flex items-center gap-2.5 hover:text-brand-yellow transition-colors">
                <Icon name="Globe" size={15} /> complexbar.ru
              </a>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="relative bg-white px-8 sm:px-12 py-2.5 text-center border-t border-brand-red/10">
          <p className="text-xs sm:text-sm text-brand-gray/60 leading-snug">
            *Список стаканов для подарка запрашивайте у менеджера. Количество подарков ограничено.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;