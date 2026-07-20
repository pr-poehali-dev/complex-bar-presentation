import Icon from '@/components/ui/icon';
import SERVING_IMAGE from '@/assets/serving-table.jpg';

const LOGO_IMAGE =
  'https://cdn.poehali.dev/projects/cff7e38b-d3d7-405f-8dee-c5199949622d/bucket/187e8c8a-5e8a-45b9-8539-3ed94d3a7dd8.png';

const conditions = [
  {
    icon: 'LayoutGrid',
    title: 'Комплексное оснащение',
    text: 'Партнёрство с «Комплекс-Бар» — всё для вашего заведения в одном месте.',
  },
  {
    icon: 'ListChecks',
    title: 'Ассортимент на выбор',
    text: 'Линейка стаканов под ваш формат — уточняйте у менеджера.',
  },
  {
    icon: 'Gift',
    title: 'Стаканы в подарок',
    text: 'Дарим стаканы для воды при старте сотрудничества.',
  },
  {
    icon: 'Rocket',
    title: 'Поддержка запуска',
    text: 'Консультации, подбор позиций и логистика на этапе открытия.',
  },
];

const FullPhoto = () => {
  return (
    <div className="min-h-screen w-full bg-neutral-300 flex items-center justify-center p-4 sm:p-8 font-sans">
      {/* A4 slide, photo edge-to-edge */}
      <div className="relative w-full max-w-[794px] aspect-[210/297] bg-white text-white overflow-hidden shadow-2xl">
        <img
          src={SERVING_IMAGE}
          alt="Сервировка стола"
          className="absolute inset-0 w-full h-full object-cover animate-scale-in"
        />

        {/* top gradient for logo/badge readability */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
        {/* bottom gradient for text/cta readability */}
        <div className="absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

        {/* header row */}
        <div className="relative z-10 flex items-center justify-between px-8 sm:px-10 pt-6 sm:pt-8 animate-fade-in">
          <div className="inline-flex items-center gap-3 bg-brand-yellow px-5 py-2.5">
            <Icon name="Tag" size={22} className="text-brand-gray" />
            <span className="text-brand-gray text-base font-bold uppercase tracking-widest">Акция</span>
          </div>
          <div className="shrink-0 rounded-full bg-white shadow-md ring-2 ring-brand-red/30 p-0.5">
            <img
              src={LOGO_IMAGE}
              alt="Логотип Комплекс-бар"
              className="object-contain rounded-full"
              style={{ width: '189px', height: '189px' }}
            />
          </div>
        </div>

        {/* main headline over image */}
        <div className="absolute inset-x-0 bottom-[52%] z-10 px-8 sm:px-10 animate-fade-in">
          <h1 className="font-display font-black uppercase leading-[0.95] text-5xl sm:text-6xl tracking-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] -rotate-[8deg] origin-left">
            Стаканы для воды<br />
            <span className="text-brand-yellow text-6xl sm:text-7xl">бесплатно!</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/90 max-w-[80%] drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            При покупке фарфора, столовых приборов и кухонного инвентаря
            <span className="align-super text-brand-yellow text-xs">*</span>
          </p>
        </div>

        {/* conditions + CTA block */}
        <div className="absolute inset-x-0 bottom-0 z-10 px-8 sm:px-10 pb-4 sm:pb-5">
          {/* conditions */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-3">
            {conditions.map((c) => (
              <li key={c.title} className="flex items-start gap-2">
                <div className="shrink-0 mt-0.5 h-6 w-6 flex items-center justify-center bg-brand-yellow text-brand-gray">
                  <Icon name={c.icon} size={13} />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold leading-tight text-brand-yellow">
                    {c.title}
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-white/85 leading-snug">
                    {c.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 border-t border-white/20 pt-3">
            <div>
              <p className="font-display text-lg sm:text-xl font-bold leading-tight">
                Свяжитесь с менеджером
              </p>
            </div>
            <div className="space-y-0.5 text-xs sm:text-sm font-bold">
              <a href="tel:+79061715498" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Icon name="Phone" size={13} /> +7 (906) 171-54-98
              </a>
              <a href="mailto:volgoglass@mail.ru" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Icon name="Mail" size={13} /> volgoglass@mail.ru
              </a>
              <a href="https://complexbar.ru" className="flex items-center gap-2 hover:text-brand-yellow transition-colors">
                <Icon name="Globe" size={13} /> complexbar.ru
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPhoto;