import { siteContent } from "./content/home";

function App() {
  const {
    about,
    booking,
    brand,
    courses,
    faq,
    guidelines,
    hero,
    instructors,
    navLinks,
    partners,
    pricing,
    services,
    socialLinks,
    stats,
    testimonials,
  } = siteContent;

  return (
    <div className="bg-surface font-body text-on-surface">
      <header className="fixed top-0 z-50 w-full bg-white/70 shadow-sm shadow-red-900/5 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-2 text-xl font-black tracking-tight text-red-600">
            <img
              src={brand.logo}
              alt={`${brand.name} logo`}
              className="h-10 w-10 object-contain"
            />
            <span>{brand.name}</span>
          </div>

          <div className="hidden items-center space-x-10 lg:flex">
            {navLinks.map((link, index) => (
              <button
                key={link}
                type="button"
                className={
                  index === 0
                    ? "border-b-2 border-red-600 pb-1 font-medium tracking-tight text-red-600"
                    : "font-medium tracking-tight text-slate-600 transition-colors duration-300 hover:text-red-500"
                }
              >
                {link}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
          >
            Contact Us
          </button>
        </nav>
      </header>

      <main className="pt-20">
        <section className="hero-pattern curvy-bg relative flex min-h-[600px] items-center overflow-hidden">
          <aside className="absolute inset-y-0 left-0 z-20 hidden w-24 flex-col items-center justify-center gap-8 border-r border-slate-100 py-12 xl:flex">
            <div className="flex flex-col gap-5 text-slate-400">
              {socialLinks.map((link, index) => (
                <button
                  key={link.label}
                  type="button"
                  aria-label={link.label}
                  className={`transition-colors hover:text-primary ${
                    index === socialLinks.length - 1 ? "text-red-600" : ""
                  }`}
                >
                  <Icon name={link.icon} className="text-xl" />
                </button>
              ))}
            </div>
            <div className="h-20 w-px bg-slate-200" />
            <div className="rotate-180 [writing-mode:vertical-lr] text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase">
              Follow Us
            </div>
          </aside>

          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:px-12">
            <div aria-hidden="true" className="pointer-events-none absolute top-1/4 right-1/4 opacity-10">
              <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                <path
                  d="M100 0L102.346 97.6542L200 100L102.346 102.346L100 200L97.6542 102.346L0 100L97.6542 97.6542L100 0Z"
                  fill="currentColor"
                  className="text-slate-400"
                />
              </svg>
            </div>

            <div aria-hidden="true" className="pointer-events-none absolute bottom-10 left-1/3 opacity-5">
              <svg width="300" height="300" viewBox="0 0 100 100">
                <path
                  d="M0,50 Q25,0 50,50 T100,50"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-slate-500"
                />
                <path
                  d="M0,60 Q25,10 50,60 T100,60"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  className="text-slate-500"
                />
              </svg>
            </div>

            <div className="z-10 lg:col-span-6 lg:pl-12">
              <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-8 bg-primary" />
                <span className="text-xs font-bold tracking-[0.3em] text-primary uppercase">
                  {hero.eyebrow}
                </span>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute top-[-4rem] right-0 hidden md:right-[-5rem] md:block">
                  <img
                    src={hero.arrowImage}
                    alt=""
                    className="h-auto w-48 rotate-[-15deg] object-contain"
                    aria-hidden="true"
                  />
                </div>
                <h1 className="text-editorial-tight mb-8 max-w-2xl font-headline text-5xl font-extrabold text-on-background md:text-7xl">
                  {hero.title}
                </h1>
              </div>

              <p className="mb-12 max-w-lg text-lg leading-relaxed text-on-surface-variant/80">
                {hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <ActionButton label={hero.primaryAction} tone="primary" />
                <ActionButton label={hero.secondaryAction} tone="secondary" />
              </div>
            </div>

            <div className="relative flex items-center justify-center lg:col-span-6">
              <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 h-[520px] w-[450px] -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-[60px] bg-primary opacity-90 shadow-2xl" />
                <div className="absolute top-[5%] left-1/2 h-[280px] w-[220px] -translate-x-1/2 rounded-t-full bg-[#1A1A1A]" />
                <div className="absolute top-1/4 -right-20 scale-150 opacity-20">
                  <svg width="400" height="400" viewBox="0 0 200 200">
                    <path
                      d="M0,100 C50,150 150,50 200,100"
                      fill="transparent"
                      stroke="#ccc"
                      strokeLinecap="round"
                      strokeWidth="20"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative z-10">
                <img
                  src={hero.featureImage}
                  alt="Professional driving instructor"
                  className="w-full max-w-[480px] object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className={`group rounded-[32px] bg-surface-container-lowest p-10 shadow-editorial transition-transform hover:scale-[1.03] ${
                  service.outlined ? "border-b-4 border-secondary" : ""
                }`}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                    service.accent === "primary"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary/10 text-secondary"
                  }`}
                >
                  <Icon name={service.icon} className="text-4xl" />
                </div>
                <h2 className="mb-4 font-headline text-2xl font-bold">{service.title}</h2>
                <p className="mb-6 text-on-surface-variant">{service.description}</p>
                <button
                  type="button"
                  className={`flex items-center gap-2 font-bold transition-all group-hover:gap-4 ${
                    service.accent === "primary" ? "text-primary" : "text-secondary"
                  }`}
                >
                  Read More
                  <Icon name="trending_flat" />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="overflow-hidden px-8 py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute inset-0 scale-110 rounded-full bg-primary/5 blur-2xl" />
              <img
                src={about.image}
                alt="Student learning to drive"
                className="relative z-10 h-auto w-full rounded-[32px] object-cover shadow-editorial"
              />
              <div className="absolute right-[-2rem] bottom-[-2rem] z-20 rounded-[32px] bg-white p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-primary">{about.statValue}</div>
                  <div className="text-sm leading-tight font-bold text-on-surface-variant">
                    {about.statLabel.split(" ").slice(0, -1).join(" ")}
                    <br />
                    {about.statLabel.split(" ").slice(-1)}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionEyebrow tone="primary">{about.eyebrow}</SectionEyebrow>
              <h2 className="mb-8 font-headline text-4xl leading-tight font-extrabold text-on-background md:text-5xl">
                {about.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-on-surface-variant">
                {about.description}
              </p>
              <ul className="mb-10 space-y-4">
                {about.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Icon name="check_circle" filled className="text-primary" />
                    <span className="font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="rounded-full bg-on-background px-10 py-4 font-bold text-white transition-colors hover:bg-primary"
              >
                {about.action}
              </button>
            </div>
          </div>
        </section>

        <section className="bg-surface-bright px-8 py-24">
          <SectionHeading title="Popular Driving Courses" accent="primary" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {courses.map((course) => (
              <article key={course.title} className="group overflow-hidden rounded-[32px] bg-white shadow-editorial">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute top-4 right-4 rounded-full px-4 py-2 font-bold text-white shadow-lg ${
                      course.accent === "primary" ? "bg-primary" : "bg-secondary"
                    }`}
                  >
                    {course.price}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="mb-4 font-headline text-2xl font-bold">{course.title}</h3>
                  <p className="mb-6 text-on-surface-variant">{course.description}</p>
                  <button
                    type="button"
                    className={`w-full rounded-full py-4 font-bold transition-all ${
                      course.accent === "primary"
                        ? "bg-red-50 text-primary group-hover:bg-primary group-hover:text-white"
                        : "bg-blue-50 text-secondary group-hover:bg-secondary group-hover:text-white"
                    }`}
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading title={pricing.title} eyebrow={pricing.eyebrow} accent="primary" />
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
              {pricing.plans.map((plan) => (
                <article
                  key={plan.title}
                  className={`group rounded-[32px] bg-white p-10 shadow-editorial transition-transform hover:scale-[1.03] ${
                    plan.accent === "primary" ? "border-t-8 border-primary" : "border-t-8 border-secondary"
                  }`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${
                        plan.accent === "primary"
                          ? "bg-primary/10 text-primary"
                          : "bg-secondary/10 text-secondary"
                      }`}
                    >
                      <Icon name={plan.icon} className="text-4xl" />
                    </div>
                    <h3 className="mb-2 font-headline text-2xl font-extrabold">{plan.title}</h3>
                    <p className="mb-6 text-on-surface-variant">{plan.description}</p>
                    <div className="mb-8 text-5xl font-black text-on-background">
                      <span className="align-top text-2xl font-bold">$</span>
                      {plan.price}
                      <span className="text-lg font-medium text-on-surface-variant">{plan.unit}</span>
                    </div>
                    <ul className="mb-10 w-full space-y-4 text-left">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <Icon
                            name="check_circle"
                            filled
                            className={plan.accent === "primary" ? "text-primary" : "text-secondary"}
                          />
                          <span className="font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      className={`w-full rounded-full py-4 text-xs font-bold tracking-[0.3em] text-white uppercase transition-all hover:brightness-110 ${
                        plan.accent === "primary" ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      Select Plan
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-primary px-8 py-16">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center text-white md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="mb-2 text-5xl font-black">{stat.value}</div>
                <div className="text-sm font-bold tracking-[0.3em] opacity-80 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-surface px-8 py-24">
          <SectionHeading title={guidelines.title} eyebrow={guidelines.eyebrow} accent="secondary" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 lg:flex-row lg:gap-24">
            <div className="order-2 flex flex-col gap-12 text-right lg:order-1">
              {guidelines.left.map((item) => (
                <GuidelineCard key={item.title} item={item} align="right" />
              ))}
            </div>

            <div className="relative order-1 flex h-72 w-72 items-center justify-center lg:order-2">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
              <div className="z-10 rounded-full bg-white p-8 shadow-editorial">
                <img src={guidelines.centerLogo} alt={`${brand.name} logo`} className="h-32 w-32 object-contain" />
              </div>
            </div>

            <div className="order-3 flex flex-col gap-12 text-left">
              {guidelines.right.map((item) => (
                <GuidelineCard key={item.title} item={item} align="left" />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="rounded-[32px] bg-inverse-surface p-12 text-white">
              <h2 className="mb-10 font-headline text-3xl font-bold">{faq.title}</h2>
              <div className="space-y-6">
                {faq.items.map((item) => (
                  <div
                    key={item.question}
                    className={`rounded-[32px] p-6 transition-all ${
                      item.expanded ? "bg-primary/20" : "border border-slate-800"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-lg font-bold">{item.question}</span>
                      <Icon name="expand_more" className={item.expanded ? "rotate-180 transition-transform" : ""} />
                    </div>
                    <p className="mt-4 text-sm text-slate-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src={faq.image}
                alt="SM Driving School training facility"
                className="h-full w-full rounded-[32px] object-cover shadow-editorial"
              />
              <div className="absolute inset-0 rounded-[32px] bg-primary/20 mix-blend-multiply" />
            </div>
          </div>
        </section>

        <section className="px-8 py-24">
          <SectionHeading title="Meet Our Qualified Instructor" accent="primary" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-3">
            {instructors.map((instructor) => (
              <article key={instructor.name} className="group text-center">
                <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-[32px]">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <h3 className="font-headline text-2xl font-bold">{instructor.name}</h3>
                <p className="font-bold text-primary">{instructor.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low px-8 py-24">
          <SectionHeading title="What Saying Students Feedback" accent="secondary" />
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <article key={testimonial.name} className="relative rounded-[32px] bg-white p-10 shadow-editorial">
                <div className="mb-6 flex text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Icon key={`${testimonial.name}-${index}`} name="star" filled />
                  ))}
                </div>
                <p className="mb-8 text-lg leading-relaxed italic text-on-surface-variant">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm opacity-60">{testimonial.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="px-8 py-24">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[32px] bg-inverse-surface p-12 lg:p-20">
            <div className="absolute top-0 right-0 -mt-20 -mr-20 h-96 w-96 bg-primary/20 blur-3xl" />
            <div className="relative z-10 mb-12 max-w-2xl">
              <h2 className="mb-6 font-headline text-4xl font-extrabold text-white md:text-5xl">
                {booking.title}
              </h2>
              <p className="text-lg text-slate-400">{booking.description}</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
              <FieldShell id="booking-name" label={booking.fields[0]}>
                <input
                  id="booking-name"
                  type="text"
                  placeholder={booking.fields[0]}
                  className="field-base"
                />
              </FieldShell>
              <FieldShell id="booking-email" label={booking.fields[1]}>
                <input
                  id="booking-email"
                  type="email"
                  placeholder={booking.fields[1]}
                  className="field-base"
                />
              </FieldShell>
              <FieldShell id="booking-course" label={booking.fields[2]}>
                <select id="booking-course" defaultValue="" className="field-base text-slate-400">
                  <option value="" disabled>
                    {booking.fields[2]}
                  </option>
                  {booking.courseOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </FieldShell>
              <FieldShell id="booking-date" label={booking.fields[3]}>
                <input id="booking-date" type="date" className="field-base text-slate-400" />
              </FieldShell>
              <button
                type="button"
                className="w-full rounded-full bg-primary py-4 text-xs font-black tracking-[0.3em] text-white uppercase shadow-xl transition-transform hover:scale-[1.02]"
              >
                {booking.buttonLabel}
              </button>
            </div>
          </div>
        </section>

        <section className="px-8 py-12 opacity-40 grayscale">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-12">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.image}
                alt={partner.name}
                className={partner.className}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function ActionButton({ label, tone }) {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 rounded-full px-8 py-4 text-xs font-bold tracking-[0.3em] text-white uppercase shadow-lg transition-all hover:brightness-110 ${
        tone === "primary" ? "bg-primary" : "bg-secondary"
      }`}
    >
      {label}
      <Icon name="arrow_forward" className="text-sm" />
    </button>
  );
}

function FieldShell({ children, id, label }) {
  return (
    <div>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      {children}
    </div>
  );
}

function GuidelineCard({ item, align }) {
  if (align === "right") {
    return (
      <div className="flex items-center justify-end gap-6">
        <div>
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm text-on-surface-variant">{item.description}</p>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-primary">
          <Icon name={item.icon} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-primary">
        <Icon name={item.icon} />
      </div>
      <div>
        <h3 className="text-lg font-bold">{item.title}</h3>
        <p className="text-sm text-on-surface-variant">{item.description}</p>
      </div>
    </div>
  );
}

function Icon({ name, className = "", filled = false }) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { fontVariationSettings: '"FILL" 1, "wght" 500, "GRAD" 0, "opsz" 24' } : undefined}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}

function SectionEyebrow({ children, tone = "primary" }) {
  return (
    <p
      className={`mb-4 text-sm font-bold tracking-[0.3em] uppercase ${
        tone === "primary" ? "text-primary" : "text-secondary"
      }`}
    >
      {children}
    </p>
  );
}

function SectionHeading({ title, eyebrow, accent }) {
  return (
    <div className="mx-auto mb-16 max-w-7xl text-center">
      {eyebrow ? <SectionEyebrow tone={accent === "secondary" ? "secondary" : "primary"}>{eyebrow}</SectionEyebrow> : null}
      <h2 className="mb-4 font-headline text-4xl font-extrabold text-on-background md:text-5xl">
        {title}
      </h2>
      <div className={`mx-auto h-1.5 w-24 rounded-full ${accent === "secondary" ? "bg-secondary" : "bg-primary"}`} />
    </div>
  );
}

export default App;
