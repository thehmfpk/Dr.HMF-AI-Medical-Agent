import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header, { Page } from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AnalysisPage from './components/AnalysisPage';
import ResultPage from './components/ResultPage';
import MedicationPage from './components/MedicationPage';
import { medicalEncyclopedia, diseaseSymptomMatrix, DiseaseInfo } from './data/medicalData';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [predictedDisease, setPredictedDisease] = useState<string>('');
  const [selectedDiseaseInfo, setSelectedDiseaseInfo] = useState<DiseaseInfo | null>(null);
  const [history, setHistory] = useState<{ disease: string, date: string, symptoms: number }[]>([]);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('dr_hmf_history');
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load history");
      }
    }
  }, []);

  // Persistence of scroll position on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleStartAnalysis = () => {
    setCurrentPage('analysis');
  };

  const handleLearnMore = () => {
    const section = document.getElementById('info-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAnalyze = (symptoms: string[]) => {
    let bestMatch = "";
    let maxOverlap = -1;

    diseaseSymptomMatrix.forEach(entry => {
      const overlap = symptoms.filter(s => entry.symptoms.includes(s)).length;
      if (overlap > maxOverlap) {
        maxOverlap = overlap;
        bestMatch = entry.disease;
      }
    });

    const newEntry = {
      disease: bestMatch,
      date: new Date().toISOString(),
      symptoms: symptoms.length
    };

    const updatedHistory = [newEntry, ...history].slice(0, 5);
    setHistory(updatedHistory);
    localStorage.setItem('dr_hmf_history', JSON.stringify(updatedHistory));

    setPredictedDisease(bestMatch);
    setCurrentPage('result');
  };

  // const handleCheckMedication = (disease: string) => {
  //   const info = medicalEncyclopedia[disease] || medicalEncyclopedia[Object.keys(medicalEncyclopedia)[0]];
  //   setSelectedDiseaseInfo(info);
  //   setCurrentPage('medication');
  // };

  const handleCheckMedication = (disease: string) => {
    const key = Object.keys(medicalEncyclopedia).find(
      k => k.toLowerCase() === disease.toLowerCase()
    );

    const info =
      medicalEncyclopedia[key || Object.keys(medicalEncyclopedia)[0]];

    setSelectedDiseaseInfo({ ...info }); // important: force new object
    setCurrentPage('medication');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500 selection:text-black font-sans antialiased overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="min-h-screen">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <HomePage onStart={handleStartAnalysis} onLearn={handleLearnMore} />
            </motion.div>
          )}

          {currentPage === 'analysis' && (
            <motion.div
              key="analysis"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <AnalysisPage onAnalyze={handleAnalyze} />
            </motion.div>
          )}

          {currentPage === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.5 }}
            >
              <ResultPage
                disease={predictedDisease}
                onCheckMedication={handleCheckMedication}
                history={history}
              />
            </motion.div>
          )}

          {currentPage === 'medication' && selectedDiseaseInfo && (
            <motion.div
              key="medication"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <MedicationPage
                info={selectedDiseaseInfo}
                onBack={() => setCurrentPage('result')}
                history={history}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer setCurrentPage={setCurrentPage} />

      {/* Global CSS for Print and Scrollbars */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; color: black !important; padding: 0 !important; margin: 0 !important; }
          #med-report { border: none !important; box-shadow: none !important; border-radius: 0 !important; padding: 0 !important; }
          .bg-slate-950, .bg-[#050505], .bg-[#0a0a0a], .bg-zinc-900\/40, .bg-white\/\[0.02\] { background: white !important; }
          .text-white, .text-gray-400, .text-gray-500, .text-gray-600, .text-gray-700 { color: black !important; }
          .border-white\/5, .border-cyan-500\/10 { border-color: #ddd !important; }
          h2, h3, h4, h1 { color: black !important; text-decoration-color: black !important; }
          .decoration-cyan-500 { text-decoration-color: black !important; }
        }
        
        * {
          scrollbar-width: thin;
          scrollbar-color: #1a1a1a #050505;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #050505;
        }

        ::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #22d3ee;
        }
      `}} />
    </div>
  );
}
