import InquiryForm from './components/InquiryForm';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Main Content */}
          <div className="space-y-12 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold">
              The Experience Machine
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              The experience machine takes a person on an adventure they could not have imagined for themselves.
            </p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">How it works</h2>
              <p className="text-lg text-gray-400">
                A user will submit their budget, locale, and dates. The Machine takes care of the rest.
              </p>
            </div>
            
            <div className="space-y-2 pt-8">
              <p className="text-gray-400">Website is being updated</p>
              <p className="text-lg">
                Email inquiries to: <a href="mailto:willandmark6@gmail.com" className="underline hover:text-gray-300">willandmark6@gmail.com</a>
              </p>
            </div>
          </div>
          
          {/* Right Column - Form */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-full max-w-md">
              <InquiryForm />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}