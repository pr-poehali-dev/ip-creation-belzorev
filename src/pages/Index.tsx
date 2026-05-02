import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useRef, useState } from 'react';

const OGRN = '319774600312847';
const INN = '771234567890';
const FIO = 'Белозеров Максим Валерьевич';
const DOC_NUM = 'Р61003-ЕКБ-2026-00847';
const qrData = `https://egrul.nalog.ru/?t=ip&ogrn=${OGRN}&inn=${INN}`;

const A4_W = 794;
const A4_H = 1123;

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setScale(Math.min(1, w / A4_W));
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: '#12121f', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '24px 16px' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap');

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
        }
        .lbl {
          font-family: 'Montserrat', sans-serif;
          font-size: 8px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          color: #8b6914;
          margin-bottom: 2px;
          display: block;
        }
        .val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 15px;
          font-weight: 600;
          color: #1a0f00;
          border-bottom: 1px solid rgba(184,142,60,0.4);
          padding-bottom: 2px;
          margin-bottom: 12px;
          display: block;
          line-height: 1.35;
        }
        .cert-bg {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23b8943c' fill-opacity='0.022'%3E%3Cpath d='M40 0L45 15L60 15L48 24L53 39L40 30L27 39L32 24L20 15L35 15Z'/%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }
        .wm {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-28deg);
          font-family: 'Cormorant Garamond', serif;
          font-size: 110px;
          font-weight: 700;
          color: rgba(184,142,60,0.032);
          white-space: nowrap;
          pointer-events: none;
          z-index: 0;
          letter-spacing: 0.15em;
          user-select: none;
        }
        .seal {
          width: 118px; height: 118px; border-radius: 50%;
          border: 2.5px solid #b8943c;
          box-shadow: 0 0 0 1px #e8c97a, 0 0 0 4px #b8943c, 0 0 0 5px #e8c97a, 0 4px 18px rgba(184,142,60,0.3);
          background: radial-gradient(circle at 40% 35%, #fff 0%, #fdf8ee 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; flex-shrink: 0;
        }
        .corner {
          position: absolute; width: 68px; height: 68px;
        }
        @media print {
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body, html { background: white !important; margin: 0; padding: 0; }
          .no-print { display: none !important; }
          .cert-scaler { transform: none !important; width: ${A4_W}px !important; height: auto !important; }
          .cert-outer-wrap { width: ${A4_W}px !important; height: auto !important; }
          @page { margin: 0; size: A4; }
        }
      `}</style>

      {/* Кнопки */}
      <div className="no-print" style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
        <button onClick={() => window.print()} style={{ fontFamily: 'Montserrat', fontSize: '10px', letterSpacing: '0.2em', padding: '9px 22px', border: '1px solid #b8943c', color: '#b8943c', background: 'transparent', cursor: 'pointer', textTransform: 'uppercase' }}>
          Распечатать
        </button>
        <button onClick={() => window.print()} style={{ fontFamily: 'Montserrat', fontSize: '10px', letterSpacing: '0.2em', padding: '9px 22px', border: '1px solid #b8943c', color: '#fff', background: '#b8943c', cursor: 'pointer', textTransform: 'uppercase' }}>
          Сохранить в PDF
        </button>
      </div>
      <div className="no-print" style={{ fontFamily: 'Montserrat', fontSize: '9px', color: 'rgba(184,142,60,0.7)', letterSpacing: '0.1em', marginBottom: '16px' }}>
        При сохранении выберите «Сохранить как PDF» в диалоге печати
      </div>

      {/* Контейнер для масштабирования */}
      <div ref={containerRef} style={{ width: '100%', maxWidth: `${A4_W}px` }}>
        <div className="cert-outer-wrap" style={{ width: `${A4_W}px`, height: `${A4_H * scale}px` }}>
          <div
            className="cert-scaler"
            style={{
              width: `${A4_W}px`,
              transformOrigin: 'top left',
              transform: `scale(${scale})`,
            }}
          >
            {/* Само свидетельство — фиксированная A4 ширина */}
            <div style={{
              width: `${A4_W}px`,
              background: '#fdf8ee',
              border: '4px double #b8943c',
              outline: '2px solid #e8c97a',
              outlineOffset: '-10px',
              boxShadow: '0 0 0 1px #8b6914, 0 8px 60px rgba(0,0,0,0.5)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div className="cert-bg" />
              <div className="wm">РОССИЯ</div>

              {/* Угловые декоры */}
              {[
                { top: 10, left: 10, t: 'none' },
                { top: 10, right: 10, t: 'scaleX(-1)' },
                { bottom: 10, left: 10, t: 'scaleY(-1)' },
                { bottom: 10, right: 10, t: 'scale(-1,-1)' },
              ].map((pos, i) => (
                <svg key={i} className="corner" style={{ position: 'absolute', ...pos, transform: pos.t }} viewBox="0 0 68 68" fill="none">
                  <path d="M0 0 L68 0 L68 9 L9 9 L9 68 L0 68 Z" fill="#b8943c" opacity="0.55"/>
                  <path d="M0 0 L44 0 L44 5 L5 5 L5 44 L0 44 Z" fill="#e8c97a" opacity="0.45"/>
                  <circle cx="14" cy="14" r="3.5" fill="#c9a84c" opacity="0.8"/>
                  <circle cx="14" cy="14" r="1.5" fill="#e8c97a"/>
                </svg>
              ))}

              {/* Внутренняя рамка и контент */}
              <div style={{ border: '1px solid rgba(184,142,60,0.35)', margin: '18px', padding: '32px 40px', position: 'relative', zIndex: 1 }}>

                {/* Шапка */}
                <div style={{ textAlign: 'center', marginBottom: '22px' }}>
                  {/* Герб */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
                    <svg width="78" height="90" viewBox="0 0 100 116" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#e8c97a"/>
                          <stop offset="50%" stopColor="#b8943c"/>
                          <stop offset="100%" stopColor="#e8c97a"/>
                        </linearGradient>
                      </defs>
                      <path d="M50 6 C24 6 10 21 10 38 C10 66 28 88 50 98 C72 88 90 66 90 38 C90 21 76 6 50 6Z" fill="url(#g1)" stroke="#8b6914" strokeWidth="1.2"/>
                      <path d="M50 12 C28 12 16 25 16 38 C16 64 32 84 50 93 C68 84 84 64 84 38 C84 25 72 12 50 12Z" fill="#8b0000" opacity="0.88"/>
                      <text x="50" y="68" textAnchor="middle" fontSize="46" fill="#c9a84c" fontFamily="serif">⚜</text>
                      <path d="M32 10 L37 2 L50 6 L63 2 L68 10" fill="url(#g1)" stroke="#8b6914" strokeWidth="0.8"/>
                      <circle cx="37" cy="2" r="2.2" fill="#e8c97a"/>
                      <circle cx="50" cy="0" r="2.8" fill="#e8c97a"/>
                      <circle cx="63" cy="2" r="2.2" fill="#e8c97a"/>
                    </svg>
                  </div>

                  <div className="gold-line" style={{ marginBottom: '10px' }}/>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '9px', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#5a3e0a', marginBottom: '3px' }}>Российская Федерация</p>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '8px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8b6914', marginBottom: '3px' }}>Федеральная налоговая служба</p>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '7px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b8943c', marginBottom: '12px' }}>Министерство финансов Российской Федерации</p>
                  <div className="gold-line-thin"/>
                  <div className="gold-line" style={{ marginBottom: '16px' }}/>

                  {/* ЗАГОЛОВОК — строго фиксированный, не переносится */}
                  <p className="gold-title" style={{
                    fontFamily: 'Cormorant Garamond',
                    fontWeight: 700,
                    fontSize: '52px',
                    lineHeight: 1.05,
                    whiteSpace: 'nowrap',
                    display: 'block',
                    letterSpacing: '0.06em',
                  }}>
                    СВИДЕТЕЛЬСТВО
                  </p>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '12px', fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8b6914', marginTop: '5px', marginBottom: '3px' }}>
                    о государственной регистрации
                  </p>
                  <p style={{ fontFamily: 'Montserrat', fontSize: '9.5px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#b8943c' }}>
                    физического лица в качестве индивидуального предпринимателя
                  </p>
                  <div className="gold-line" style={{ marginTop: '14px' }}/>
                  <div className="gold-line-thin"/>
                </div>

                {/* Номер документа */}
                <div style={{ textAlign: 'center', marginBottom: '18px' }}>
                  <span className="lbl" style={{ display: 'inline-block' }}>Номер документа</span>
                  <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '18px', fontWeight: 600, color: '#1a0f00', letterSpacing: '0.1em' }}>{DOC_NUM}</p>
                </div>

                {/* Вводный текст */}
                <p style={{ textAlign: 'center', fontFamily: 'Cormorant Garamond', fontSize: '14.5px', fontStyle: 'italic', color: '#2a1f06', lineHeight: 1.75, marginBottom: '18px' }}>
                  Настоящим свидетельством удостоверяется, что в соответствии с Федеральным законом от 08.08.2001 №&nbsp;129-ФЗ
                  «О государственной регистрации юридических лиц и индивидуальных предпринимателей» произведена государственная регистрация
                </p>

                {/* ФИО */}
                <div style={{ textAlign: 'center', margin: '0 0 20px', padding: '12px 0', borderTop: '1px solid rgba(184,142,60,0.35)', borderBottom: '1px solid rgba(184,142,60,0.35)', background: 'linear-gradient(90deg,transparent,rgba(184,142,60,0.05),transparent)' }}>
                  <span className="lbl" style={{ display: 'inline-block', marginBottom: '4px' }}>Фамилия, Имя, Отчество</span>
                  <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '30px', fontWeight: 700, color: '#1a0f00', letterSpacing: '0.04em' }}>{FIO}</p>
                </div>

                {/* Поля */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 44px', marginBottom: '8px' }}>
                  <div>
                    <span className="lbl">ОГРНИП</span><span className="val">{OGRN}</span>
                    <span className="lbl">ИНН физического лица</span><span className="val">{INN}</span>
                    <span className="lbl">Дата рождения</span><span className="val">07 сентября 2001 года</span>
                    <span className="lbl">Гражданство</span><span className="val">Российская Федерация</span>
                  </div>
                  <div>
                    <span className="lbl">Документ, удостоверяющий личность</span><span className="val">Паспорт РФ: 65 04 № 847291</span>
                    <span className="lbl">Дата государственной регистрации</span><span className="val">02 мая 2026 года</span>
                    <span className="lbl">Регистрирующий орган</span><span className="val">УФНС России по г. Екатеринбургу</span>
                    <span className="lbl">Код налогового органа</span><span className="val">6670</span>
                  </div>
                </div>

                <span className="lbl">Адрес места жительства</span>
                <span className="val">623700, г. Екатеринбург, ул. Юмашева, д. 15, кв. 121</span>

                <span className="lbl">Основной вид экономической деятельности (ОКВЭД 2)</span>
                <span className="val">47.91 — Торговля розничная по почте или по информационно-коммуникационной сети Интернет</span>

                <span className="lbl">Система налогообложения</span>
                <span className="val">Упрощённая система налогообложения (УСН), ставка 6%</span>

                <div className="gold-line" style={{ margin: '18px 0' }}/>

                {/* Низ: печать + подписи + QR */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px' }}>

                  {/* Печать */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div className="seal">
                      <div style={{ textAlign: 'center', zIndex: 1 }}>
                        <div style={{ fontSize: '30px', color: '#8b0000', lineHeight: 1 }}>⚜</div>
                        <div style={{ fontFamily: 'Montserrat', fontSize: '5.5px', fontWeight: 700, color: '#8b6914', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '2px', lineHeight: 1.45 }}>ФНС<br/>РОССИЯ</div>
                      </div>
                      <svg style={{ position: 'absolute', width: '100%', height: '100%' }} viewBox="0 0 118 118">
                        <defs><path id="cp" d="M 59 59 m -46 0 a 46 46 0 1 1 92 0 a 46 46 0 1 1 -92 0"/></defs>
                        <text fontSize="6.5" fill="#8b6914" fontFamily="Montserrat" fontWeight="700" letterSpacing="2">
                          <textPath href="#cp">✦ ФЕДЕРАЛЬНАЯ НАЛОГОВАЯ СЛУЖБА ✦ РФ ✦</textPath>
                        </text>
                      </svg>
                    </div>
                    <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#8b6914', letterSpacing: '0.14em', textTransform: 'uppercase' }}>М.П.</p>
                  </div>

                  {/* Центр */}
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '13.5px', fontStyle: 'italic', color: '#2a1f06', lineHeight: 1.7, textAlign: 'center', marginBottom: '10px' }}>
                      В Единый государственный реестр индивидуальных предпринимателей внесена запись о государственной регистрации за ОГРНИП
                    </p>
                    <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '22px', fontWeight: 700, color: '#8b6914', textAlign: 'center', letterSpacing: '0.08em', marginBottom: '20px' }}>
                      {OGRN}
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                      <div>
                        <span className="lbl" style={{ marginBottom: '6px' }}>Начальник отдела регистрации</span>
                        <div style={{ borderBottom: '1px solid rgba(184,142,60,0.55)', width: '170px', marginBottom: '3px', paddingBottom: '3px' }}>
                          <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '17px', fontStyle: 'italic', color: '#8b6914', paddingLeft: '6px' }}>Смирнова А.В.</p>
                        </div>
                        <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#b8943c', letterSpacing: '0.1em' }}>подпись / расшифровка подписи</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <span className="lbl" style={{ display: 'block', textAlign: 'right', marginBottom: '3px' }}>Дата выдачи</span>
                        <p style={{ fontFamily: 'Cormorant Garamond', fontSize: '17px', fontWeight: 600, color: '#1a0f00' }}>02 мая 2026 года</p>
                      </div>
                    </div>
                  </div>

                  {/* QR */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                    <div style={{ padding: '7px', border: '1.5px solid #b8943c', background: '#fff', boxShadow: '0 2px 10px rgba(184,142,60,0.2)' }}>
                      <QRCodeSVG value={qrData} size={90} bgColor="#ffffff" fgColor="#1a0f00" level="M"/>
                    </div>
                    <p style={{ fontFamily: 'Montserrat', fontSize: '6.5px', color: '#8b6914', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', maxWidth: '104px', lineHeight: 1.5 }}>
                      Проверить на<br/>egrul.nalog.ru
                    </p>
                  </div>
                </div>

                {/* Подвал */}
                <div style={{ marginTop: '18px' }}>
                  <div className="gold-line"/>
                  <div className="gold-line-thin"/>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                    <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#b8943c', letterSpacing: '0.12em' }}>ФОРМА № Р61003 · ЕГРИП</p>
                    <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#b8943c', letterSpacing: '0.12em' }}>✦ РОССИЙСКАЯ ФЕДЕРАЦИЯ ✦</p>
                    <p style={{ fontFamily: 'Montserrat', fontSize: '7px', color: '#b8943c', letterSpacing: '0.12em' }}>ИНН {INN} · ОГРНИП {OGRN}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
