// Stand-in for the /create customizer state. The preview cards read the
// active style and fonts from it; here they are fixed to this project's
// design system (components.json: base-nova, Plex Sans + Source Serif 4).
const params = { style: "nova", font: "ibm-plex-sans", fontHeading: "source-serif-4" }

export function useDesignSystemSearchParams() {
  return [params] as const
}

export const FONTS = [
  { name: "IBM Plex Sans", value: "ibm-plex-sans" },
  { name: "Source Serif 4", value: "source-serif-4" },
]

export const STYLES = [{ name: "nova", title: "Nova" }]
