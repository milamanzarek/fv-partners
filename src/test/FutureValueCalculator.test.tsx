import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FutureValueCalculator } from '../components/resources/FutureValueCalculator';

describe('FutureValueCalculator', () => {
  it('renders with initial default values', () => {
    render(<FutureValueCalculator />);

    // Check initial values in labels/displays
    expect(screen.getByText('$100,000')).toBeDefined();
    expect(screen.getByText('7%')).toBeDefined();
    expect(screen.getByText('10 Years')).toBeDefined();

    // Check initial calculation: 100000 * (1.07)^10 = 196,715.13...
    // The component uses maximumFractionDigits: 0, so it should be $196,715
    expect(screen.getByText('$196,715')).toBeDefined();
  });

  it('updates Projected Value when Initial Capital changes', () => {
    render(<FutureValueCalculator />);

    const capitalInput = screen.getByLabelText(/Initial Capital/i);
    fireEvent.change(capitalInput, { target: { value: '200000' } });

    // 200000 * (1.07)^10 = 393,430.27... -> $393,430
    expect(screen.getByText('$200,000')).toBeDefined();
    expect(screen.getByText('$393,430')).toBeDefined();
  });

  it('updates Projected Value when Annual Growth changes', () => {
    render(<FutureValueCalculator />);

    const growthInput = screen.getByLabelText(/Annual Growth/i);
    fireEvent.change(growthInput, { target: { value: '10' } });

    // 100000 * (1.10)^10 = 259,374.24... -> $259,374
    expect(screen.getByText('10%')).toBeDefined();
    expect(screen.getByText('$259,374')).toBeDefined();
  });

  it('updates Projected Value when Horizon changes', () => {
    render(<FutureValueCalculator />);

    const horizonInput = screen.getByLabelText(/Horizon/i);
    fireEvent.change(horizonInput, { target: { value: '20' } });

    // 100000 * (1.07)^20 = 386,968.44... -> $386,968
    expect(screen.getByText('20 Years')).toBeDefined();
    expect(screen.getByText('$386,968')).toBeDefined();
  });

  it('handles minimum values correctly', () => {
    render(<FutureValueCalculator />);

    const capitalInput = screen.getByLabelText(/Initial Capital/i);
    const growthInput = screen.getByLabelText(/Annual Growth/i);
    const horizonInput = screen.getByLabelText(/Horizon/i);

    fireEvent.change(capitalInput, { target: { value: '10000' } });
    fireEvent.change(growthInput, { target: { value: '1' } });
    fireEvent.change(horizonInput, { target: { value: '1' } });

    // 10000 * (1.01)^1 = 10,100
    expect(screen.getByText('$10,100')).toBeDefined();
  });

  it('handles maximum values correctly', () => {
    render(<FutureValueCalculator />);

    const capitalInput = screen.getByLabelText(/Initial Capital/i);
    const growthInput = screen.getByLabelText(/Annual Growth/i);
    const horizonInput = screen.getByLabelText(/Horizon/i);

    fireEvent.change(capitalInput, { target: { value: '1000000' } });
    fireEvent.change(growthInput, { target: { value: '25' } });
    fireEvent.change(horizonInput, { target: { value: '40' } });

    // 1,000,000 * (1.25)^40 = 7,523,163,845.26... -> $7,523,163,845
    // Note: Intl.NumberFormat adds commas
    expect(screen.getByText('$7,523,163,845')).toBeDefined();
  });
});
