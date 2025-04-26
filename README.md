# Feedback System

This is a web application built with **Next.js** and **Supabase** for collecting and managing user feedback. It allows users to submit feedback on the home page, while administrators can view all submitted feedback on the admin route.

## Features

### Home Route (/)
- **Feedback Form:** Users can submit feedback with their first name, last name, email, and a feedback message.
- **Data Submission:** When the user submits the form, the feedback is sent to a **Supabase Edge Function** and stored in a **Supabase database**.

### Admin Route (/admin)
- **View Feedback:** Admins can view all submitted feedback in a list format.
- **Data Fetching:** Feedback data is fetched from the Supabase database using the **Supabase JavaScript client**.
- **Time Formatting:** Submission times are formatted for readability using **Day.js**.

## Tech Stack
- **Next.js:** Frontend framework and routing.
- **Supabase:** Backend services for authentication, database management, and serverless functions.
- **Shadcn UI:** Component library for building UI elements.
- **Day.js:** Library for formatting timestamps.

## Database Structure
- **Table: feedback**
  - **first_name**: User's first name (string)
  - **last_name**: User's last name (string)
  - **email**: User's email address (string)
  - **message**: The feedback message (text)
  - **created_at**: Timestamp when the feedback was submitted (datetime)