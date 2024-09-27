# Dynamic Forms with React and TypeScript

This project showcases a series of progressively complex dynamic forms built with React, TypeScript, useForm, Tailwind CSS, and Zod for form validation. Each form is designed to demonstrate different aspects of dynamic and conditional form handling, validation, and user interface design.

## Forms Overview

The project includes three levels of forms:

- **Level 1:** Basic Dynamic Form (Event Registration Form)
- **Level 2:** Intermediate Dynamic Form (Job Application Form)
- **Level 3:** Advanced Dynamic Form (Survey Form with Dependent Questions)

### Level 1: Basic Dynamic Form

**Objective:** Create a form with dynamic fields and simple validation.
**Form Type:** Event Registration Form

- Fields: Name, Email, Age, Guest option, Guest Name (conditional)
- Conditional Logic: Show "Guest Name" only if attending with a guest.
- Validation: Ensures name, email, and age are entered correctly. Guest name is required if attending with a guest.

### Level 2: Intermediate Dynamic Form

**Objective:** Build a form with nested conditional fields and multiple field types.
**Form Type:** Job Application Form

- Fields: Full Name, Email, Phone Number, Position, Relevant Experience, Portfolio URL, Management Experience, Additional Skills, Preferred Interview Time
- Conditional Logic: Show fields based on the position applied for.
- Validation: Comprehensive checks including email format, mandatory fields based on user choices.

### Level 3: Advanced Dynamic Form

**Objective:** Develop a form with complex conditional fields, dynamic sections, and integration with an external API.
**Form Type:** Survey Form

- Fields: Full Name, Email, Survey Topic, Dynamic Sections (Technology, Health, Education), Feedback
- Conditional Logic: Display sections based on the selected survey topic. Fetch additional questions based on topic via an API.
- Validation: Field-specific validations including checks for minimum feedback length.

## Tech Stack

- **React:** For building the user interface.
- **TypeScript:** For adding static type definitions.
- **useForm:** Utilized for form state management.
- **Tailwind CSS:** For styling the components.
- **Zod:** Used for form validation schemas.
