// import React, { useEffect, useRef, useState } from 'react';
// import BgVideo from "../../assets/BgVideo/Bgg.mp4";

// const LandingPage = () => {
//     const [show, setShow] = useState(true);
//     const [videoLoaded, setVideoLoaded] = useState(false);
//     const videoRef = useRef(null);
//     const text = "Welcome to My Portfolio";

//     useEffect(() => {
//         if (videoLoaded) {
//             const timer = setTimeout(() => {
//                 setShow(false);
//             }, 3000); // Display for 3 seconds after video loads
//             return () => clearTimeout(timer);
//         }
//     }, [videoLoaded]);

//     if (!show) return null;

//     return (
//         <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden text-white animate-fadeout">

//             {/* Video Background */}
//             <video
//                 ref={videoRef}
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//                 onLoadedData={() => setVideoLoaded(true)}
//                 className="absolute inset-0 w-full h-full object-cover"
//             >
//                 <source src={BgVideo} type="video/mp4" />
//                 Your browser does not support the video tag.
//             </video>

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-[#0f0c29]/80 via-[#302b63]/80 to-[#24243e]/85"></div>

//             {/* Content shown after video is loaded */}
//             {videoLoaded && (
//                 <div className="relative z-10 flex flex-col items-center">
//                     <h1 className="text-4xl md:text-6xl font-bold flex flex-wrap justify-center tracking-wide drop-shadow-lg mb-6">
//                         {text.split("").map((char, index) => (
//                             <span
//                                 key={index}
//                                 style={{
//                                     animation: `fadeLetter 0.05s ease-in ${index * 0.05}s forwards`,
//                                     opacity: 0,
//                                 }}
//                                 className="text-teal-300"
//                             >
//                                 {char === " " ? "\u00A0" : char}
//                             </span>
//                         ))}
//                     </h1>

//                     <div className="flex space-x-2 mt-4">
//                         <div className="w-3 h-3 bg-cyan-300 rounded-full animate-bounceDelay1" />
//                         <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounceDelay2" />
//                         <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounceDelay3" />
//                     </div>
//                 </div>
//             )}

//             {/* Inline animations */}
//             <style>
//                 {`
//           @keyframes fadeout {
//             0% { opacity: 1; }
//             80% { opacity: 1; }
//             100% { opacity: 0; visibility: hidden; }
//           }

//           .animate-fadeout {
//             animation: fadeout 4s forwards ease-in-out;
//           }

//           @keyframes fadeLetter {
//             from {
//               opacity: 0;
//               transform: translateY(10px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes bounceDelay {
//             0%, 80%, 100% {
//               transform: scale(0);
//             }
//             40% {
//               transform: scale(1);
//             }
//           }

//           .animate-bounceDelay1 {
//             animation: bounceDelay 1.4s infinite;
//           }

//           .animate-bounceDelay2 {
//             animation: bounceDelay 1.4s infinite;
//             animation-delay: 0.2s;
//           }

//           .animate-bounceDelay3 {
//             animation: bounceDelay 1.4s infinite;
//             animation-delay: 0.4s;
//           }
//         `}
//             </style>
//         </div>
//     );
// };

// export default LandingPage;
