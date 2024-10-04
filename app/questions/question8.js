import React from 'react';

export default function Question8() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question 8</h2>
      <p className="mb-4">
        How could we improve or alter this familiarisation exercise?
      </p>
      <div className="bg-gray-100 rounded-md p-4 flex flex-col space-y-4 text-teal-900">
        <p>The example in the PDF uses the boilerplate which is based on the old create-next-app template. The thumbnail image on the templates page shows that format too, however based on the May 23rd update available in the blog I realised the links and some of the default set-up has been stripped out.
          It took me a minute to figure that out and so if the original template can be added somewhere or an alternate template provided for this sort of exercise I think it would make things clearer.</p>
        <p>Having said that, I was able to troubleshoot, search the blog, the docs and Vercel's github to compare, and it gave me a more indepth crash course in order to produce this. </p>
        <p>Where possible, relevant to plans and available features it would be great to include 'A customer on the hobby / pro plan'... For question 5, without plan details I wasn’t 100%, but if I knew their plan and they weren’t using it, then I’d recommend available Vercel features.</p>
        <p className="italic text-sm">I probably don't need to mention it but normally I embed all the URLs in text rather than how it appears here.</p>
      </div>
    </div>
  );
}