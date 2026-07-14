import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"

export default (() => {
  const NoteHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
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