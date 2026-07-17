import React from 'react';
import { Award, Target, Shield, Scale } from 'lucide-react';

const AboutPage = () => {
  const advocates = [
    {
      name: "Advocate Muskan",
      role: "Legal Advocate",
      description:
        "B.A. LL.B. with experience in handling criminal, civil, matrimonial, and commercial legal matters.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Advocate Nikhil",
      role: "Legal Advocate",
      description:
        "B.A. LL.B. providing legal assistance across criminal, civil, matrimonial, and commercial matters.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Sikka Legal Nexus
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Dedicated legal representation focused on protecting rights,
            resolving disputes, and providing practical legal solutions.
          </p>
        </div>
      </section>


      {/* About Firm */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div className="space-y-6">

              <h2 className="text-3xl font-bold text-slate-900">
                Trusted Legal Guidance & Representation
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Sikka Legal Nexus provides professional legal services with a
                commitment to integrity, confidentiality, and client-focused
                solutions.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Founded by Advocate Muskan and Advocate Nikhil, both holding
                B.A. LL.B. degrees, the firm handles matters before the Delhi
                High Court and District Courts with dedication and professional
                advocacy.
              </p>


              <div className="grid sm:grid-cols-2 gap-6 pt-6">

                <div className="flex items-start space-x-3">
                  <Target className="w-6 h-6 text-amber-600 mt-1" />

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Our Mission
                    </h4>

                    <p className="text-sm text-slate-500">
                      To provide accessible and effective legal solutions
                      while safeguarding client interests.
                    </p>
                  </div>
                </div>


                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-amber-600 mt-1" />

                  <div>
                    <h4 className="font-bold text-slate-900">
                      Our Values
                    </h4>

                    <p className="text-sm text-slate-500">
                      Integrity, dedication, confidentiality, and commitment
                      towards justice.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1000"
                alt="Legal consultation"
                className="rounded-2xl shadow-2xl"
              />


              <div className="absolute -bottom-6 -left-6 bg-amber-600 text-white p-6 rounded-xl shadow-xl">

                <p className="text-2xl font-bold">
                  Delhi Courts
                </p>

                <p className="text-xs font-semibold uppercase tracking-wider">
                  High Court & District Court Practice
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>



      {/* Advocates */}
      <section className="py-24 bg-slate-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">
              Our Advocates
            </h2>

            <h3 className="text-4xl font-bold text-slate-900">
              Meet The Legal Team
            </h3>

          </div>


          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

            {advocates.map((advocate)=>(
              <div
                key={advocate.name}
                className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all"
              >

                <img
                  src={advocate.image}
                  alt={advocate.name}
                  className="w-full h-96 object-cover"
                />


                <div className="p-8">

                  <h4 className="text-2xl font-bold text-slate-900">
                    {advocate.name}
                  </h4>

                  <p className="text-amber-600 font-semibold mb-4">
                    {advocate.role}
                  </p>

                  <p className="text-slate-600 leading-relaxed">
                    {advocate.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* Practice Highlight */}
      <section className="py-20 bg-slate-900">

        <div className="max-w-5xl mx-auto text-center px-4">

          <Scale className="w-12 h-12 text-amber-500 mx-auto mb-6"/>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional Representation For Your Legal Matters
          </h2>

          <p className="text-slate-400 text-lg">
            Criminal matters, civil disputes, matrimonial cases, and commercial
            legal issues handled with dedication and strategic approach.
          </p>

        </div>

      </section>


    </div>
  );
};

export default AboutPage;