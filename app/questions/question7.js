import React from 'react';

export default function Question7() {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Question 7</h2>
      <p className="mb-4 text-sm italic">
        Background: I am a CISO for a firm that just signed on for Enterprise with Vercel Secure Compute. I am looking forward to meeting you for an onboarding session to talk about the security products Vercel offers as well as go over the state of our customer journey.
      </p>
      <p className="mb-4">
        What resources would you want to prepare to make sure that the CISO has everything they need to succeed as they migrate to the Enterprise version of the platform?
      </p>
      <div className="bg-gray-100 rounded-md p-4 flex flex-col space-y-4 text-teal-900">
        <p>Hi (customer)</p>
        <p>Great to hear from you.</p>
        <p>I’m looking forward to working with you and taking you through everything you’ll need to succeed as you migrate to Enterprise with Vercel Secure Compute.</p>
        <p>Ahead of our session, I’ve provided some resources for you to review. If there are any specific areas you'd like to focus on during our initial session or any security concerns or requirements you'd like to address, please let me know ahead of our session so I can factor it in (or get back to you with an answer before then if it's urgent).</p>
        <ul className="list-disc list-inside">
          <p className="font-bold">Proposed Agenda for Session 1:</p>
          <li>Introductions and Overview (Access Review)</li>
          <li>Objectives and Journey Review</li>
          <li>Setup and Configuration Overview</li>
        </ul>
        <ul className="list-decimal list-inside">
          <p>I’ve outlined a plan for moving forward which has 4 Key Levels:</p>
          <li>Reactive — Initial Setup and Configuration</li>
          <li>Pro-active — Team Onboarding and Training, Audit and Optimisation</li>
          <li>Strategic — Analyse, Review and Fine Tune</li>
          <li>Transformative  — Collaborate, Review and Plan</li>
        </ul>
        <p>It’s designed to guide you through the process of adopting Vercel, optimising your current state then setting you up for continued success. We'll discuss your specific objectives, including your current state and migration plan during Session 1 and have a brief walk through the Pro-active level plan; this provides a step-by-step approach for the first few months, focusing on setup, team training, audits and performance optimisation. </p>
        <ul className="list-disc list-inside">
          <p className="font-bold">Pre-Session Resources and Action Items</p>
          <li>Familiarise yourself with our security docs https://vercel.com/docs/security/overview (if not already) and review our Access Roles doc before anyone's given access. (https://vercel.com/docs/accounts/team-members-and-roles/access-roles#access-roles)</li>
          <li>Run through our Going Live Checklist https://vercel.com/docs/production-checklist which includes operational excellence and security.</li>
          <li>Join the Vercel community to connect with other users and find additional resources (https://vercel.community/)</li>
          <li>We also have a great YouTube Channel and I think you’ll appreciate our ‘Trying to attack the Firewall’ video so I’ve linked that here too. https://youtu.be/t-U6vTrx_9Y?si=OtGRlrYKSEX1BC0y</li>
        </ul>
        <p>Remember, this is a journey and we'll be working together to move through these levels at a pace that suits your organisation's needs and capacity.</p>
        <p>I look forward to meeting you and do let me know if you have any questions in the mean time.</p>
      </div>
    </div>
    );
  }