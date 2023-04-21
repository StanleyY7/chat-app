import React from 'react'
import AuthPage from './AuthPage'

describe('<AuthPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AuthPage />)
  })
})