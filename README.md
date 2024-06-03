# Airbnb Clone

This project is a clone of Airbnb, built using Next.js, React, Tailwind CSS, and Prisma. It aims to replicate core functionalities of Airbnb, providing a platform for users to browse, book, and manage listings.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User Authentication
- Browse Listings
- Search and Filter Listings
- Booking System
- User Profiles
- Interactive Maps with Leaflet

## Demo

Check out the live demo [here](#).

## Installation

To get a local copy up and running, follow these steps:

### Prerequisites

Ensure you have the following installed:

- Node.js (v18.x.x or later)
- npm (v9.x.x or later) or yarn (v1.22.x or later)
- PostgreSQL (for Prisma)

### Clone the Repository

```sh
git clone https://github.com/your-username/airbnb-clone.git
cd airbnb-clone
```
## Install Dependencies

### Using npm:

```sh
npm install

```
### Using yarn:
Create a .env file in the root directory and add the following:
DATABASE_URL="postgresql://user:password@localhost:5432/mydb?schema=public"
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"

### Generate Prisma Client

```sh
npx prisma generate
```
### Usage
#### Development
To start the development server, run:
    
    ```sh
    npm run dev
    ```
### Production
To build the application for production, run:
    
```sh
npm run build
npm start
```

### Technologies Used

- Next.js: Framework for server-side rendering and static site generation.
- React: JavaScript library for building user interfaces.
- Tailwind CSS: Utility-first CSS framework.
- Prisma: Next-generation ORM for Node.js and TypeScript.
- Supabase: Open-source Firebase alternative.
- Leaflet: JavaScript library for interactive maps.

### Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
1. Fork the Project
2. Create your Feature Branch (git checkout -b feature/AmazingFeature)
3. Commit your Changes (git commit -m 'Add some AmazingFeature')
4. Push to the Branch (git push origin feature/AmazingFeature)
5. Open a Pull Request

### Contact
My Email - naglaafouz4@gmail.com

Project Link: https://bnb-pyrocode.vercel.app




