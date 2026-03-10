import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Energethics?</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="mb-8 md:mb-12 bg-white p-6 md:p-8 rounded-lg shadow-md">
          <p className="text-gray-700 leading-relaxed mb-6">
            We differentiate ourselves through a client-centric approach:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-primary font-bold mr-4">•</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Tailored Solutions for Maximum Impact</h4>
                <p className="text-gray-600">Every solution is crafted to meet the precise needs of your operations.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-4">•</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">End-to-End Support</h4>
                <p className="text-gray-600">From concept to maintenance, we are your partner across all stages.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-4">•</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Sustainable Innovation</h4>
                <p className="text-gray-600">Integrating technologies that enhance productivity while reducing environmental footprint.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-primary font-bold mr-4">•</span>
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Proven Expertise</h4>
                <p className="text-gray-600">Backed by a legacy of successful projects and satisfied partners globally.</p>
              </div>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-8 italic border-l-4 border-primary pl-6">
            At Energethics, we don't just provide engineering solutions—we co-create value and growth opportunities for every client we collaborate with.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Authorized Partnerships</h3>
                <p className="text-gray-600">Official channel partners with leading global and Indian manufacturers</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Cost-Effective Solutions</h3>
                <p className="text-gray-600">Maximize ROI with energy-efficient products that reduce operational expenses</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Customized Engineering</h3>
                <p className="text-gray-600">Tailored solutions designed to meet your specific industrial requirements</p>
              </div>
            </div>

            <div className="flex items-start bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">Comprehensive after-sales service and technical assistance</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-gray-600 text-sm">Years Combined Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                    <div className="text-gray-600 text-sm">Quality Assurance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                    <div className="text-gray-600 text-sm">Customer Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">500+</div>
                    <div className="text-gray-600 text-sm">Satisfied Clients</div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-700 font-semibold">Certified Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
