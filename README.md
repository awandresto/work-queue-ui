# WorkQueueUi

## Description

This test assignment was implemented using the Angular framework and is structured into standalone reusable components.

Most data is retrieved from mock JSON files via dedicated services. All data is strictly typed using TypeScript interfaces. Since only mock JSON files are used, there is no actual API request with account IDs as parameters, as would be required in a production environment.

## Technologies Used

- **Frontend:** Angular 19
- **UI Framework:** [PrimeNG](https://primeng.org/) (chosen for its close resemblance to the provided design and its flexible customization compared to alternatives like Angular Material)
- **Charts:** ng2-charts (Chart.js)
- **State Management:** RxJS
- **Styling:** SCSS
- **Icons:** PrimeIcons

## Features

- **Responsive design:** Ensure responsiveness up to small screens. The main menu becomes scrollable with navigation buttons on smaller screens.
- **Component-based architecture:** All main blocks are organized as Angular components; the table could be further abstracted into a shared component.
- **Strong TypeScript typing:** All data models are strictly typed.
- **Dashboard and Account loading:** Different preloader strategies are demonstrated.
- **Table filtering:** Tables (e.g., Policies) include search functionality and a dropdown action menu via a "three dots" icon.
- **Table calculations:** The Policies table features a "Total" row with calculated columns. Custom pipes handle calculations and formatting.
- **Policies scroll:** The Policies section supports horizontal scrolling via drag-and-drop. This functionality can be extracted into a directive for reuse.
- **Account Details:** Navigation menu works as expected. The "Historical trend" block uses Chart.js for graph rendering.
- **Auto-resizing Community block:** A custom directive automatically adjusts the height of the Community block to handle dynamic "floating" content. This can be reused in similar scenarios.

## Additional Notes

- Some parts, such as API integration, are simulated using mock data.
- GPT-4 (ChatGPT) was used for code snippets, mock-data preparation, and UI logic.

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/awandresto/work-queue-ui.git
   cd work-queue-ui
