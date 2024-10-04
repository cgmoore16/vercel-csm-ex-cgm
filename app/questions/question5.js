import React from 'react';

export default function Question5() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question 5</h2>
        <p className="mb-4">
          A customer is just getting started with Vercel and has questions about recommended options for third-party integrations for Monitoring or Logging. How would you respond to the customer?
        </p>
      <div className="bg-gray-100 rounded-md p-4 flex flex-col space-y-4 text-teal-900">
        <p>Hi [customer name],</p>
        <p>Great to hear you're getting started and want to explore integrations.</p>
        <p>There are several monitoring and logging options beyond our built-in features. Was there anything specific you were looking for?</p>
        <p>Here are a few third-party integrations that you could consider as you get started:</p>
        
        <ul className="list-disc list-inside">
          <p>Monitoring:</p>
          <li>Checkly (https://vercel.com/integrations/checkly)</li>
          <p>Logging:</p>
          <li>Axiom (https://vercel.com/integrations/axiom)</li>
          <li>BetterStack (https://vercel.com/integrations/betterstack)</li>
          <li>LogAlert (https://vercel.com/integrations/logalert)</li>
        </ul>
        <p>For a comprehensive list of our third-party and native integrations, visit (https://vercel.com/docs/integrations) or you can explore the other Monitoring (https://vercel.com/marketplace?category=monitoring) and Logging options (https://vercel.com/marketplace?category=logging)</p>
        <p>To discover our built-in features, check out the Observability https://vercel.com/docs/observability section in our docs.</p>
        <p>Let me know if you have questions or would like to review any other features.</p>
      </div>
    </div>
  );
}