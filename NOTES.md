# ui-testing

The distinction between different testing methods can be blurry for components. Instead, we can focus on different characteristics of the UI that we can test.

## Visual

Visual tests verify whether a component renders correctly given a set of props and state.

## Composition

Components are interconnected, with data flowing between them. We can verify this integration by running visual tests on higher-level components and pages.

## Interaction

Interaction tests verify whether events are handled as intended. They simulate user behaviour such as a click or input to verify that the state is updated correctly.

## Accessibility

Accessibility tests uncover usability issues related to visual, hearing, mobility and other disabilities.

# User flow

Walks the application through every step required for a user to complete a task, normally across multiple components.

- 📚 Isolate components using Storybook. Write test cases where each state is reproduced using props and mock data.
- ✅ Catch visual bugs and verify composition using Chromatic.
- 🐙 Verify interactions with Jest and Testing Library.
- ♿️ Audit accessibility of your components using Axe.
- 🔄 Verify user flows by writing end-to-end tests with Cypress and Playwright.
- 🚥 Catch regressions by automatically running tests with GitHub Actions.
