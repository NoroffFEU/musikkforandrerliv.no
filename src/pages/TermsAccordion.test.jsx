import { describe, expect, test } from '@jest/globals';
import { fireEvent, render, screen } from '@testing-library/react';

import { TermsAccordion } from './TermsAccordion';

describe('TermsAccordion', () => {
  const title = 'Test Title';
  const content = 'Test Content';

  test('renders with title and is initially closed', () => {
    render(
      <TermsAccordion title={title}>
        <p>{content}</p>
      </TermsAccordion>,
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.queryByText(content)).not.toBeInTheDocument();
  });

  test('toggles content visibility on click', () => {
    render(
      <TermsAccordion title={title}>
        <p>{content}</p>
      </TermsAccordion>,
    );
    const button = screen.getByRole('button', { name: title });
    fireEvent.click(button);
    expect(screen.getByText(content)).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.queryByText(content)).not.toBeInTheDocument();
  });

  test('has correct ARIA attributes for accessibility', () => {
    render(
      <TermsAccordion title={title}>
        <p>{content}</p>
      </TermsAccordion>,
    );

    const button = screen.getByRole('button', { name: title });

    expect(button).toHaveAttribute('aria-expanded', 'false');
    // Check aria-controls points to the region
    const contentRegionId = button.getAttribute('aria-controls');
    expect(contentRegionId).toBeTruthy();

    fireEvent.click(button);

    expect(button).toHaveAttribute('aria-expanded', 'true');
    const contentRegion = screen.getByRole('region');
    expect(contentRegion).toHaveAttribute('aria-labelledby', button.id);
    expect(contentRegion).toHaveAttribute('id', contentRegionId);
  });
});
