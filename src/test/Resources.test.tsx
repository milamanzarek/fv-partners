import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Resources } from '../pages/resources';
import { MemoryRouter } from 'react-router-dom';

// Mock motion/react to avoid animation issues in tests
vi.mock('motion/react', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }: any) => <>{children}</>,
}));

describe('Resources Page', () => {
  it('renders the resources title and description', () => {
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Client/i)).toBeDefined();
    expect(screen.getByText(/Resources/i)).toBeDefined();
    expect(screen.getByText(/A curated selection of tools/i)).toBeDefined();
  });

  it('renders at least one resource card from the JSON data', () => {
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>
    );
    
    // Check for "10-Step Financial Planning Pocket Guide" which is in our JSON
    expect(screen.getByText(/10-Step Financial Planning Pocket Guide/i)).toBeDefined();
    expect(screen.getByText(/Cash Burn Ratio Calculator/i)).toBeDefined();
  });

  it('renders the custom resource request section', () => {
    render(
      <MemoryRouter>
        <Resources />
      </MemoryRouter>
    );
    
    expect(screen.getByText(/Looking for something specific\?/i)).toBeDefined();
    expect(screen.getByText(/Request Custom Resource/i)).toBeDefined();
  });
});
