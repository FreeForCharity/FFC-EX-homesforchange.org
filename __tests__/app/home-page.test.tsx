import React from 'react'
import { render, screen } from '@testing-library/react'

import HomePage from '../../src/app/home-page'

describe('HomePage (app/home-page)', () => {
  it('should render without crashing', () => {
    render(<HomePage />)
  })

  it('should render the real hero heading, not a placeholder', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading', { level: 1, name: 'Homes for Change' })).toBeInTheDocument()
  })

  it('should link the hero Donate Now button to the donate page', () => {
    render(<HomePage />)
    const donateLinks = screen.getAllByText('Donate Now')
    for (const link of donateLinks) {
      expect(link.closest('a')).toHaveAttribute('href', '/donate')
    }
  })

  it('should render an About Us section linking to the full page', () => {
    render(<HomePage />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText('Read More').closest('a')).toHaveAttribute('href', '/about')
  })

  it('should render the three "How We Help" cards', () => {
    render(<HomePage />)
    for (const title of [
      'Transitional Housing',
      'Counseling & Training',
      'A Permanent Endowment',
    ]) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('should link Join Now to the volunteer page', () => {
    render(<HomePage />)
    expect(screen.getByText('Join Now').closest('a')).toHaveAttribute('href', '/volunteer')
  })

  it('should link Contact Us to the contact page', () => {
    render(<HomePage />)
    expect(screen.getByText('Contact Us').closest('a')).toHaveAttribute('href', '/contact')
  })

  // This fork's live WordPress source had no team page content — the
  // template's sample-team block is intentionally not mounted here rather
  // than shown with fabricated members. See src/data/team.ts.
  it('does not render a team section (no real team data exists for this charity)', () => {
    render(<HomePage />)
    expect(screen.queryByTestId('team-member-card')).not.toBeInTheDocument()
    expect(screen.queryByText('The Free For Charity Team')).not.toBeInTheDocument()
  })
})
