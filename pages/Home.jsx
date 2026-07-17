import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Scale, 
  ShieldCheck, 
  Gavel, 
  Users, 
  Building2,
  ArrowRight,
  Phone,
  MapPin
} from 'lucide-react';
import officeImage from "../components/assests/office.jpeg";
import insideImage from "../components/assests/inside.jpeg";

const Home = () => {

  const practiceAreas = [
    {
      title: "Criminal Matters",
      icon: Gavel,
      text: "Professional legal representation and strategic defence for criminal proceedings."
    },
    {
      title: "Civil Matters",
      icon: Scale,
      text: "Handling civil disputes with careful legal planning and dedicated representation."
    },
    {
      title: "Matrimonial Matters",
      icon: Users,
      text: "Support and representation in family disputes, matrimonial issues and related proceedings."
    },
    {
      title: "Commercial Matters",
      icon: Building2,
      text: "Legal assistance for commercial disputes, agreements and business-related matters."
    }
  ];


  return (

    <div className="bg-white">


      {/* HERO */}

      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        <img
          src={officeImage}
          alt="Sikka Legal Nexus Office"
          className="absolute inset-0 w-full h-full object-cover scale-105 animate-pulse"
        />


        <div className="absolute inset-0 bg-slate-950/75"></div>


        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="max-w-3xl animate-fade-in">

            <div className="flex items-center gap-2 text-amber-500 font-semibold mb-6">
              <Scale className="w-5 h-5"/>
              Advocates & Legal Consultants
            </div>


            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">

              Sikka Legal Nexus

              <br/>

              <span className="text-amber-500">
                Trusted Legal Representation
              </span>

            </h1>


            <p className="text-lg md:text-xl text-slate-300 mt-8 max-w-2xl leading-relaxed">

              Providing professional legal services before the 
              Delhi High Court and District Courts with dedication,
              strategy and client-focused representation.

            </p>


            <div className="flex flex-col sm:flex-row gap-4 mt-10">


              <Link
              to="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold flex justify-center items-center gap-2 transition"
              >

                <Phone className="w-5 h-5"/>
                Book Consultation

              </Link>


              <Link
              to="/practice"
              className="border border-white text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-white hover:text-slate-900 transition"
              >

                View Practice Areas

              </Link>


            </div>


          </div>

        </div>

      </section>




      {/* ADVOCATES */}

      <section className="py-20">

        <div className="max-w-6xl mx-auto px-6">


          <div className="text-center mb-12">

            <h2 className="text-amber-600 font-bold uppercase">
              Our Advocates
            </h2>

            <h3 className="text-4xl font-bold text-slate-900 mt-3">
              Dedicated Legal Professionals
            </h3>

          </div>



          <div className="grid md:grid-cols-2 gap-8">


            <div className="p-8 rounded-2xl bg-slate-50 shadow">

              <h3 className="text-2xl font-bold">
                Muskan
              </h3>

              <p className="text-amber-600 font-semibold mt-2">
                B.A. LL.B. | Advocate
              </p>

              <p className="text-slate-600 mt-4">
                Providing committed legal assistance with focus on
                effective representation and client interests.
              </p>

            </div>



            <div className="p-8 rounded-2xl bg-slate-50 shadow">

              <h3 className="text-2xl font-bold">
                Nikhil
              </h3>

              <p className="text-amber-600 font-semibold mt-2">
                B.A. LL.B. | Advocate
              </p>

              <p className="text-slate-600 mt-4">
                Handling legal matters with preparation,
                professionalism and practical solutions.
              </p>

            </div>


          </div>


        </div>


      </section>





      {/* PRACTICE */}

      <section className="py-20 bg-slate-50">


        <div className="max-w-7xl mx-auto px-6">


          <div className="text-center mb-14">

            <h2 className="text-4xl font-bold">
              Practice Areas
            </h2>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">


          {practiceAreas.map((item)=>{

            const Icon=item.icon;

            return (

              <div
              key={item.title}
              className="bg-white p-7 rounded-xl shadow hover:-translate-y-2 transition"
              >

                <Icon className="w-10 h-10 text-amber-600"/>

                <h3 className="font-bold text-xl mt-5">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-3 text-sm">
                  {item.text}
                </p>

              </div>

            )

          })}


          </div>


        </div>

      </section>





      {/* OFFICE */}

      <section className="py-20">


        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">


          <img
          src={insideImage}
          alt="Sikka Legal Nexus Office Interior"
          className="rounded-2xl shadow-xl"
          />



          <div>

            <h2 className="text-4xl font-bold">
              Visit Our Office
            </h2>


            <p className="text-slate-600 mt-5 leading-relaxed">

              Meet our advocates for professional legal consultation
              and discuss your matter personally.

            </p>


            <div className="flex gap-3 mt-6">

              <MapPin className="text-amber-600"/>

              <span>
                Delhi, India
              </span>

            </div>


            <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 text-amber-600 font-bold"
            >

              Contact Us
              <ArrowRight/>

            </Link>

          </div>

        </div>
      </section>
    </div>
  );
};


export default Home;