// Stand-in for the /create customizer state. The preview cards read the
// active style and fonts from it; here they are fixed to this project's
// design system (components.json: base-nova; Penasihat type: Newsreader
// headings, Instrument Sans body).
const params = { style: "nova", font: "instrument-sans", fontHeading: "newsreader" }

export function useDesignSystemSearchParams() {
  return [params] as const
}

export const FONTS = [
  { name: "Instrument Sans", value: "instrument-sans" },
  { name: "Newsreader", value: "newsreader" },
]

export const STYLES = [{ name: "nova", title: "Penasihat" }]
