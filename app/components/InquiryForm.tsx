'use client';

export default function InquiryForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Submit an Inquiry</h2>
      
      {/* Google Form Embed */}
      <div className="bg-gray-900 rounded-lg p-4">
        <iframe 
          src="https://docs.google.com/forms/d/e/1FAIpQLSfcZsvWL1USlphrarI216STmNhZb1LRrjDw9tgIJyNde7PqjQ/viewform?embedded=true"
          width="100%" 
          height="600" 
          style={{ border: 0 }}
          className="rounded-lg"
          title="Experience Machine Inquiry Form"
        >
          Loading…
        </iframe>
      </div>
      
      {/* Alternative: Direct link if embed doesn't work well */}
      <div className="text-center">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSfcZsvWL1USlphrarI216STmNhZb1LRrjDw9tgIJyNde7PqjQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-black py-2 px-6 rounded-md hover:bg-gray-200 transition-colors font-medium"
        >
          Open Form in New Tab
        </a>
      </div>
    </div>
  );
}