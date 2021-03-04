// NOTE: 本処理はreact-testing-library公式ドキュメントから引用しています
// 引用元: https://testing-library.com/docs/react-testing-library/setup/#custom-render

import { render } from '@testing-library/react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Providers = ({ children }: any) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  children;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: React.ReactElement<unknown>, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
