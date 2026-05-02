import { QRCodeSVG } from 'qrcode.react';

const OGRN = '319774600312847';
const INN = '771234567890';
const FIO = 'Белозеров Максим Валерьевич';
const REG_DATE = '02.05.2026';
const DOC_NUM = 'Р61003-ЕКБ-2026-00847';

const qrData = `https://egrul.nalog.ru/?t=ip&ogrn=${OGRN}&inn=${INN}&name=${encodeURIComponent(FIO)}&date=${REG_DATE}`;

const Index = () => {
  const handlePdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#12121f] flex flex-col items-center justify-center p-6 print:p-0 print:bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap');

        .cert-wrap {
          font-family: 'Cormorant Garamond', serif;
          background: #fdf8ee;
          position: relative;
          overflow: hidden;
          width: 100%;
          max-width: 794px;
        }

        .cert-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8943c' fill-opacity='0.025'%3E%3Cpath d='M40 0L45 15L60 15L48 24L53 39L40 30L27 39L32 24L20 15L35 15Z'/%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .outer-frame {
          border: 4px double #b8943c;
          outline: 1.5px solid #e8c97a;
          outline-offset: -8px;
          box-shadow: 0 0 0 1px #8b6914, 0 8px 60px rgba(0,0,0,0.5), inset 0 0 60px rgba(184,142,60,0.04);
        }

        .inner-frame {
          border: 1px solid rgba(184,142,60,0.35);
          margin: 16px;
        }

        .gold-line {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #8b6914 15%, #e8c97a 40%, #c9a84c 50%, #e8c97a 60%, #8b6914 85%, transparent 100%);
        }

        .gold-line-thin {
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, rgba(184,142,60,0.5) 20%, rgba(232,201,122,0.8) 50%, rgba(184,142,60,0.5) 80%, transparent 100%);
          margin: 3px 0;
        }

        .gold-title {
          background: linear-gradient(180deg, #e8c97a 0%, #8b6914 45%, #c9a84c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 1px 1px rgba(139,105,20,0.3));
        }

        .lbl {
          font-family: 'Montserrat', sans-serif;
          font-size: 7.5px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: #8b6914;
          margin-bottom: 2px;
        }

        .val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-weight: 600;
          color: #1a0f00;
          border-bottom: 1px solid rgba(184,142,60,0.4);
          padding-bottom: 2px;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-28deg);
          font-family: 'Cormorant Garamond', serif;
          font-size: 100px;
          font-weight: 700;
          color: rgba(184,142,60,0.035);
          white-space: nowrap;
          pointer-events: none;
          z-index: 0;
          letter-spacing: 0.15em;
          user-select: none;
        }

        .seal {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 2.5px solid #b8943c;
          box-shadow: 0 0 0 1px #e8c97a, 0 0 0 4px #b8943c, 0 0 0 5px #e8c97a, 0 4px 20px rgba(184,142,60,0.3);
          background: radial-gradient(circle at 40% 35%, rgba(255,255,255,0.98) 0%, rgba(249,244,232,0.96) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
        }

        .corner-dec {
          position: absolute;
          width: 70px;
          height: 70px;
        }

        .sign-line {
          border-bottom: 1px solid rgba(184,142,60,0.6);
          width: 150px;
          margin-left: auto;
          margin-bottom: 3px;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeInUp 0.9s ease-out forwards; }

        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body, html { background: white !important; margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .cert-wrap { max-width: 100% !important; box-shadow: none !important; }
          @page { margin: 0.5cm; size: A4; }
        }
      `}</style>

      {/* Кнопки */}
      <div className="no-print flex gap-3 mb-5">
        <button
          onClick={() => window.print()}
          style={{ fontFamily: 'Montserrat', fontSize: '10px', letterSpacing: '0.2em', padding: '8px 24px', border: '1px solid #b8943c', color: '#b8943c', background: 'transparent', cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.3s' }}
          onMouseOver={e => { (e.target as HTMLButtonElement).style.background = '#b8943c'; (e.target as HTMLButtonElement).style.color = '#fff'; }}
          onMouseOut={e => { (e.target as HTMLButtonElement).style.background = 'transparent'; (e.target as HTMLButtonElement).style.color = '#b8943c'; }}
        >
          Распечатать
        </button>
        <button
          onClick={handlePdf}
          style={{ fontFamily: 'Montserrat', fontSize: '10px', letterSpacing: '0.2em', padding: '8px 24px', border: '1px solid #b8943c', color: '#fff', background: '#b8943c', cursor: 'pointer', textTransform: 'uppercase', transition: 'all 0.3s' }}
          onMouseOver={e => { (e.target as HTMLButtonElement).style.background = '#8b6914'; }}
          onMouseOut={e => { (e.target as HTMLButtonElement).style.background = '#b8943c'; }}
        >
          Сохранить в PDF
        </button>
      </div>
      <div className="no-print mb-4" style={{ fontFamily: 'Montserrat', fontSize: '9px', color: '#b8943c', letterSpacing: '0.12em', textAlign: 'center', opacity: 0.8 }}>
        При сохранении — выберите «Сохранить как PDF» в диалоге печати
      </div>

      {/* Свидетельство */}
      <div className="cert-wrap outer-frame fade-in">
        <div className="watermark">РОССИЯ</div>

        {/* Угловые декоры */}
        <svg className="corner-dec" style={{ position: 'absolute', top: 10, left: 10 }} viewBox="0 0 70 70" fill="none">
          <path d="M0 0 L70 0 L70 9 L9 9 L9 70 L0 70 Z" fill="#b8943c" opacity="0.55"/>
          <path d="M0 0 L46 0 L46 5 L5 5 L5 46 L0 46 Z" fill="#e8c97a" opacity="0.45"/>
          <circle cx="14" cy="14" r="3.5" fill="#c9a84c" opacity="0.8"/>
          <circle cx="14" cy="14" r="1.5" fill="#e8c97a"/>
        </svg>
        <svg className="corner-dec" style={{ position: 'absolute', top: 10, right: 10, transform: 'scaleX(-1)' }} viewBox="0 0 70 70" fill="none">
          <path d="M0 0 L70 0 L70 70 L61 70 L61 9 L0 9 Z" fill="#b8943c" opacity="0.55"/>
          <path d="M24 0 L70 0 L70 46 L65 46 L65 5 L24 5 Z" fill="#e8c97a" opacity="0.45"/>
          <circle cx="56" cy="14" r="3.5" fill="#c9a84c" opacity="0.8"/>
          <circle cx="56" cy="14" r="1.5" fill="#e8c97a"/>
        </svg>
        <svg className="corner-dec" style={{ position: 'absolute', bottom: 10, left: 10, transform: 'scaleY(-1)' }} viewBox="0 0 70 70" fill="none">
          <path d="M0 0 L70 0 L70 9 L9 9 L9 70 L0 70 Z" fill="#b8943c" opacity="0.55"/>
          <path d="M0 0 L46 0 L46 5 L5 5 L5 46 L0 46 Z" fill="#e8c97a" opacity="0.45"/>
          <circle cx="14" cy="56" r="3.5" fill="#c9a84c" opacity="0.8"/>
          <circle cx="14" cy="56" r="1.5" fill="#e8c97a"/>
        </svg>
        <svg className="corner-dec" style={{ position: 'absolute', bottom: 10, right: 10, transform: 'scale(-1,-1)' }} viewBox="0 0 70 70" fill="none">
          <path d="M0 0 L70 0 L70 70 L61 70 L61 9 L0 9 Z" fill="#b8943c" opacity="0.55"/>
          <path d="M24 0 L70 0 L70 46 L65 46 L65 5 L24 5 Z" fill="#e8c97a" opacity="0.45"/>
          <circle cx="56" cy="56" r="3.5" fill="#c9a84c" opacity="0.8"/>
          <circle cx="56" cy="56" r="1.5" fill="#e8c97a"/>
        </svg>

        <div className="inner-frame relative z-10 p-8">

          {/* Шапка */}
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>

            {/* Герб */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <svg width="76" height="88" viewBox="0 0 100 116" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e8c97a"/>
                    <stop offset="50%" stopColor="#b8943c"/>
                    <stop offset="100%" stopColor="#e8c97a"/>
                  </linearGradient>
                  <linearGradient id="g2" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c9a84c"/>
                    <stop offset="100%" stopColor="#8b6914"/>
                  </linearGradient>
                </defs>
                {/* Щит */}
                <path d="M50 6 C24 6 10 21 10 38 C10 66 28 88 50 98 C72 88 90 66 90 38 C90 21 76 6 50 6Z" fill="url(#g1)" stroke="#8b6914" strokeWidth="1.2"/>
                <path d="M50 12 C28 12 16 25 16 38 C16 64 32 84 50 93 C68 84 84 64 84 38 C84 25 72 12 50 12Z" fill="#8b0000" opacity="0.85"/>
                {/* Двуглавый орёл - упрощённый */}
                <text x="50" y="68" textAnchor="middle" fontSize="48" fill="#c9a84c" fontFamily="serif" opacity="0.95">⚜</text>
                {/* Короны */}
                <path d="M32 10 L37 2 L50 6 L63 2 L68 10" fill="url(#g1)" stroke="#8b6914" strokeWidth="0.8"/>
                <circle cx="37" cy="2" r="2.2" fill="#e8c97a"/>
                <circle cx="50" cy="0" r="2.8" fill="#e8c97a"/>
                <circle cx="63" cy="2" r="2.2" fill="#e8c97a"/>
              </svg>
            </div>

            <div className="gold-line" style={{ marginBottom: '10px' }} />

            <p style={{ fontFamily: 'Montserrat', fontSize: '8px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#5a3e0a', marginBottom: '3px' }}>
              Российская Федерация
            </p>
            <p style={{ fontFamily: 'Montserrat', fontSize: '7.5px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8b6914', marginBottom: '3px' }}>
              Федеральная налоговая служба
            </p>
            <p style={{ fontFamily: 'Montserrat', fontSize: '7px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b8943c', marginBottom: '10px' }}>
              Министерство финансов Российской Федерации
            </p>

            <div className="gold-line-thin" />
            <div className="gold-line" style={{ margin: '2px 0 14px' }} />

            {/* Заголовок — фиксированный, не обрезается */}
            <div style={{ overflow: 'visible', whiteSpace: 'nowrap', textAlign: 'center' }}>
              <span className="gold-title" style={{
                fontFamily: 'Cormorant Garamond',
                fontWeight: 700,
                fontSize: '42px',
                lineHeight: 1.1,
                display: 'inline-block',
                letterSpacing: '0.08em',
              }}>
                СВИДЕТЕЛЬСТВО
              </span>
            </div>

            <p style={{ fontFamily: 'Montserrat', fontSize: '11px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8b6914', marginTop: '4px', marginBottom: '2px' }}>
              о государственной регистрации
            </p>
            <p style={{ fontFamily: 'Montserrat', fontSize: '9px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8943c', marginBottom: '2px' }}>
              физического лица в качестве индивидуального предпринимателя
            </p>

            <div className="gold-line" style={{ margin: '12px 0 0' }} />
            <div className="gold-line-thin" />
          </div>

          {/* Номер документа */}
          <div style={{ textAlign: 'center', marginBottom: '16px' }}>
            <p style={{ fontFamily: 'Montserrat', fontSize: '8px', fontWeight: 700, letterSpacing: '0.2em', color: '#8b6914', textTransform: 'uppercase', marginBottom: '2px' }}>
              Номер документа
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '17px', fontWeight: 600, color: '#1a0f00', letterSpacing: '0.1em' }}>
              {DOC_NUM}
            </p>
          </div>

          {/* Вводный текст */}
          <p style={{ textAlign: 'center', fontFamily: 'Cormorant Garamond', fontSize: '14px', fontStyle: 'italic', color: '#2a1f06', lineHeight: 1.7, marginBottom: '18px', padding: '0 10px' }}>
            Настоящим свидетельством удостоверяется, что в соответствии с Федеральным законом
            от 08.08.2001 №&nbsp;129-ФЗ «О государственной регистрации юридических лиц
            и индивидуальных предпринимателей» произведена государственная регистрация
          </p>

          {/* ФИО */}
          <div style={{ textAlign: 'center', marginBottom: '20px', padding: '12px 0', borderTop: '1px solid rgba(184,142,60,0.35)', borderBottom: '1px solid rgba(184,142,60,0.35)', background: 'linear-gradient(90deg, transparent, rgba(184,142,60,0.05), transparent)' }}>
            <p className="lbl" style={{ marginBottom: '4px' }}>Фамилия, Имя, Отчество</p>
            <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '30px', fontWeight: 700, color: '#1a0f00', letterSpacing: '0.04em' }}>
              {FIO}
            </p>
          </div>

          {/* Поля в два столбца */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 40px', marginBottom: '8px' }}>
            <div>
              <p className="lbl">ОГРНИП</p>
              <p className="val">{OGRN}</p>

              <p className="lbl">ИНН физического лица</p>
              <p className="val">{INN}</p>

              <p className="lbl">Дата рождения</p>
              <p className="val">07 сентября 2001 года</p>

              <p className="lbl">Гражданство</p>
              <p className="val">Российская Федерация</p>
            </div>
            <div>
              <p className="lbl">Серия и номер документа, удостоверяющего личность</p>
              <p className="val">Паспорт РФ: 65 04 № 847291</p>

              <p className="lbl">Дата государственной регистрации</p>
              <p className="val">02 мая 2026 года</p>

              <p className="lbl">Регистрирующий орган</p>
              <p className="val">УФНС России по г. Екатеринбургу</p>

              <p className="lbl">Код налогового органа</p>
              <p className="val">6670</p>
            </div>
          </div>

          {/* Адрес */}
          <div style={{ marginBottom: '10px' }}>
            <p className="lbl">Адрес места жительства (регистрация)</p>
            <p className="val">623700, г. Екатеринбург, ул. Юмашева, д. 15, кв. 121</p>
          </div>

          {/* ОКВЭД */}
          <div style={{ marginBottom: '10px' }}>
            <p className="lbl">Основной вид экономической деятельности (ОКВЭД 2)</p>
            <p className="val">47.91 — Торговля розничная по почте или по информационно-коммуникационной сети Интернет</p>
          </div>

          {/* Система налогообложения */}
          <div style={{ marginBottom: '10px' }}>
            <p className="lbl">Система налогообложения</p>
            <p className="val">Упрощённая система налогообложения (УСН), ставка 6%</p>
          </div>

          <div className="gold-line" style={{ margin: '16px 0' }} />

          {/* Нижняя часть: печать + подпись + QR */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px' }}>

            {/* Печать */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', minWidth: '130px' }}>
              <div className="seal">
                <div style={{ textAlign: 'center', zIndex: 1 }}>
                  <div style={{ fontSize: '30px', color: '#8b0000', lineHeight: 1 }}>⚜</div>
                  <div style={{ fontFamily: 'Montserrat', fontSize: '5.5px', fontWeight: 700, color: '#8b6914', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2px', lineHeight: 1.4 }}>
                    ФНС<br/>РОССИЯ
                  </div>
                </div>
                <svg style={{ position: 'absolute', width: '100%', height: '100%' }} viewBox="0 0 120 120">
                  <defs>
                    <path id="cp" d="M 60 60 m -47 0 a 47 47 0 1 1 94 0 a 47 47 0 1 1 -94 0"/>
                  </defs>
                  <text fontSize="6.5" fill="#8b6914" fontFamily="Montserrat" fontWeight="700" letterSpacing="2.2">
                    <textPath href="#cp">✦ ФЕДЕРАЛЬНАЯ НАЛОГОВАЯ СЛУЖБА ✦ РФ ✦</textPath>
                  </text>
                </svg>
              </div>
              <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#8b6914', letterSpacing: '0.12em', textTransform: 'uppercase' }}>М.П.</p>
            </div>

            {/* Подписи */}
            <div style={{ flex: 1 }}>
              <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '13px', fontStyle: 'italic', color: '#2a1f06', lineHeight: 1.7, textAlign: 'center', marginBottom: '16px' }}>
                В Единый государственный реестр индивидуальных предпринимателей
                внесена запись о государственной регистрации за ОГРНИП
              </p>
              <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '20px', fontWeight: 700, color: '#8b6914', textAlign: 'center', letterSpacing: '0.08em', marginBottom: '16px' }}>
                {OGRN}
              </p>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <p className="lbl" style={{ marginBottom: '2px' }}>Начальник отдела регистрации</p>
                  <div style={{ borderBottom: '1px solid rgba(184,142,60,0.5)', width: '160px', marginBottom: '3px', paddingBottom: '2px' }}>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '16px', fontStyle: 'italic', color: '#8b6914', paddingLeft: '4px' }}>Смирнова А.В.</p>
                  </div>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#b8943c', letterSpacing: '0.1em' }}>подпись / расшифровка</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p className="lbl" style={{ marginBottom: '2px' }}>Дата выдачи</p>
                  <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '17px', fontWeight: 600, color: '#1a0f00' }}>
                    02 мая 2026 года
                  </p>
                </div>
              </div>
            </div>

            {/* QR-код */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', minWidth: '100px' }}>
              <div style={{ padding: '6px', border: '1.5px solid #b8943c', background: '#fff', boxShadow: '0 2px 10px rgba(184,142,60,0.2)' }}>
                <QRCodeSVG
                  value={qrData}
                  size={88}
                  bgColor="#ffffff"
                  fgColor="#1a0f00"
                  level="M"
                />
              </div>
              <p style={{ fontFamily: 'Montserrat', fontSize: '6.5px', color: '#8b6914', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', maxWidth: '100px', lineHeight: 1.4 }}>
                Проверить на egrul.nalog.ru
              </p>
            </div>
          </div>

          {/* Подвал */}
          <div style={{ marginTop: '16px' }}>
            <div className="gold-line" />
            <div className="gold-line-thin" />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
              <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#b8943c', letterSpacing: '0.12em' }}>
                ФОРМА № Р61003 · ЕГРИП
              </p>
              <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#b8943c', letterSpacing: '0.12em' }}>
                ✦ РОССИЙСКАЯ ФЕДЕРАЦИЯ ✦
              </p>
              <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#b8943c', letterSpacing: '0.12em' }}>
                ИНН {INN} · ОГРНИП {OGRN}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
