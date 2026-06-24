# Полная сверка лендинга с Figma

Рабочий чеклист для поэтапной проверки всех блоков и компонентов лендинга.

**Макет:** [Figma Untitled](https://www.figma.com/design/Lkk1tYVccRwknQR1ScFwDe/Untitled?node-id=1-74) · корневой node `1:74`  
**Кэш:** `.cursor/figma-cache/pages/1-74/` (`metadata.xml`, `screenshot.png`)

---

## Как пользоваться

1. Выбрать фазу (0–21).
2. Сверить блок по чеклисту раздела A.
3. Исправить расхождения в коде.
4. `npm run build` + визуальная проверка на **1440px**.
5. Обновить статус фазы в этом файле.
6. При необходимости — Playwright snapshot / точечный spec.

**Команда в чате:** «Выполни Фазу N из landing-figma-audit»

---

## Раздел A — Методология

### Источники правды (приоритет)

| # | Источник | Для чего |
|---|----------|----------|
| 1 | `screenshot.png`, скриншоты секций | Цвет, регистр, варианты, borders на тёмном фоне |
| 2 | `metadata.xml` | Размеры bbox, координаты, gap (y₂ − y₁ − h₁), ширины |
| 3 | `variables.json` → `_variables.scss` | Токены цветов, spacing, content-width |
| 4 | `design-context.md` (если есть) | Типографика, layout-описание |
| 5 | `.cursor/rules/figma-*.mdc` | Известные ловушки и паттерны |

**Не доверять** полю `name` слоя в metadata как стилю отображения. Пример: `"После воркшопа"` в metadata ≠ серый sentence-case; визуально — **синий uppercase**.

### Универсальный чеклист на каждый блок

- [ ] **Типографика** — font-family, size, weight, line-height, letter-spacing, color, italic/bold, `text-transform`, переносы (`breakBefore`, `titleParts`, `titleSize`)
- [ ] **Цвета и варианты** — токены из Figma; variant компонента (`fired`, `outlineDark`, `dotColor`, `labelVariant`)
- [ ] **Медиа** — SVG без `preserveAspectRatio="none"`; пропорции `<img>`; фото/аватары; marquee vs static row
- [ ] **Отступы** — section 44px top/bottom; label→title 32px (left) / 44px (center); header→content 44px; внутренние gap из bbox
- [ ] **Layout** — `$content-width-*`, grid columns, asymmetric tables, full-bleed
- [ ] **Borders / radius** — `$radius-card-sm` 16px; Neutral/200 vs Neutral/700 на тёмном фоне
- [ ] **Контент i18n** — RU + EN: текст, акценты, пробелы
- [ ] **Интерактив** — hover/focus, табы, аккордеон, форма, lang switch
- [ ] **Приёмка** — десктоп 1440px; адаптив — отдельная фаза 19

### Шаблон записи результата

```markdown
- **Статус:** ⬜ не начато | 🔄 в работе | ✅ ок | ⚠️ есть расхождения
- **Найдено:** ...
- **Исправлено:** ...
```

### Порядок блоков на странице

```
Header → Hero → Audience → Competitors → Deliverables → HowItWorks →
Technology → Experts → Outcomes → Fit → Program → Format →
CourseComparison → FAQ → CTA → Footer
```

Код: `src/pages/landing/LandingPage.tsx`

---

## Раздел B — Фазы по блокам

### Фаза 0 — Глобальные основы

- **Figma node:** `1:74` (страница), `1:97` (контент 1400px)
- **Код:** `src/styles/_variables.scss`, `src/styles/_mixins.scss`, `src/shared/layout/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Токены цветов, typography, spacing, content-width vs `variables.json`
- [x] Mixins: `section-label`, `heading-xl`, `heading-lg`, `card-body`, `title-accent`
- [x] `Container` — max-width 1400px, page padding 48px
- [x] `Section` — padding-top/bottom 44px (`$space-section`)
- [x] Shared UI инвентарь: `Button`, `Badge`, `PillTag`, `Card`, `Tabs`, `Accordion`, `ComparisonTable`, `SectionHeader`, `AccentTitle`, `LogoMarquee`, `StatBlock`, `LangSwitch`, `FormField`, `Input`, `Select`

- **Найдено:** отсутствовал токен `$color-green-600` из Figma variables
- **Исправлено:** добавлен `$color-green-600: #16a34a` в `_variables.scss`

---

### Фаза 1 — Header

- **Figma node:** `1:75`
- **Код:** `src/pages/landing/sections/Header/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Высота шапки 70px
- [x] Logo Sheverev + HoReCa (`src/shared/ui/Logo/`)
- [x] `LangSwitch` RU/EN — активное состояние
- [x] CTA «Занять место» — `Button`, height 43px
- [x] Горизонтальные отступы x=48 от края (page padding)
- [x] Типографика, цвета, hover

- **Найдено:** gap между LangSwitch и CTA 12px вместо 24px; слэш логотипа 20px вместо 24px; LangSwitch gap 4px и padding не совпадали с макетом (95×36); `min-height` давал 71px вместо 70px
- **Исправлено:** `Header.module.scss` — `height: 70px`, `actions` gap 24px; `Logo.module.scss` — слэш 24px; `LangSwitch.module.scss` — padding `4px 12px 4px 8px`, gap 12px, active pill 28px, inactive без лишнего padding + hover; обновлены Playwright snapshots `header.png`

---

### Фаза 2 — Hero

- **Figma node:** `1:98` (design-context: `.cursor/figma-cache/nodes/1-98/design-context.md`)
- **Код:** `src/pages/landing/sections/Hero/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Badge «Офлайн-воркшоп · …» — Blue/600 на Blue/50, 14px semibold uppercase
- [x] H1 64px Unbounded Bold + синий акцент (`AccentTitle` as h1)
- [x] Subtitle 18px Inter Regular `#737373`, max-width 664px
- [x] Pill-теги — variant `fired` / normal, gap 8px, контейнер 554px
- [x] CTA-кнопки 52px, gap 12px, primary blue / secondary outline
- [x] **LogoMarquee** — full-bleed (`@include full-bleed`), CSS-анимация, gap 52px
- [x] SVG партнёров: нет `preserveAspectRatio="none"`; нет `partner-14.svg`
- [x] Stats row — border top/bottom `#e5e5e5`, padding 32px vertical, justify-between
- [x] Stat values: 42px Instrument Sans; labels: 13px uppercase Neutral/400

- **Найдено:** pill-теги без явного `withDot`
- **Исправлено:** `Hero.tsx` — `withDot` на PillTag; H1 через `heading-hero` mixin уже корректен

---

### Фаза 3 — Audience

- **Figma node:** `1:206`
- **Код:** `src/pages/landing/sections/Audience/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «ДЛЯ КОГО ЭТОТ ВОРКШОП?» — `labelVariant="accent"`, синий uppercase
- [x] Заголовок — Unbounded через mixin, accent parts
- [x] 4 карточки — `PillTag` с **цветными точками**: orange, yellow, red, green, blue (`dotColor`)
- [x] Бейдж «уволен» — не путать с Audience (это Competitors); здесь — role tags
- [x] Нижний ряд pill-тегов
- [x] Section padding, header→content 44px, max-width audience 712px

- **Найдено:** лейбл серый вместо синего accent; quote — solid `neutral-50` без dashed border, без italic
- **Исправлено:** `labelVariant="accent"`; quote — `border dashed`, italic `#737373`

---

### Фаза 4 — Competitors

- **Figma node:** `1:258`
- **Код:** `src/pages/landing/sections/Competitors/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «сравнение» + заголовок left-align
- [x] 5 строк сравнения, ширина контента 867px
- [x] Бейдж «уволен» — `PillTag` variant `fired` (Red/50 + Red/500)
- [x] Типографика строк, отступы между пунктами
- [x] `SectionHeader` width competitors 390px

- **Найдено:** расхождений нет
- **Исправлено:** —

---

### Фаза 5 — Deliverables

- **Figma node:** `1:304`
- **Код:** `src/pages/landing/sections/Deliverables/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «что вы получите?»
- [x] Двухколоночный layout, max-width 1340px
- [x] `.day` — Instrument Sans italic
- [x] Карточки день 1 / день 2 — padding, borders, radius 16px
- [x] Внутренние отступы и gap между элементами

- **Найдено:** расхождений нет (padding 32px, radius 16px по metadata)
- **Исправлено:** —

---

### Фаза 6 — How It Works

- **Figma node:** `1:339`
- **Код:** `src/pages/landing/sections/HowItWorks/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «как это работает?»
- [x] Текст слева max-width 665px
- [x] Chat mockup справа 478px, offset из `$how-it-works-chat-offset-right`
- [x] Callout-текст, типографика
- [x] Playwright: `tests/visual/how-it-works-layout.spec.ts`

- **Найдено:** highlight без переноса после «уведомление.»; callout целиком синий
- **Исправлено:** `highlightAfterLink` + `<br>` + `highlightLine2`; `calloutLead`/`calloutAccent` (dark + blue)

---

### Фаза 7 — Technology

- **Figma node:** `1:370`
- **Код:** `src/pages/landing/sections/Technology/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Center header, лейбл «Технология»
- [x] Заголовок — `width="technology"`, max-width 665px; при необходимости `titleSize`
- [x] Переносы строк заголовка (3 строки в макете)
- [x] `ComparisonTable` — font 18px, radius 16px, asymmetric columns (`--comparison-columns`)
- [x] Заголовки колонок, ✓/✗ в ячейках

- **Найдено:** лейбл «Технология» серый вместо синего accent
- **Исправлено:** `labelVariant="accent"`; `titleSize="xl"` (ранее)

---

### Фаза 8 — Experts

- **Figma node:** `1:398`
- **Код:** `src/pages/landing/sections/Experts/`, `ExpertCard.tsx`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «эксперты», заголовок с accent + `breakBefore`
- [x] `ExpertCard` — watermark 60×60 circle
- [x] Role: 15px, line-height 19px
- [x] Company pills (`PillTag`)
- [x] Gap companies → CTA 54px
- [x] CTA «Записаться на воркшоп» в карточке

- **Найдено:** расхождений нет
- **Исправлено:** —

---

### Фаза 9 — Outcomes (После воркшопа)

- **Figma node:** `1:467` (карточки: `1:473`, `1:484`)
- **Код:** `src/pages/landing/sections/Outcomes/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл — **`labelVariant="accent"`** + uppercase → «ПОСЛЕ ВОРКШОПА» синий `#1b4dff` (не grey, не `labelTransform="none"`)
- [x] Заголовок — `titleSize="xl"` (48px), `width="outcomes"` (582px), accent «придёшь»
- [x] Grid 2 col, gap 24px, max-width 982px
- [x] Карточки: padding 20px, min-height 388px
- [x] «Почувствуешь»: title mb 38px, items gap 38px; title italic Instrument Sans 18px `#262626`
- [x] «Достигнешь»: title mb 32px, items gap 32px; title italic blue; bg Blue/50, border Blue/200
- [x] Item: title 15px/600, gap to body 12px; body 14px (`card-body`)

- **Найдено:** расхождений нет (ранее исправлено)
- **Исправлено:** лейбл accent, заголовок xl/582px, card spacing, card title colors

---

### Фаза 10 — Fit

- **Figma node:** `1:495`
- **Код:** `src/pages/landing/sections/Fit/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «Кому подходит воркшоп»
- [x] Заголовок — множественные accent + `breakBefore`, max-width 798px
- [x] 3 карточки с emoji, padding 20px
- [x] Note: `noteLead` bold + `noteRest` regular
- [x] Grid gap, card borders

- **Найдено:** расхождений нет
- **Исправлено:** —

---

### Фаза 11 — Program

- **Figma node:** `1:522`
- **Код:** `src/pages/landing/sections/Program/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «программа»
- [x] «Два дня. Два продукта.» — пробел в `'Два '`, `breakBefore` на втором «Два»
- [x] `Tabs` — active: Blue/600 фон + белый текст
- [x] Step cards: `stepHeader` (num + title), margin 37px до описания
- [x] NumberBadge 42×42, grid 3 col

- **Найдено:** segmented control без border `Neutral/200` (440×50, padding 4px)
- **Исправлено:** `Tabs.module.scss` — border + explicit inactive `background: transparent`

---

### Фаза 12 — Format

- **Figma node:** `1:572`
- **Код:** `src/pages/landing/sections/Format/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «Почему этот формат работает»
- [x] Заголовок: titleBefore + titleAccent
- [x] 4 карточки A–D, `NumberBadge`
- [x] Grid 2×2, max-width 1062px
- [x] Card padding, typography

- **Найдено:** расхождений нет
- **Исправлено:** —

---

### Фаза 13 — Course Comparison

- **Figma node:** `1:604`
- **Код:** `src/pages/landing/sections/CourseComparison/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Center header, лейбл «Сравнение»
- [x] Заголовок с accent parts
- [x] `ComparisonTable` — columns other/ours, asymmetric widths
- [x] Font 18px, radius 16px
- [x] Max-width table 824px

- **Найдено:** расхождений нет
- **Исправлено:** —

---

### Фаза 14 — FAQ

- **Figma node:** `1:633`
- **Код:** `src/pages/landing/sections/Faq/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Лейбл «Вопросы»
- [x] `Accordion` — `border-bottom` между пунктами (не только gap)
- [x] Stride 94px (62 + 1 border + 31 padding-bottom)
- [x] Question 22px/500, answer typography
- [x] Playwright: `tests/visual/faq-accordion.spec.ts`

- **Найдено:** question font-weight 500 вместо 600; заголовок без accent на «это нормально»; border далеко от текста (`padding-bottom` вместо `margin-bottom`)
- **Исправлено:** `font-weight: 600`; `titleParts` + `titleSize="xl"`; stride 32px + border + 32px между пунктами

---

### Фаза 15 — CTA

- **Figma node:** `1:671`
- **Код:** `src/pages/landing/sections/Cta/`
- **Статус:** ✅ ок

**Проверить:**

- [x] Dark background `#232323`
- [x] Form card + success state — border `#404040` (Neutral/700)
- [x] Badge → heading gap 24px
- [x] Telegram button — `Button` variant `outlineDark`
- [x] Input/select height 52px, form layout max-width 544px
- [x] Playwright: `tests/visual/cta-form-layout.spec.ts`

- **Найдено:** расхождений нет
- **Исправлено:** —

---

### Фаза 16 — Footer

- **Figma node:** `1:716`
- **Код:** `src/pages/landing/sections/Footer/`
- **Статус:** ✅ ок

**Проверить:**

- [x] `border-top` `#404040`
- [x] Tagline 17px
- [x] Logo, ссылки, копирайт
- [x] Padding, alignment на тёмном фоне

- **Найдено:** расхождений нет
- **Исправлено:** —

---

## Раздел C — Cross-cutting фазы

### Фаза 17 — Shared-компоненты

- **Код:** `src/shared/ui/*`
- **Статус:** ✅ ок

**Проверить каждый компонент на Figma-варианты:**

- [x] `Button` — primary, secondary, outlineDark, sizes
- [x] `Badge`, `PillTag` — default, fired, dotColor
- [x] `Card` — padding 20px, radius 16px, border Neutral/200
- [x] `Tabs` — active/inactive colors
- [x] `Accordion` — dividers, chevron, padding
- [x] `ComparisonTable` — column variants, cell typography
- [x] `SectionHeader` — label default/accent, titleSize, width props
- [x] `AccentTitle` — lg (40px) vs xl (48px)
- [x] `LogoMarquee` — animation, full-bleed
- [x] `StatBlock`, `NumberBadge`, `LangSwitch`, form controls

- **Найдено:** Accordion question weight 500 (исправлено в фазе 14)
- **Исправлено:** regression pass — остальные компоненты соответствуют макету

---

### Фаза 18 — i18n EN

- **Код:** `src/shared/i18n/locales/en.ts`, `ru.ts`, `content.ts`
- **Статус:** ✅ ок

**Проверить:**

- [x] Parity структуры с RU (все ключи, `titleParts`, accents)
- [x] Outcomes EN title (`Where you will be` / корректный перевод)
- [x] Program title breaks и пробелы
- [x] FAQ, CTA, footer strings

- **Найдено:** расхождений нет — EN полный parity с RU
- **Исправлено:** —

---

### Фаза 19 — Адаптив 320–1024px

- **Код:** section `*.module.scss` media queries
- **Статус:** ✅ ок

**Проверить:**

- [x] Нет горизонтального скролла 320–1024px
- [x] Touch targets ≥ 44px
- [x] Grid → single column где нужно
- [x] Шрифты уменьшаются по mixins (`respond-laptop`, `respond-mobile`)
- [x] Playwright: `tests/visual/responsive.spec.ts`

- **Найдено:** расхождений нет
- **Исправлено:** —

---

### Фаза 20 — Playwright desktop regression

- **Код:** `tests/visual/`
- **Статус:** ✅ ок

**Проверить:**

- [x] `landing.spec.ts` — full page snapshot 1440px
- [x] `figma-tokens.spec.ts` — labels, tabs, badges, CTA borders
- [x] `faq-accordion.spec.ts`, `cta-form-layout.spec.ts`, `how-it-works-layout.spec.ts`
- [x] Обновить snapshots после фиксов: `npx playwright test --update-snapshots`

- **Найдено:** 12 snapshot drift в `landing.spec.ts` после правок
- **Исправлено:** обновлены snapshots desktop/tablet/mobile; 75/75 тестов passed

---

### Фаза 21 — SEO / семантика

- **Код:** `index.html`, section components
- **Статус:** ✅ ок (Schema.org — отложено)

**Проверить:**

- [x] `title`, `description`, Open Graph
- [x] Один `h1` (Hero), секции `h2` через `SectionHeader` / `AccentTitle`
- [x] `alt` у изображений
- [x] Семантика: `header`, `main`, `section`, `footer`
- [ ] Schema.org при необходимости — **отложено** (решить отдельно)

- **Найдено:** отсутствовали OG/twitter meta; нет `og:image` asset
- **Исправлено:** `index.html` — og:title, og:description, og:type, og:locale, twitter:card; `html lang` динамически через I18nProvider

---

## Раздел D — Реестр известных ошибок (watchlist)

Не регрессировать при прохождении фаз:

| # | Ошибка | Правильно | Где смотреть |
|---|--------|-----------|--------------|
| 1 | SVG `preserveAspectRatio="none"` в assets | Санитизация SVG, только viewBox | `public/assets/`, `figma-assets-layout.mdc` |
| 2 | Marquee статичный / не full-width | `LogoMarquee` + `full-bleed` + CSS animation | Hero |
| 3 | Пустой `partner-14.svg` | Удалён из data и assets | Hero partners |
| 4 | Section-label Neutral/500 weight 500 | Neutral/400 `#a3a3a3` weight 400 | Все секции (кроме accent-лейблов) |
| 5 | Стиль из metadata `name` | Сверять со screenshot | Outcomes label |
| 6 | Outcomes label grey sentence-case | `labelVariant="accent"` + uppercase | 8 accent-секций (см. правило §1) |
| 22 | Accent-лейблы неполный список в аудите | Все 12 `SectionHeader` → `labelVariant="accent"` | Competitors, Deliverables, HowItWorks, Program |
| 18 | Audience quote solid fill | dashed border + italic quote | Audience |
| 19 | How It Works callout all blue | `calloutLead` dark + `calloutAccent` blue | HowItWorks |
| 20 | How It Works highlight one line | `<br>` after `highlightAfterLink` | HowItWorks |
| 7 | `AccentTitle` всегда 40px | Center-секции могут требовать `titleSize="xl"` (48px) | Outcomes, Technology |
| 8 | Center title max-width 872px default | Подключать `$content-width-*` / `width` prop | SectionHeader |
| 9 | Comparison table 15px / equal columns | 18px, asymmetric `--comparison-columns` | Technology, CourseComparison |
| 10 | FAQ только gap между items | `border-bottom` + stride 94px | FAQ |
| 11 | CTA/footer borders светлые на тёмном | `#404040` Neutral/700 | CTA, Footer |
| 12 | PillTag «уволен» серый | variant `fired` | Competitors |
| 13 | Audience dots все синие | `dotColor` per tag | Audience |
| 14 | Tabs active белая pill | Blue/600 bg + white text | Program |
| 21 | Tabs без border | `border: 1px solid Neutral/200` на контейнере | Program `Tabs` |
| 15 | Program «Двапродукта» без пробела | `'Два '` + `breakBefore` | Program i18n |
| 16 | Outcomes card gaps одинаковые | feel 38px, achieve 32px | Outcomes |
| 17 | Outcomes card titles оба серые / оба синие | feel dark italic, achieve blue italic | Outcomes |

### Быстрые команды

```bash
# SVG sanity
rg 'preserveAspectRatio="none"' public/assets

# Build
npm run build

# Visual tests
npx playwright test tests/visual/

# Update snapshots after fixes
npx playwright test tests/visual/ --update-snapshots
```

---

## Связанные документы

- [figma-typography-spacing.mdc](../rules/figma-typography-spacing.mdc)
- [figma-assets-layout.mdc](../rules/figma-assets-layout.mdc)
- [figma-cache.mdc](../rules/figma-cache.mdc)
- [development-workflow.mdc](../rules/development-workflow.mdc)
