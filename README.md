# Cannes Serrurier Landing Page

This project is a landing page for Cannes Serrurier, a 24/7 locksmith service in Cannes, France.

## Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Docker and Docker Compose (for containerized deployment)

## Getting Started

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/cannes-serrurier-landing.git
   cd cannes-serrurier-landing
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the application for production, run:

\`\`\`
npm run build
# or
yarn build
\`\`\`

## Docker Deployment

This project includes a Dockerfile and docker-compose.yml for easy containerized deployment.

1. Build the Docker image:
   \`\`\`
   docker build -t cannes-serrurier-landing .
   \`\`\`

2. Run the container using Docker Compose:
   \`\`\`
   docker-compose up -d
   \`\`\`

The application will be available at [http://localhost:3000](http://localhost:3000).

## Environment Variables

The following environment variables can be set in a \`.env.local\` file:

- \`NEXT_PUBLIC_WHATSAPP_NUMBER\`: The WhatsApp number for the contact button

## Project Structure

- \`pages/\`: Contains the main page components
- \`components/\`: Reusable React components
- \`public/\`: Static assets like images
- \`styles/\`: Global styles and CSS modules

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

