import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"

export default (() => {
  const NoteHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    // only render on real notes (have a `type` field) — skips
    // the six hand-built pages, which already have their own header
    if (!fileData.frontmatter?.type) return null

    const type = String(fileData.frontmatter?.type ?? "")
    const kind = String(fileData.frontmatter?.kind ?? "")
    const title = String(fileData.frontmatter?.title ?? fileData.slug ?? "")

    const sectionMap: Record<string, [string, string]> = {
      source: ["Sources", "/sources"],
      idea: ["Ideas", "/ideas"],
      publication: ["Publications", "/publications"],
    }
    const [sectionLabel, sectionHref] = sectionMap[type] ?? ["Home", "/"]

    return (
      <div class="page-header-mini">
        <svg width="0" height="0" style="position:absolute">
          <defs>
            <filter id="roughen-soft-mini" x="-50%" y="-50%" width="200%" height="200%">
              <feTurbulence type="fractalNoise" baseFrequency="0.02 0.06" numOctaves="3" seed="7" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="18" xChannelSelector="R" yChannelSelector="G" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="0.8" />
            </filter>
          </defs>
        </svg>

        <svg class="masthead-smear-mini" viewBox="0 0 340 170" preserveAspectRatio="none">
          <g style="mix-blend-mode:multiply">
            <path
              d="M336 106 Q300 116 260 104 Q220 108 200 114 Q180 114 155 82 Q125 55 88 62 Q55 68 28 58
                 Q55 78 88 94 Q125 112 160 102 Q188 94 216 116 Q244 138 280 146 Q312 154 336 106 Z"
              fill="#c99a2e" opacity="0.4" filter="url(#roughen-soft-mini)"
            />
            <path
              d="M336 106 Q270 98 224 102 Q180 108 150 80 Q120 54 84 60"
              fill="none" stroke="#c99a2e" stroke-width="14" stroke-linecap="round" opacity="0.3" filter="url(#roughen-soft-mini)"
            />
          </g>
          <circle cx="330" cy="98" r="2.6" fill="#c99a2e" opacity="0.38" filter="url(#roughen-soft-mini)" />
          <circle cx="334" cy="118" r="2" fill="#c99a2e" opacity="0.32" filter="url(#roughen-soft-mini)" />
        </svg>

        <p class="eyebrow">an interdisciplinary research archive</p>
        <a href="/" class="masthead-mini" style="font-family:'MyHand','Fraunces',serif;font-weight:normal;">Annotated</a>
        <svg class="rule-double" viewBox="0 0 880 12" preserveAspectRatio="none" style="height:8px;">
          <path d="M2 6 Q40 2 90 7 T190 5 T290 8 T390 4 T490 7 T590 5 T690 8 T790 4 T878 6" fill="none" stroke="#23555f" stroke-width="1.3" stroke-linecap="round" opacity="0.35" transform="translate(1.6,-1)"></path>
          <path d="M2 6 Q40 2 90 7 T190 5 T290 8 T390 4 T490 7 T590 5 T690 8 T790 4 T878 6" fill="none" stroke="#8c2f22" stroke-width="1.3" stroke-linecap="round" opacity="0.8"></path>
        </svg>
        <p class="crumb-trail">
          <a href="/">Home</a><span>/</span>
          <a href={sectionHref}>{sectionLabel}</a><span>/</span>{title}
        </p>
        {kind ? <p class="section-label" style="justify-content:center; border:none;">{kind}</p> : null}
      </div>
    )
  }
  return NoteHeader
}) satisfies QuartzComponentConstructor