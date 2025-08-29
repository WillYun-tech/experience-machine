export default function ExperienceMachineLanding() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        
        {/* Main Title */}
        <h1 className="text-5xl md:text-6xl font-bold">
          The Experience Machine
        </h1>
        
        {/* Description */}
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
          The experience machine takes a person on an adventure they could not have imagined for themselves.
        </p>
        
        {/* How it Works */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">How it works</h2>
          <p className="text-lg text-gray-400">
            A user will submit their budget, locale, and dates. The Machine takes care of the rest.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-2 pt-8">
          <p className="text-gray-400">Website is being updated</p>
          <p className="text-lg">
            Email inquiries to: <a href="mailto:willandmark6@gmail.com" className="underline hover:text-gray-300">willandmark6@gmail.com</a>
          </p>
        </div>
        
      </div>
    </div>
  );
}