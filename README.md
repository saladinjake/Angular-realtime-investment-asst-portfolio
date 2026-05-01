# Investment Tracker

A financial portfolio tracking application built with Angular. Users can monitor their investment holdings, track portfolio performance over time, and visualize asset allocation and returns through charts. All data is managed in-memory with no backend or authentication required.

## Features

The dashboard displays a summary of total portfolio value, overall gain or loss, and percentage return. Individual holdings are listed with the asset name, number of units, purchase price, current price, and current gain or loss. Users can add new holdings through a form and remove existing ones. A market feed section displays simulated price movements for tracked assets. Charts visualize asset allocation by type and portfolio performance over time.

## Technology Stack

- Angular: Component-based framework used for all application views and routing.
- Angular Router: Manages navigation between the dashboard, portfolio detail, and add-holding form.
- Angular Services: PortfolioService manages the holdings list and calculates performance metrics. MarketService provides simulated market price data.
- TypeScript: Typed interfaces for holdings, price data, and portfolio summary objects.
- Angular Material: Used for form inputs, tables, cards, and navigation components.
- Chart.js or ngx-charts: Renders the allocation pie chart and performance line graph.
- RxJS: Observable streams used in services for reactive data flow across components.

## Project Structure

The source directory contains a dashboard component with summary cards and charts, a holdings list component, an add-holding form component, and a market feed component. Services handle data computation and state management. Models define the structure of holding and market data objects.

## Running the Project

Install dependencies and start the development server:

    npm install
    ng serve

The application is available at http://localhost:4200.

Last updated: 2026-05-01
