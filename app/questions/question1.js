export default function Question1() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question 1: Next.js and React</h2>
      <p className="mb-4">
          Please compare the similarities and differences between Next.js and React.
      </p>
      <div className="bg-gray-100 rounded-md p-4 flex flex-col space-y-4">
        <p className="pl-2 text-wrap text-teal-900">
          React is a fundamental library for building user interfaces, while Next.js is a full-featured framework that builds on top of React. Both use components and JSX, but Next.js offers additional features like server-side rendering, static site generation, and automatic code splitting, making it easier to create performant and scalable web applications.
        </p>
        
        <ul className="pl-2 list-disc list-inside text-teal-900">
          <li>In Next.js, using App Router a folder and file named about/page.js would create a /about route. In React, you'd use a routing library to define routes</li>
          <li>Rendering can differ between server and client</li>
          <li>Next.js could pre-render a static homepage for faster initial load. React would require client-side rendering.</li>
          <li>Next.js could create a serverless function in pages/api/users.js to fetch user data. React would require a separate server or backend.</li>
        </ul>
      </div>
    </div>
  );
}