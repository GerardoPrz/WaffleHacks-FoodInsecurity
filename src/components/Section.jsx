export function Section({ children }) {
  return <section className="flex flex-col gap-2">{children}</section>
}

export function SectionHeader({ children }) {
  return <header className="flex flex-col gap-2">{children}</header>
}

export function SectionTitle({ children }) {
  return <h2 className="text-lg">{children}</h2>
}
