export default function clsx(...classNames: unknown[]): string {
  const filtered = classNames.filter((cls) => cls) as string[]
  return Array.from(new Set(filtered)).join(' ')
}
