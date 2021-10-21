export function rimrafSync(path: string): void
export const rimraf: ((path: string) => Promise<void>) & {
  sync: (path: string) => void
}
export default rimraf
