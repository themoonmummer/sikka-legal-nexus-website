import React from 'react';
import {
  Gavel,
  Heart,
  Scale,
  Briefcase,
  ShieldAlert,
  Building2
} from 'lucide-react';

const PracticePage = () => {

  const practices = [
    {
      title: "Criminal Matters",
      icon: Gavel,
      description:
        "Dedicated criminal law representation with focus on protecting rights and providing effective legal defence before courts.",
      features: [
        "Bail Matters",
        "Criminal Defence",
        "FIR Related Matters",
        "Court Representation"
      ]
    },

    {
      title: "Civil Litigation",
      icon: Scale,
      description:
        "Professional assistance in civil disputes with strategic legal solutions and representation before appropriate courts.",
      features: [
        "Property Disputes",
        "Civil Suits",
        "Recovery Matters",
        "Injunction Matters"
      ]
    },

    {
      title: "Matrimonial Matters",
      icon: Heart,
      description:
        "Sensitive handling of family disputes with confidentiality, understanding, and strong legal representation.",
      features: [
        "Divorce Proceedings",
        "Maintenance Matters",
        "Family Disputes",
        "Domestic Matters"
      ]
    },

    {
      title: "Commercial Matters",
      icon: Briefcase,
      description:
        "Legal support for businesses and individuals in commercial disputes and contractual matters.",
      features: [
        "Business Disputes",
        "Contract Matters",
        "Commercial Litigation",
        "Legal Advisory"
      ]
    },

    {
      title: "Legal Consultation",
      icon: Building2,
      description:
        "Professional legal consultation to understand your matter and determine the appropriate legal approach.",
      features: [
        "Case Evaluation",
        "Legal Guidance",
        "Documentation Support",
        "Strategic Advice"
      ]
    },

    {
      title: "Court Representation",
      icon: Gavel,
      description:
        "Representation and advocacy before the Delhi High Court and District Courts with dedication and professionalism.",
      features: [
        "Delhi High Court",
        "District Courts",
        "Legal Proceedings",
        "Client Representation"
      ]
    }
  ];


  return (
    <div className="bg-white">

      {/* Header */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Practice Areas
          </h1>

          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Sikka Legal Nexus provides professional legal services in criminal,
            civil, matrimonial, and commercial matters with dedicated client
            representation.
          </p>

        </div>

      </section>


      {/* Practice Cards */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {practices.map((item, idx) => (

              <div
                key={idx}
                className="p-8 border border-gray-100 rounded-2xl bg-white hover:shadow-2xl transition-all group"
              >

                <div className="w-16 h-16 bg-amber-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-slate-900 transition-colors">

                  <item.icon className="w-8 h-8 text-amber-600 group-hover:text-amber-500" />

                </div>


                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>


                <p className="text-slate-600 mb-6 leading-relaxed">
                  {item.description}
                </p>


                <ul className="space-y-3">

                  {item.features.map((feature, i)=>(

                    <li
                      key={i}
                      className="flex items-center text-sm font-semibold text-slate-700"
                    >

                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></div>

                      {feature}

                    </li>

                  ))}

                </ul>


              </div>

            ))}

          </div>

        </div>

      </section>



      {/* CTA */}
      <section className="py-16 bg-slate-50 border-y border-gray-100">

        <div className="max-w-4xl mx-auto px-4 text-center">

          <ShieldAlert className="w-16 h-16 text-amber-600 mx-auto mb-6" />


          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need Legal Assistance?
          </h2>


          <p className="text-slate-600 text-lg mb-8">

            Consult with Sikka Legal Nexus for professional guidance regarding
            your legal matter and understand your available options.

          </p>


          <button className="bg-slate-900 text-white px-10 py-4 rounded-lg font-bold hover:bg-slate-800 transition-all">

            Contact For Consultation

          </button>


        </div>

      </section>


    </div>
  );
};


export default PracticePage;