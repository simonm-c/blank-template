/// <reference types="vite/client" />
// fix for cases where 'import xxx from ~icons/...' syntax is required
declare module '~icons/*' {
  import type { FunctionalComponent, SVGAttributes } from 'vue'
  const component: FunctionalComponent<SVGAttributes>
  export default component
}
