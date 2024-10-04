import React from 'react';
import Link from 'next/link';

export default function Question2() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question 2</h2>
      <p className="mb-4">
        A customer has reached out asking, “When should I choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?” Write a reply to the customer.
      </p>
      <div className="bg-gray-100 rounded-md p-4 flex flex-col space-y-4 text-teal-900">
        <p>Hi [customer name],</p>
        <p>Great question. I’m going to provide a quick overview of the different options; however, it will depend on your specific use case and requirements. Factors such as performance requirements, global distribution needs, computational intensity, and the specific functionality you're implementing will all be considerations. Once you’ve read through and discussed it at your end, if you can provide me with some more details on your specific needs, then we can dive in a bit more together.</p>
        <p>Edge Functions</p> <p>You’ll choose this when you need things like global distribution by default, real-time caching, and streaming of responses but want something lightweight. It’s ideal for querying databases or AI services that have longer request times and handling specific, dynamic parts of your site after the page has loaded—things like date pickers with availability or the weather, for example.</p>
        <p>Edge Middleware</p> <p>Is for when you need to process requests before they reach your cached content and is particularly useful for: Authentication, Geolocation-based content, A/B testing and Bot identification. Because middleware runs before the cache, it's an effective way of providing personalisation to statically generated content.</p>
        "https://vercel.com/docs/infrastructure/compute#what-are-edge-functions-and-edge-middleware” Edge Functions and Middleware
        <p>Serverless Functions (Node.js)</p>
        <p>You’ll want to opt for this if you require more RAM and CPU power, need complete Node.js compatibility and tend to run intense workloads or larger function bundles (up to 250 MB).
        It’s suitable for handling authentication, form submissions and database queries and scenarios where your data source is geographically far from the user's request.</p>

        <p>Here’s some docs with more information to help you decide, but if you have any specific questions, do let me know.</p>
      <ul className="pl-2 list-disc list-inside">
          <li>
            Choosing a runtime https://vercel.com/docs/functions/runtimes
          </li>
          <li>
            Runtimes Comparison https://vercel.com/docs/functions/runtimes#runtimes-comparison
          </li>
          <li>
            Compute on Vercel https://vercel.com/docs/infrastructure/compute
          </li>
          <li>
            Edge Network Overview https://vercel.com/docs/edge-network/overview
          </li>
        </ul>        
      </div>
    </div>
  );
}