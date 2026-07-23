// NoteHeader.tsx
import type { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "@quartz-community/types"

export default (() => {
  const NoteHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (!fileData.frontmatter?.type) return null

    const type = String(fileData.frontmatter?.type ?? "")
    const kind = String(fileData.frontmatter?.kind ?? "")
    const title = String(fileData.frontmatter?.title ?? fileData.slug ?? "")

    const sectionMap: Record<string, [string, string]> = {
      source: ["Sources", "./sources"],
      idea: ["Ideas", "./ideas"],
      publication: ["Publications", "./publications"],
    }
    const [sectionLabel, sectionHref] = sectionMap[type] ?? ["Home", "./"]

    return (
      <div class="page-header-mini">
        <div class="masthead-group-mini">
          <p class="eyebrow"><span class="eyebrow-text">an interdisciplinary research archive</span></p>
          <a href="./" class="masthead-mini" style="font-family:'MyHand','Fraunces',serif; font-weight:normal;">Annotated</a>
          <img src="./static/underline-thick-gold.png" class="pencil-rule-mini" alt="" />
        </div>
        <h1 class="note-page-title">{title}</h1>
        <p class="crumb-trail">
          <a href="./">Home</a><span>/</span>
          <a href={sectionHref}>{sectionLabel}</a><span>/</span>{title}
        </p>
        {kind ? <p class="note-kind-label">{kind}</p> : null}
      </div>
    )
  }
  return NoteHeader
}) satisfies QuartzComponentConstructor
