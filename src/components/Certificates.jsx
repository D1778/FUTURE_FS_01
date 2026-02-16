import React, { useState, useEffect, useCallback } from 'react';
import { X, Award } from 'lucide-react';

import cert1 from '../assets/certificates/1.pythonforbegin_page-0001.jpg';
import cert2 from '../assets/certificates/2.pyfordatascience_page-0001.jpg';
import cert3 from '../assets/certificates/3.pythonmatplotlib_page-0001.jpg';
import cert4 from '../assets/certificates/4.intermediate_python_certi_page-0001.jpg';
import cert5 from '../assets/certificates/5.datamanipulationwithpandas_cert_page-0001.jpg';
import cert6 from '../assets/certificates/6.Intermediate Object-Oriented Programming in_certi_page-0001.jpg';
import cert7 from '../assets/certificates/2547220_computerstorage&memory_page-0001_page-0001.jpg';
import cert8 from '../assets/certificates/2547220_digitalelectronics_page-0001_page-0001.jpg';
import cert9 from '../assets/certificates/ROBOTICS_CERT_page-0001.jpg';

const certificates = [
    {
        title: 'Python for Beginners',
        issuer: 'Coursera',
        color: '#0056d2',
        image: cert1,
    },
    {
        title: 'Python for Data Science',
        issuer: 'Infosys Springboard',
        color: '#054ada',
        image: cert2,
    },
    {
        title: 'Python & Matplotlib: Box Plots, Scatter Plots, Heatmaps & Pie Charts',
        issuer: 'Infosys Springboard',
        color: '#0070c0',
        image: cert3,
    },
    {
        title: 'Intermediate Python',
        issuer: 'DataCamp',
        color: '#03ef62',
        image: cert4,
    },
    {
        title: 'Data Manipulation with Pandas',
        issuer: 'DataCamp',
        color: '#03ef62',
        image: cert5,
    },
    {
        title: 'Intermediate Object-Oriented Programming',
        issuer: 'DataCamp',
        color: '#03ef62',
        image: cert6,
    },
    {
        title: 'Computer Storage & Memory',
        issuer: 'Infosys Springboard',
        color: '#a435f0',
        image: cert7,
    },
    {
        title: 'Digital Electronics',
        issuer: 'Infosys Springboard',
        color: '#a435f0',
        image: cert8,
    },
    {
        title: 'Fundamentals of Robotics and ROS',
        issuer: 'Kristu Jayanti University',
        color: '#e01e5a',
        image: cert9,
    },
];

export default function Certificates() {
    const [selectedCert, setSelectedCert] = useState(null);

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') setSelectedCert(null);
    }, []);

    useEffect(() => {
        if (selectedCert) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [selectedCert, handleKeyDown]);

    return (
        <section id="certificates" className="min-h-screen flex items-center py-24 bg-neutral-900">
            <div className="container mx-auto px-6 max-w-7xl">
                <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12">
                    My <span className="gradient-text">Certificates</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCert(cert)}
                            className="group bg-neutral-950 rounded-xl border border-neutral-800
                         hover:-translate-y-2 hover:border-[#ff6b35]
                         transition-all duration-300 shadow-sm
                         hover:shadow-xl hover:shadow-[#ff6b35]/10
                         overflow-hidden text-left cursor-pointer"
                        >
                            <div className="w-full h-44 overflow-hidden bg-neutral-800">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover object-top
                             group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="font-serif text-xl font-bold mb-1 group-hover:text-[#ff6b35] transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-neutral-400 text-sm">{cert.issuer}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {selectedCert && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center
                     bg-black/80 backdrop-blur-sm p-4"
                    onClick={() => setSelectedCert(null)}
                    style={{ animation: 'fadeInModal 0.2s ease-out' }}
                >
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
                        onClick={(e) => e.stopPropagation()}
                        style={{ animation: 'scaleInModal 0.25s ease-out' }}
                    >
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute -top-4 -right-4 md:top-0 md:right-0
                         bg-neutral-900 border border-neutral-700
                         hover:bg-[#ff6b35] hover:border-[#ff6b35]
                         text-white rounded-full p-2 transition-colors z-10"
                            aria-label="Close"
                        >
                            <X size={20} />
                        </button>

                        <img
                            src={selectedCert.image}
                            alt={selectedCert.title}
                            className="max-h-[80vh] w-auto max-w-full rounded-xl shadow-2xl object-contain"
                        />

                        <div className="mt-4 text-center">
                            <h3 className="text-xl font-bold text-white">{selectedCert.title}</h3>
                            <p className="text-neutral-400 text-sm">{selectedCert.issuer}</p>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
        @keyframes scaleInModal {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInModal {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
        </section>
    );
}
