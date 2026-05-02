const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1a2e] flex items-center justify-center p-6 print:p-0 print:bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&display=swap');

        .certificate {
          font-family: 'Cormorant Garamond', serif;
          background: linear-gradient(135deg, #fefefe 0%, #f9f4e8 50%, #fefefe 100%);
          position: relative;
          overflow: hidden;
        }

        .certificate::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(ellipse at 20% 20%, rgba(184,142,60,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 80%, rgba(184,142,60,0.06) 0%, transparent 60%),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8943c' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .gold-border-outer {
          border: 3px solid #b8943c;
          box-shadow: 
            0 0 0 1px #e8c97a,
            0 0 0 5px #b8943c,
            0 0 0 6px #e8c97a,
            0 0 40px rgba(184,142,60,0.2),
            inset 0 0 40px rgba(184,142,60,0.05);
        }

        .gold-ornament-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, #b8943c 20%, #e8c97a 50%, #b8943c 80%, transparent);
        }

        .gold-text {
          color: #8b6914;
          text-shadow: 0 1px 2px rgba(184,142,60,0.3);
        }

        .gold-title {
          background: linear-gradient(180deg, #c9a84c 0%, #8b6914 50%, #c9a84c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(-30deg);
          font-family: 'Cormorant Garamond', serif;
          font-size: 130px;
          font-weight: 700;
          color: rgba(184,142,60,0.04);
          white-space: nowrap;
          pointer-events: none;
          z-index: 0;
          letter-spacing: 0.1em;
        }

        .seal {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          border: 2px solid #b8943c;
          box-shadow: 0 0 0 1px #e8c97a, 0 0 0 3px #b8943c, 0 4px 20px rgba(184,142,60,0.3);
          background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(249,244,232,0.95) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-shrink: 0;
        }

        .seal-text {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }

        .heraldic-ornament {
          color: #b8943c;
          font-size: 20px;
          opacity: 0.7;
        }

        .field-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 9px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #8b6914;
        }

        .field-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 600;
          color: #1a1206;
          border-bottom: 1px solid rgba(184,142,60,0.4);
          padding-bottom: 3px;
          margin-bottom: 14px;
        }

        .corner-ornament {
          position: absolute;
          width: 60px;
          height: 60px;
          color: #b8943c;
          opacity: 0.5;
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media print {
          body { background: white !important; }
          .certificate { box-shadow: none !important; }
          .print-hide { display: none !important; }
        }
      `}</style>

      <div className="animate-fade-in w-full max-w-[820px]">
        {/* Print button */}
        <div className="print-hide text-center mb-4">
          <button
            onClick={() => window.print()}
            className="font-['Montserrat'] text-xs font-500 tracking-widest uppercase px-6 py-2 border border-[#b8943c] text-[#b8943c] hover:bg-[#b8943c] hover:text-white transition-all duration-300"
            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em' }}
          >
            Распечатать
          </button>
        </div>

        {/* Certificate */}
        <div className="certificate gold-border-outer p-10 relative" style={{ minHeight: '1000px' }}>
          {/* Watermark */}
          <div className="watermark">РОССИЯ</div>

          {/* Corner ornaments */}
          <svg className="corner-ornament" style={{ top: 14, left: 14 }} viewBox="0 0 60 60" fill="none">
            <path d="M0 0 L60 0 L60 8 L8 8 L8 60 L0 60 Z" fill="#b8943c" opacity="0.6"/>
            <path d="M0 0 L40 0 L40 4 L4 4 L4 40 L0 40 Z" fill="#e8c97a" opacity="0.5"/>
            <circle cx="12" cy="12" r="3" fill="#b8943c" opacity="0.7"/>
          </svg>
          <svg className="corner-ornament" style={{ top: 14, right: 14, transform: 'scaleX(-1)' }} viewBox="0 0 60 60" fill="none">
            <path d="M0 0 L60 0 L60 60 L52 60 L52 8 L0 8 Z" fill="#b8943c" opacity="0.6"/>
            <path d="M20 0 L60 0 L60 40 L56 40 L56 4 L20 4 Z" fill="#e8c97a" opacity="0.5"/>
            <circle cx="48" cy="12" r="3" fill="#b8943c" opacity="0.7"/>
          </svg>
          <svg className="corner-ornament" style={{ bottom: 14, left: 14, transform: 'scaleY(-1)' }} viewBox="0 0 60 60" fill="none">
            <path d="M0 0 L60 0 L60 8 L8 8 L8 60 L0 60 Z" fill="#b8943c" opacity="0.6"/>
            <path d="M0 0 L40 0 L40 4 L4 4 L4 40 L0 40 Z" fill="#e8c97a" opacity="0.5"/>
            <circle cx="12" cy="48" r="3" fill="#b8943c" opacity="0.7"/>
          </svg>
          <svg className="corner-ornament" style={{ bottom: 14, right: 14, transform: 'scale(-1,-1)' }} viewBox="0 0 60 60" fill="none">
            <path d="M0 0 L60 0 L60 60 L52 60 L52 8 L0 8 Z" fill="#b8943c" opacity="0.6"/>
            <path d="M20 0 L60 0 L60 40 L56 40 L56 4 L20 4 Z" fill="#e8c97a" opacity="0.5"/>
            <circle cx="48" cy="48" r="3" fill="#b8943c" opacity="0.7"/>
          </svg>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-6">
              {/* Герб России SVG */}
              <div className="flex justify-center mb-4">
                <svg width="80" height="90" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e8c97a"/>
                      <stop offset="50%" stopColor="#b8943c"/>
                      <stop offset="100%" stopColor="#e8c97a"/>
                    </linearGradient>
                  </defs>
                  {/* Shield */}
                  <path d="M50 8 C25 8 12 22 12 38 C12 65 30 85 50 95 C70 85 88 65 88 38 C88 22 75 8 50 8Z" fill="url(#goldGrad)" stroke="#8b6914" strokeWidth="1"/>
                  {/* Eagle body */}
                  <text x="50" y="65" textAnchor="middle" fontSize="52" fill="#8b0000" fontFamily="serif">⚜</text>
                  {/* Crown top */}
                  <path d="M35 12 L40 5 L50 8 L60 5 L65 12" fill="url(#goldGrad)" stroke="#8b6914" strokeWidth="0.8"/>
                  <circle cx="40" cy="5" r="2" fill="#e8c97a"/>
                  <circle cx="50" cy="3" r="2.5" fill="#e8c97a"/>
                  <circle cx="60" cy="5" r="2" fill="#e8c97a"/>
                </svg>
              </div>

              <div className="gold-ornament-line mb-3" />

              <p className="font-['Montserrat'] text-[9px] font-600 tracking-[0.3em] uppercase text-[#8b6914] mb-1" style={{ fontFamily: 'Montserrat' }}>
                Федеральная налоговая служба России
              </p>
              <p className="font-['Montserrat'] text-[8px] tracking-[0.2em] uppercase text-[#b8943c] mb-3" style={{ fontFamily: 'Montserrat' }}>
                Министерство финансов Российской Федерации
              </p>

              <div className="gold-ornament-line mb-5" />

              <h1 className="text-4xl font-bold mb-1 gold-title tracking-wide" style={{ fontFamily: 'Cormorant Garamond', lineHeight: 1.1 }}>
                СВИДЕТЕЛЬСТВО
              </h1>
              <p className="text-[13px] tracking-[0.25em] uppercase text-[#8b6914] mb-1" style={{ fontFamily: 'Montserrat', fontWeight: 500 }}>
                о государственной регистрации
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-[#b8943c]" style={{ fontFamily: 'Montserrat' }}>
                физического лица в качестве индивидуального предпринимателя
              </p>

              <div className="gold-ornament-line mt-5" />
            </div>

            {/* Main content */}
            <div className="px-4">

              {/* Intro text */}
              <p className="text-center text-[14px] text-[#2a1f06] italic mb-8 leading-relaxed" style={{ fontFamily: 'Cormorant Garamond' }}>
                Настоящим свидетельством удостоверяется, что в соответствии с Федеральным законом
                от 08.08.2001 № 129-ФЗ «О государственной регистрации юридических лиц и
                индивидуальных предпринимателей» произведена государственная регистрация
              </p>

              {/* Name block */}
              <div className="text-center mb-8 py-4 border-y border-[rgba(184,142,60,0.3)]" style={{ background: 'linear-gradient(90deg, transparent, rgba(184,142,60,0.04), transparent)' }}>
                <p className="field-label mb-2">Фамилия, Имя, Отчество</p>
                <p className="text-3xl font-bold text-[#1a1206]" style={{ fontFamily: 'Cormorant Garamond', letterSpacing: '0.05em' }}>
                  Белозеров Максим Валерьевич
                </p>
              </div>

              {/* Two column fields */}
              <div className="grid grid-cols-2 gap-x-10 mb-4">
                <div>
                  <p className="field-label">ОГРНИП</p>
                  <p className="field-value">319774600312847</p>

                  <p className="field-label">ИНН физического лица</p>
                  <p className="field-value">771234567890</p>

                  <p className="field-label">Дата рождения</p>
                  <p className="field-value">07 сентября 2001 года</p>
                </div>

                <div>
                  <p className="field-label">Серия и номер документа</p>
                  <p className="field-value">Серия 77 № 0489201</p>

                  <p className="field-label">Дата государственной регистрации</p>
                  <p className="field-value">02 мая 2026 года</p>

                  <p className="field-label">Регистрирующий орган</p>
                  <p className="field-value">УФНС России по г. Екатеринбургу</p>
                </div>
              </div>

              {/* Address */}
              <div className="mb-6">
                <p className="field-label">Место жительства</p>
                <p className="field-value">г. Екатеринбург, ул. Юмашева, д. 15, кв. 121</p>
              </div>

              {/* Kod ОКВЭД */}
              <div className="mb-6">
                <p className="field-label">Основной вид экономической деятельности (ОКВЭД)</p>
                <p className="field-value">47.91 — Торговля розничная по почте или по информационно-коммуникационной сети Интернет</p>
              </div>

              <div className="gold-ornament-line mb-6" />

              {/* Bottom row: seal + signatures */}
              <div className="flex items-end justify-between gap-6">

                {/* Seal */}
                <div className="flex flex-col items-center gap-2">
                  <div className="seal">
                    <div className="text-center">
                      <div style={{ fontSize: '28px', color: '#8b0000', lineHeight: 1 }}>⚜</div>
                      <div className="field-label" style={{ fontSize: '6px', color: '#8b6914', marginTop: '2px', textAlign: 'center', maxWidth: '70px' }}>
                        ИФНС<br/>РОССИЯ<br/>М.П.
                      </div>
                    </div>
                    {/* Rotating text around seal */}
                    <svg className="seal-text absolute" viewBox="0 0 110 110">
                      <defs>
                        <path id="circle-path" d="M 55 55 m -42 0 a 42 42 0 1 1 84 0 a 42 42 0 1 1 -84 0"/>
                      </defs>
                      <text fontSize="6" fill="#8b6914" fontFamily="Montserrat" fontWeight="600" letterSpacing="2">
                        <textPath href="#circle-path">
                          ✦ ФЕДЕРАЛЬНАЯ НАЛОГОВАЯ СЛУЖБА ✦ РОССИЯ ✦
                        </textPath>
                      </text>
                    </svg>
                  </div>
                  <p className="field-label text-center" style={{ fontSize: '8px' }}>Место печати</p>
                </div>

                {/* Central text */}
                <div className="flex-1 text-center">
                  <p className="text-[11px] text-[#5a4510] italic leading-relaxed" style={{ fontFamily: 'Cormorant Garamond', fontSize: '13px' }}>
                    В Единый государственный реестр индивидуальных предпринимателей внесена запись
                    о государственной регистрации за основным государственным регистрационным
                    номером индивидуального предпринимателя (ОГРНИП)
                  </p>
                  <p className="text-xl font-bold gold-text mt-2" style={{ fontFamily: 'Cormorant Garamond', letterSpacing: '0.1em' }}>
                    319 774 600 312 847
                  </p>
                </div>

                {/* Signature block */}
                <div className="text-right min-w-[180px]">
                  <p className="field-label mb-4">Должностное лицо</p>
                  <div style={{ borderBottom: '1px solid rgba(184,142,60,0.5)', marginBottom: '4px', marginLeft: 'auto', width: '140px' }}>
                    <p className="text-[14px] text-[#8b6914] italic text-right pr-2 pb-1" style={{ fontFamily: 'Cormorant Garamond', fontStyle: 'italic' }}>
                      Смирнова А.В.
                    </p>
                  </div>
                  <p className="field-label text-right" style={{ fontSize: '8px' }}>подпись / расшифровка подписи</p>
                  <div className="mt-4">
                    <p className="field-label mb-1">Дата выдачи</p>
                    <p className="text-[15px] font-semibold text-[#1a1206]" style={{ fontFamily: 'Cormorant Garamond' }}>
                      02 мая 2026 года
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom ornament */}
              <div className="mt-6">
                <div className="gold-ornament-line mb-3" />
                <div className="text-center">
                  <p className="text-[9px] text-[#8b6914] tracking-widest uppercase" style={{ fontFamily: 'Montserrat' }}>
                    ✦ &nbsp; Российская Федерация &nbsp; ✦ &nbsp; Форма № Р61003 &nbsp; ✦
                  </p>
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