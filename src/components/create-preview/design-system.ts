// Stand-in for the /create customizer state. The preview cards read the
// active style and fonts from it; here they are fixed to this project's
// design system (components.json: base-nova, Inter).
const params = { style: "nova", font: "inter", fontHeading: "inter" }

export function useDesignSystemSearchParams() {
  return [params] as const
}

export const FONTS = [{ name: "Inter", value: "inter" }]

export const STYLES = [{ name: "nova", title: "Nova" }]
