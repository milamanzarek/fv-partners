import '@testing-library/jest-dom';
import { vi } from 'vitest';

window.scrollTo = vi.fn();

class IntersectionObserverMock {
  readonly root: Element | null = null;
  readonly rootMargin: string = '';
  readonly thresholds: ReadonlyArray<number> = [];
  disconnect = vi.fn();
  observe = vi.fn();
  takeRecords = vi.fn();
  unobserve = vi.fn();
}

vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
