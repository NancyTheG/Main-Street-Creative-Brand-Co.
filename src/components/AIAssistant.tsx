import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mic, MicOff, Send, X, Volume2, VolumeX, MessageSquare, Loader2, Phone } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

// Initialize Gemini
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const SYSTEM_PROMPT = `You are Maya, the friendly and professional virtual voice assistant for Main Street Creative Brand Co. 

Rules for your speech:
1. ALWAYS respond in short, natural, conversational sentences suitable for a phone call.
2. NEVER use markdown, asterisks (**), bullet points, or list formatting.
3. Introduce yourself as "Maya, the Main Street assistant" in the first response if appropriate.
4. Your goal is to help visitors find the right "street" for their needs (Taste Street, Print Street, Stitch Street, or Consulting Street).
5. Always guide them toward filling out the contact form if they want to start a project.
6. End every response with a natural, friendly follow-up question to keep the conversation moving.
7. Be warm, helpful, and concise.

Knowledge Base:
- Taste Street: Tasting & Sampling promotions.
- Print Street: Custom apparel, merch, and 3D printing/prototyping.
- Stitch Street: Premium embroidery and finishing.
- Consulting Street: Restaurant & Bar business strategy.`;

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [statusText, setStatusText] = useState('Ready to talk');
  const [isLoading, setIsLoading] = useState(false);
  
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;
      
      if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;
        recognitionRef.current.lang = 'en-US';

        recognitionRef.current.onstart = () => {
          setIsListening(true);
          setStatusText('Listening...');
        };

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          handleVoiceInput(transcript);
        };

        recognitionRef.current.onerror = (event: any) => {
          console.error('Speech recognition error', event.error);
          setIsListening(false);
          setStatusText('Try again');
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, []);

  const getBestVoice = () => {
    if (!synthRef.current) return null;
    const voices = synthRef.current.getVoices();
    // Prefer specific natural sounding high quality voices if available
    const preferredNames = ["Google UK English Female", "Samantha", "Victoria", "female"];
    
    for (const name of preferredNames) {
      const found = voices.find(v => v.name.toLowerCase().includes(name.toLowerCase()));
      if (found) return found;
    }
    return voices[0] || null;
  };

  const speak = (text: string) => {
    if (!synthRef.current) return;
    
    // Stop any current speech or listening
    synthRef.current.cancel();
    recognitionRef.current?.stop();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = getBestVoice();
    utterance.pitch = 1.1;
    utterance.rate = 0.95;
    
    utterance.onstart = () => {
      setIsSpeaking(true);
      setStatusText('Maya is speaking...');
    };
    
    utterance.onend = () => {
      setIsSpeaking(false);
      setStatusText('Listening...');
      // Automatically start listening for the next question after she finishes speaking
      if (isOpen) {
        setTimeout(() => {
          recognitionRef.current?.start();
        }, 300);
      }
    };

    synthRef.current.speak(utterance);
  };

  const handleVoiceInput = async (text: string) => {
    setIsLoading(true);
    setStatusText('Processing...');
    
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: text,
        config: {
          systemInstruction: SYSTEM_PROMPT,
        },
      });

      const reply = response.text || "I'm sorry, I didn't catch that. Could you say it again?";
      speak(reply);
    } catch (error) {
      console.error("Gemini Error:", error);
      speak("I encountered a small connection issue. How else can I help you?");
    } finally {
      setIsLoading(false);
    }
  };

  const startCall = () => {
    setIsOpen(true);
    // Initial greeting
    setTimeout(() => {
      speak("Hello! I'm Maya, the Main Street assistant. How can I help you find your brand's street today?");
    }, 500);
  };

  const endCall = () => {
    synthRef.current?.cancel();
    recognitionRef.current?.stop();
    setIsOpen(false);
    setIsListening(false);
    setIsSpeaking(false);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      synthRef.current?.cancel();
      recognitionRef.current?.start();
    }
  };

  return (
    <>
      {/* Minimal Floating Button */}
      {!isOpen && (
        <motion.div 
          className="fixed bottom-6 right-6 z-[60] flex flex-col items-center gap-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={startCall}
            className="w-14 h-14 bg-brand-gold text-brand-green rounded-full shadow-2xl flex items-center justify-center border-2 border-brand-green/20"
          >
            <Mic size={24} />
          </motion.button>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold drop-shadow-sm">Talk to Maya</span>
        </motion.div>
      )}

      {/* Call Screen UI */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-10 right-6 z-[100] w-[320px] h-[450px] bg-brand-green rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.4)] border-4 border-brand-gold flex flex-col items-center overflow-hidden"
          >
            {/* Header info */}
            <div className="pt-10 text-center">
              <h3 className="text-brand-gold font-bold text-lg mb-1">Maya</h3>
              <p className="text-brand-gold/60 text-[10px] font-black uppercase tracking-[0.3em]">Main Street Assistant</p>
            </div>

            {/* Visualizer Area */}
            <div className="flex-grow flex items-center justify-center w-full px-10">
              <div className="relative w-full h-32 flex items-center justify-center gap-1.5">
                {isSpeaking ? (
                  // Animated Soundwave (Speaking)
                  [...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        height: [20, 60, 20],
                        opacity: [0.3, 1, 0.3]
                      }}
                      transition={{ 
                        duration: 0.5, 
                        repeat: Infinity, 
                        delay: i * 0.05 
                      }}
                      className="w-2 bg-brand-gold rounded-full"
                    />
                  ))
                ) : (
                  // Animated Pulsing Mic (Listening)
                  <motion.div 
                    animate={isListening ? { scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className={`w-24 h-24 rounded-full flex items-center justify-center border-4 ${isListening ? 'border-green-500 bg-green-500/10' : 'border-brand-gold/20 bg-brand-gold/5'}`}
                  >
                    <Mic size={40} className={isListening ? 'text-green-500' : 'text-brand-gold/30'} />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Status Footer */}
            <div className="pb-12 w-full flex flex-col items-center">
              <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.2em] mb-8">{statusText}</span>
              
              <div className="flex gap-8 items-center">
                <button
                  onClick={toggleListening}
                  className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-green-500 text-white' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  <Mic size={24} />
                </button>

                <button
                  onClick={endCall}
                  className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center shadow-xl hover:bg-red-600 transition-colors active:scale-95 group"
                >
                  <Phone size={28} className="rotate-[135deg] group-hover:rotate-[155deg] transition-transform" />
                </button>
              </div>
            </div>

            {isLoading && <Loader2 className="absolute top-4 right-4 text-brand-gold animate-spin" size={16} />}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
