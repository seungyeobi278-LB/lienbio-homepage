export default function LienBioHomepage() {
  const products = [
    {
      year: '주요 제품',
      items: [
        {
          name: '아멉다정',
          en: 'Amupda Tab.',
          desc: '항암 요법 전과 가능',
          detail:
            'Niacinamide 500mg 기반 제품. 항암 요법 관련 환자 대상으로 피부과, 흉부외과 등 다양한 진료과 확장 가능',
          tag: 'Oncology Support',
          dept: '피부과 · 흉부외과 등',
          brochure: '아멉다정 브로셔 PDF',
        },
        {
          name: '리차지아정',
          en: 'Rechargea Tab.',
          desc: '퇴원 환자 위주 수술 병원 타깃',
          detail:
            'Citrulline malate 500mg 기반 제품. 퇴원 환자 중심으로 정형외과, 신경외과, 비뇨기과 등 수술 병원 적용 가능',
          tag: 'Recovery / Energy',
          dept: '정형외과 · 신경외과 · 비뇨기과 등',
          brochure: '리차지아정 브로셔 PDF',
        },
        {
          name: '와이에스알파정',
          en: 'YS Alpha Tab.',
          desc: '종합병원 전용 포지션',
          detail:
            'Alfacalcidol 1µg / 보험약가 226원. 골다공증, 만성신부전증 등 환자 대상 제품으로 내분비내과, 신장내과, 정형외과 중심 확장',
          tag: 'Bone Metabolism',
          dept: '내분비내과 · 신장내과 · 정형외과 등',
          brochure: '와이에스알파정 브로셔 PDF',
        },
        {
          name: '멀티뉴5주',
          en: 'MultiNew5 Inj.',
          desc: '수액 전용 비타민제',
          detail:
            'Se, Zn, Cu, Mn, Cr 기반 미량원소 보충 주사. 수액 치료 기반으로 전과 확장 가능한 제품',
          tag: 'Injection / Nutrition',
          dept: '수액치료 전과 가능',
          brochure: '멀티뉴5주 브로셔 PDF',
        },
      ],
    },
    {
      year: '2026 파이프라인',
      items: [
        {
          name: '두타+타다 복합제',
          en: 'Dutasteride + Tadalafil',
          desc: '수출 전용 제품',
          detail: '일본 지역 수출 판매 계약 완료',
          tag: 'Global Export',
          dept: '일본 수출 전용',
          brochure: '일본 수출 제품 소개서',
        },
        {
          name: '두타스테리드',
          en: 'Dutasteride',
          desc: '탈모 치료제',
          detail: '글로벌 확장 제품군',
          tag: "Men's Health",
          dept: '피부과 등',
          brochure: '두타스테리드 브로셔 PDF',
        },
        {
          name: '타우로리딘 주사',
          en: 'Taurolidine Injection',
          desc: '삼진타우로린주 제네릭',
          detail: '수술·감염 관련 제품군',
          tag: 'Surgical / Infection',
          dept: '외과 · 감염 관련',
          brochure: '타우로리딘 주사 브로셔 PDF',
        },
      ],
    },
  ];

  const business = [
    {
      title: 'Hospital Network',
      icon: '🏥',
      points: ['전국 주요 2·3차 병원 대상 영업', 'CSO 기반 전문 유통 파트너십', '병원·의원·약국·도매 전략 연계'],
    },
    {
      title: 'Product Development',
      icon: '💊',
      points: ['FIRST 제네릭 및 개량신약 참여', '국내 개발 전문 기업과 공동개발', '허가·판권·유통 연계 모델'],
    },
    {
      title: 'Global Business',
      icon: '🌍',
      points: ['일본 탈모 치료제 및 남성질환 치료제 수출', '두타+타다 복합제 일본 판매 계약 완료', '중국·베트남 완제품 수입 및 제네릭 도입 추진'],
    },
  ];

  const partners = [
    '노바엠헬스케어',
    '유앤생명과학',
    '보란파마',
    'YS생명과학'
  ];

  const departments = [
    { name: '정형외과', items: ['리차지아정', '와이에스알파정'] },
    { name: '비뇨기과', items: ['리차지아정', '두타+타다 복합제'] },
    { name: '내분비·신장내과', items: ['와이에스알파정'] },
    { name: '피부과·흉부외과', items: ['아멉다정'] },
    { name: '수액치료', items: ['멀티뉴5주'] },
  ];

  const stats = [
    { label: 'Core Products', value: '4+' },
    { label: '2026 Pipeline', value: '3+' },
    { label: 'Business Focus', value: 'Hospital' },
    { label: 'Global Expansion', value: 'Japan' },
  ];

  const timeline = [
    { year: '2025', title: '기존 제품 포트폴리오 구축', desc: '아멉다정, 리차지아정을 중심으로 병원 영업 기반 강화' },
    { year: '2026 H1', title: '주요 제품 확대', desc: '와이에스알파정, 멀티뉴5주 및 수출 전용 복합제 운영' },
    { year: '2026 H2', title: '파이프라인 확장', desc: '두타스테리드 및 타우로리딘 주사 제품군 확대' },
  ];

  const menu = ['HOME', '회사소개', '사업영역', '제품소개', '문의'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white text-neutral-800">
      <header className="sticky top-0 z-30 border-b border-white/50 bg-white/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#HOME" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 via-rose-400 to-fuchsia-400 text-lg font-black text-white shadow-md">
              LB
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-rose-700">LIEN BIO</div>
              <div className="text-sm text-rose-400">Healthcare Distribution & Development</div>
            </div>
          </a>
          <nav className="hidden gap-6 lg:flex">
            {menu.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-sm font-semibold text-neutral-600 transition hover:text-rose-600"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#문의"
            className="hidden rounded-2xl bg-gradient-to-r from-pink-400 to-rose-400 px-4 py-2 text-sm font-bold text-white shadow-sm lg:inline-flex"
          >
            협업 문의
          </a>
        </div>
      </header>

      <main id="HOME">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,207,232,0.8),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(244,114,182,0.18),transparent_30%)]" />
          <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-14 md:pb-16 md:pt-20">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="mb-5 inline-flex w-fit rounded-full border border-rose-200 bg-white/90 px-4 py-1 text-sm font-semibold text-rose-500 shadow-sm">
                  LIEN BIO 공식 홈페이지 · Hospital-focused Business
                </div>
                <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-neutral-900 md:text-7xl">
                  병원 중심 의료유통과
                  <br />
                  공식 제품 포트폴리오
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
                  LIEN BIO는 국내 주요 2·3차 의료기관을 대상으로 ETC 및 OTX 제품을 유통·개발하는 전문 기업입니다.
                  제품소개, 브로셔 전달, 파트너 협업 문의까지 한 번에 연결되는 공식 홈페이지 완성형 시안입니다.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#제품소개"
                    className="rounded-2xl bg-gradient-to-r from-pink-400 to-rose-400 px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5"
                  >
                    제품소개 바로가기
                  </a>
                  <a
                    href="#사업영역"
                    className="rounded-2xl border border-rose-200 bg-white px-6 py-3 text-sm font-bold text-rose-600 shadow-sm transition hover:-translate-y-0.5"
                  >
                    사업영역 보기
                  </a>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl border border-white/70 bg-white/85 p-6 shadow-sm backdrop-blur"
                  >
                    <div className="text-sm font-bold text-rose-400">{stat.label}</div>
                    <div className="mt-3 text-3xl font-black text-neutral-900">{stat.value}</div>
                  </div>
                ))}
                <div className="rounded-3xl bg-gradient-to-r from-pink-300 to-rose-300 p-6 text-white shadow-sm sm:col-span-2">
                  <div className="text-sm font-bold text-rose-50">Global Highlight</div>
                  <div className="mt-3 text-2xl font-black">일본 수출 프로젝트 진행</div>
                  <div className="mt-3 text-sm leading-7 text-rose-50">
                    두타스테리드 + 타다라필 복합제의 일본 지역 수출 판매 계약을 반영해 글로벌 사업 확장 방향을 담았습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="회사소개" className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[32px] border border-rose-100 bg-white p-8 shadow-sm">
              <div className="text-sm font-bold text-rose-400">About LIEN BIO</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">회사소개</h2>
              <p className="mt-5 text-base leading-8 text-neutral-600">
                전국 종합병원, 병원, 의원, 약국 및 도매상과의 전략적 파트너십을 통해 최적화된 의료 솔루션을 제공합니다.
                병원 중심 유통 역량과 제품 개발 네트워크를 바탕으로 국내 사업과 글로벌 확장을 함께 추진하고 있습니다.
              </p>
              <div className="mt-6 rounded-2xl bg-rose-50 p-5">
                <div className="text-sm font-bold text-rose-500">기업 개요</div>
                <div className="mt-3 space-y-2 text-sm leading-7 text-neutral-600">
                  <div>• 병원 중심 의약품 유통 및 제품 개발 전문 기업</div>
                  <div>• 주요 2·3차 의료기관 대상 ETC / OTX 제품 공급</div>
                  <div>• 공동개발 · 판권 · 글로벌 수출입 비즈니스 추진</div>
                  <div>• 일본 수출 프로젝트 및 제네릭 파이프라인 확대</div>
                </div>
              </div>
              <div className="mt-5 rounded-2xl border border-rose-100 bg-white p-5">
                <div className="text-sm font-bold text-rose-500">VISION</div>
                <div className="mt-2 text-sm leading-7 text-neutral-600">
                  Hospital‑based Healthcare Innovation
                  <br/>병원 중심 네트워크를 기반으로 의약품 유통, 제품 개발, 글로벌 확장을 연결하는 헬스케어 기업
                </div>
                <div className="mt-4 text-sm font-bold text-rose-500">MISSION</div>
                <div className="mt-2 text-sm leading-7 text-neutral-600">
                  • 병원 중심 의약품 유통 플랫폼 구축
                  <br/>• 공동개발 및 제네릭 파이프라인 확대
                  <br/>• 글로벌 파트너십을 통한 수출 사업 확장
                  <br/>• 의료 현장에 실질적 가치를 제공하는 제품 포트폴리오 구축
                </div>
              </div>
                <div className="mt-3 text-sm leading-7 text-neutral-600">
                  병원 유통 · 제품 개발 · 글로벌 확장을 연결하는 하이브리드 비즈니스 구조
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-bold text-rose-400">Focus</div>
                <div className="mt-3 text-2xl font-black text-neutral-900">Hospital</div>
                <div className="mt-3 text-sm leading-7 text-neutral-600">국내 주요 2·3차 의료기관 중심 유통</div>
              </div>
              <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-bold text-rose-400">Model</div>
                <div className="mt-3 text-2xl font-black text-neutral-900">Partnership</div>
                <div className="mt-3 text-sm leading-7 text-neutral-600">제품 개발 · 공동개발 · 전략적 파트너십 운영</div>
              </div>
              <div className="rounded-3xl border border-rose-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-bold text-rose-400">Expansion</div>
                <div className="mt-3 text-2xl font-black text-neutral-900">Global</div>
                <div className="mt-3 text-sm leading-7 text-neutral-600">일본 수출 프로젝트 및 해외 제품 도입 추진</div>
              </div>
            </div>
          </div>
        </section>

        <section id="사업영역" className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-bold text-rose-400">Company Business</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">리엔바이오 사업영역</h2>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm text-neutral-500 shadow-sm">
              유통 · 공동개발 · 글로벌 수출입 구조 반영
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {business.map((card) => (
              <div
                key={card.title}
                className="rounded-[30px] border border-rose-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 text-2xl text-white">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-black tracking-tight text-neutral-900">{card.title}</h3>
                <div className="mt-5 space-y-3 text-base leading-7 text-neutral-600">
                  {card.points.map((point) => (
                    <div key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-rose-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="rounded-[36px] border border-rose-100 bg-white p-8 shadow-sm">
            <div className="mb-8">
              <div className="text-sm font-bold text-rose-400">Corporate History</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">기업 연혁</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-3xl bg-gradient-to-b from-rose-50 to-white p-6 ring-1 ring-rose-100">
                  <div className="text-sm font-bold text-rose-500">{item.year}</div>
                  <div className="mt-3 text-2xl font-black text-neutral-900">{item.title}</div>
                  <div className="mt-3 text-sm leading-7 text-neutral-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="제품소개" className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-sm font-bold text-rose-400">Products</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">리엔바이오 제품소개</h2>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-white px-4 py-3 text-sm text-neutral-500 shadow-sm">
              공식 홈페이지용 제품 소개 · 브로셔 · 문의 구조 반영
            </div>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {products.map((group) => (
              <div key={group.year} className="rounded-[32px] border border-rose-100 bg-white p-6 shadow-sm">
                <div className="mb-5 inline-flex rounded-full bg-rose-50 px-4 py-1 text-sm font-bold text-rose-600">
                  {group.year}
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-2xl border border-rose-100 bg-gradient-to-b from-white to-rose-50/50 p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <div className="text-xl font-black text-neutral-900">{item.name}</div>
                        <div className="rounded-full bg-white px-2 py-1 text-xs font-bold text-rose-500 ring-1 ring-rose-100">
                          {item.tag}
                        </div>
                      </div>
                      <div className="mt-1 text-sm font-semibold text-neutral-500">{item.en}</div>
                      <div className="mt-3 text-base font-bold text-neutral-900">{item.desc}</div>
                      <div className="mt-2 text-sm leading-6 text-neutral-600">{item.detail}</div>
                      <div className="mt-3 rounded-xl bg-white px-3 py-2 text-xs font-bold text-rose-600 ring-1 ring-rose-100">
                        타깃 진료과: {item.dept}
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <button className="rounded-xl bg-gradient-to-r from-pink-400 to-rose-400 px-3 py-2 text-xs font-bold text-white shadow-sm">
                          상세 보기
                        </button>
                        <button className="rounded-xl border border-rose-200 bg-white px-3 py-2 text-xs font-bold text-rose-600">
                          PDF 다운로드
                        </button>
                      </div>
                      <div className="mt-2 text-[11px] font-medium text-neutral-400">{item.brochure}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-rose-100 bg-white p-8 shadow-sm">
              <div className="text-sm font-bold text-rose-400">Medical Departments</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">진료과별 추천 제품</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                {departments.map((dept) => (
                  <div key={dept.name} className="rounded-2xl border border-rose-100 bg-rose-50/50 p-5">
                    <div className="text-sm font-bold text-rose-500">{dept.name}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {dept.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-3 py-1 text-xs font-bold text-rose-600 ring-1 ring-rose-100"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[32px] border border-rose-100 bg-gradient-to-br from-rose-100 via-pink-50 to-white p-8 shadow-sm">
                <div className="text-sm font-bold text-rose-500">Homepage Features</div>
                <h3 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">확장 기능</h3>
                <p className="mt-4 text-base leading-7 text-neutral-600">
                  공식 홈페이지를 기준으로 제품 상세 페이지, 브로셔 자료실, 담당자 문의, 추후 회원 전용 페이지까지 확장할 수 있도록 구성했습니다.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button className="rounded-2xl bg-white px-4 py-4 text-sm font-bold text-rose-600 shadow-sm ring-1 ring-rose-100">
                    제품 문의
                  </button>
                  <button className="rounded-2xl bg-white px-4 py-4 text-sm font-bold text-rose-600 shadow-sm ring-1 ring-rose-100">
                    브로셔 보기
                  </button>
                  <a
                    href="tel:01056053055"
                    className="rounded-2xl bg-white px-4 py-4 text-center text-sm font-bold text-rose-600 shadow-sm ring-1 ring-rose-100"
                  >
                    전화 연결
                  </a>
                  <button className="rounded-2xl bg-white px-4 py-4 text-sm font-bold text-rose-600 shadow-sm ring-1 ring-rose-100">
                    카카오톡 상담
                  </button>
                </div>
              </div>

              <div className="rounded-[32px] border border-rose-100 bg-white p-8 shadow-sm">
                <div className="text-sm font-bold text-rose-400">Why LIEN BIO</div>
                <h3 className="mt-2 text-3xl font-black tracking-tight text-neutral-900">핵심 경쟁력</h3>
                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl bg-rose-50 px-4 py-4 text-sm font-medium text-neutral-700">
                    병원 중심 유통과 제품 개발을 동시에 운영하는 구조
                  </div>
                  <div className="rounded-2xl bg-rose-50 px-4 py-4 text-sm font-medium text-neutral-700">
                    주요 진료과 중심의 제품 포지셔닝과 확장 가능성
                  </div>
                  <div className="rounded-2xl bg-rose-50 px-4 py-4 text-sm font-medium text-neutral-700">
                    일본 수출 프로젝트 기반 글로벌 확장 스토리 확보
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="rounded-[32px] border border-rose-100 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <div className="text-sm font-bold text-rose-400">CEO Message</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">대표 메시지</h2>
            </div>
            <div className="text-sm leading-7 text-neutral-600 max-w-4xl">
              리엔바이오는 병원 중심 의료 네트워크를 기반으로 의약품 유통과 제품 개발을 동시에 추진하는 헬스케어 기업입니다.
              의료 현장에서 실제로 필요한 제품과 솔루션을 제공하는 것을 목표로 하고 있으며, 국내 병원 시장에서 축적한 경험을
              바탕으로 글로벌 파트너와 협력하여 새로운 기회를 만들어가고 있습니다.
              <br/><br/>
              앞으로 리엔바이오는 병원 중심 유통 플랫폼을 기반으로 공동개발, 제네릭 파이프라인 확대, 글로벌 사업 확장을 통해
              지속적으로 성장하는 헬스케어 기업으로 발전해 나가겠습니다.
              <br/><br/>
              리엔바이오 대표 이승엽
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 md:py-14">
          <div className="rounded-[32px] border border-rose-100 bg-white p-8 shadow-sm">
            <div className="mb-6">
              <div className="text-sm font-bold text-rose-400">Partners</div>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-neutral-900 md:text-5xl">파트너사</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {partners.map((p) => (
                <div key={p} className="rounded-full bg-rose-50 px-5 py-3 text-sm font-bold text-rose-600 ring-1 ring-rose-100">
                  {p}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="문의" className="mx-auto max-w-7xl px-6 pb-20 pt-10">
          <div className="rounded-[36px] bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 px-8 py-10 text-white shadow-2xl">
            <div className="grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-center">
              <div>
                <div className="text-sm font-bold text-rose-50">Contact</div>
                <h3 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">병원·파트너사 협업 문의</h3>
                <p className="mt-4 max-w-2xl text-base leading-7 text-rose-50">
                  제품 유통, 공동개발, 판권 협력, 수출입 비즈니스 관련 문의를 위한 공식 홈페이지 완성형 시안입니다.
                  실제 운영 시에는 브로셔 연결, 문의폼, 도메인 연결, 배포만 진행하면 됩니다.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-neutral-800 shadow-sm">
                <div className="text-sm font-bold text-rose-400">LIEN BIO</div>
                <div className="mt-3 text-xl font-black">협업 문의</div>
                <div className="mt-4 space-y-2 text-sm leading-6 text-neutral-600">
                  <div>리엔바이오 대표 이승엽</div>
                  <a href="tel:01056053055" className="block font-bold text-rose-600">
                    010-5605-3055
                  </a>
                  <a href="mailto:seungyeobi278@gmail.com" className="block font-medium text-neutral-700">
                    seungyeobi278@gmail.com
                  </a>
                  <div>제품 유통 · 공동개발 · 수출입 협력 문의</div>
                  <div>브로셔 전달 및 협업 상담 가능</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-rose-100 bg-white/80">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-rose-400 text-sm font-black text-white shadow-sm">
                  LB
                </div>
                <div>
                  <div className="text-2xl font-black tracking-tight text-rose-700">LIEN BIO</div>
                  <div className="text-sm text-neutral-500">Healthcare Distribution & Development</div>
                </div>
              </div>
              <div className="mt-4 text-sm leading-7 text-neutral-600">
                병원 중심 의료유통과 제품 포트폴리오를 소개하는 리엔바이오 공식 홈페이지 완성형 시안입니다.
              </div>
            </div>
            <div className="grid gap-2 text-sm leading-7 text-neutral-600 md:grid-cols-2">
              <div>
                <span className="font-bold text-neutral-800">주소</span> : 경기도 남양주시 오남읍 진건오남로 864 3층
              </div>
              <div>
                <span className="font-bold text-neutral-800">이메일</span> :{' '}
                <a href="mailto:seungyeobi278@gmail.com" className="text-rose-600">
                  seungyeobi278@gmail.com
                </a>
              </div>
              <div>
                <span className="font-bold text-neutral-800">사업자등록번호</span> : 601-17-92941
              </div>
              <div>
                <span className="font-bold text-neutral-800">대표</span> : 이승엽
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
