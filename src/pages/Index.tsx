import Icon from '@/components/ui/icon';

const DISH_IMAGE =
  'https://cdn.poehali.dev/projects/cff7e38b-d3d7-405f-8dee-c5199949622d/files/b92c68bf-ee5e-4065-b725-0e1fa2f06b46.jpg';

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
    <div className="min-h-screen w-full bg-neutral-200 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* A4 slide */}
      <div
        className="relative w-full max-w-[794px] aspect-[210/297] bg-graphite text-neutral-100 overflow-hidden shadow-2xl flex flex-col"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 0%, rgba(201,162,75,0.10), transparent 45%), radial-gradient(circle at 90% 100%, rgba(201,162,75,0.08), transparent 40%)',
        }}
      >
        {/* gold frame */}
        <div className="pointer-events-none absolute inset-[14px] border border-gold/30" />

        {/* ===== HEADER ===== */}
        <header className="relative px-8 sm:px-12 pt-10 sm:pt-12">
          <div className="flex items-center justify-between gap-4 mb-6 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold tracking-[0.35em] text-[10px] sm:text-xs uppercase font-semibold">
                Волгоград
              </span>
            </div>
            <div className="shrink-0 rounded-full bg-white p-1 shadow-lg ring-1 ring-gold/40">
              <img
                src={LOGO_IMAGE}
                alt="Логотип Комплекс-бар"
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain rounded-full"
              />
            </div>
          </div>

          <p className="text-gold font-display italic text-2xl sm:text-3xl mb-1">Акция</p>
          <h1 className="font-display font-bold leading-[0.98] text-3xl sm:text-5xl tracking-tight">
            При открытии заведения —
            <br />
            <span className="text-gold">стаканы для воды</span> в подарок
            <span className="align-super text-gold text-lg sm:text-2xl">*</span>
          </h1>
        </header>

        {/* ===== BODY: 2 columns ===== */}
        <main className="relative flex-1 px-8 sm:px-12 py-7 sm:py-9 grid grid-cols-1 sm:grid-cols-2 gap-7 sm:gap-9 items-center">
          {/* visual */}
          <div className="relative animate-scale-in">
            <div className="absolute -inset-3 border border-gold/25" />
            <img
              src={DISH_IMAGE}
              alt="Премиальный рельефный сервиз"
              className="relative w-full h-full object-cover aspect-[3/4] grayscale-[0.05]"
            />
            <div className="absolute bottom-3 left-3 bg-graphite/80 backdrop-blur px-3 py-1.5 border-l-2 border-gold">
              <span className="text-[10px] sm:text-xs tracking-widest uppercase text-neutral-200">
                Премиальная подача
              </span>
            </div>
          </div>

          {/* benefits */}
          <ul className="flex flex-col gap-5">
            {benefits.map((b, i) => (
              <li
                key={b.title}
                className="flex gap-4 animate-fade-in"
                style={{ animationDelay: `${0.1 + i * 0.12}s`, animationFillMode: 'both' }}
              >
                <div className="shrink-0 mt-0.5 h-9 w-9 flex items-center justify-center border border-gold/40 text-gold">
                  <Icon name={b.icon} size={18} />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold leading-tight">
                    {b.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-snug mt-0.5">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>

        {/* ===== CTA ===== */}
        <section className="relative bg-gold text-graphite px-8 sm:px-12 py-6 sm:py-7">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold leading-tight">
                Свяжитесь с менеджером
              </p>
              <p className="text-graphite/70 text-xs sm:text-sm">
                для подбора комплекта под ваше заведение
              </p>
            </div>
            <div className="space-y-1.5 text-sm sm:text-base font-medium">
              <a href="tel:+79061715498" className="flex items-center gap-2.5 hover:opacity-70 transition-opacity">
                <Icon name="Phone" size={16} /> +7 (906) 171-54-98
              </a>
              <a href="mailto:volgoglass@mail.ru" className="flex items-center gap-2.5 hover:opacity-70 transition-opacity">
                <Icon name="Mail" size={16} /> volgoglass@mail.ru
              </a>
              <a href="https://kompleks-bar.ru" className="flex items-center gap-2.5 hover:opacity-70 transition-opacity">
                <Icon name="Globe" size={16} /> kompleks-bar.ru
              </a>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="relative bg-graphite px-8 sm:px-12 py-3 text-center">
          <p className="text-[9px] sm:text-[10px] text-neutral-500 leading-snug">
            *Список стаканов для подарка запрашивайте у менеджера. Количество подарков ограничено.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;