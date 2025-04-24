// import { useScroll, useSpring, useTransform, motion } from 'motion/react';
// import React, { useEffect, useRef, useState } from 'react';

// interface SmoothScrollProps {
//   children: React.ReactNode;
// }

// const SmoothScroll = ({ children }: SmoothScrollProps) => {
//   const [contentHeight, setContentHeight] = useState(0);
//   const [windowHeight, setWindowHeight] = useState(0);
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleResize = () => {
//       if (contentRef.current !== null) {
//         setContentHeight(contentRef.current.scrollHeight);
//       }
//       setWindowHeight(window.innerWidth);
//     };
//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const { scrollYProgress } = useScroll();
//   const smoothProgress = useSpring(scrollYProgress, {
//     mass: 0.1,
//     damping: 20,
//     stiffness: 100,
//     restDelta: 0.0001,
//   });
//   const y = useTransform(smoothProgress, value => {
//     return value * -(contentHeight - windowHeight);
//   });
//   return (
//     <>
//       <div style={{ height: contentHeight }} />
//       <motion.div className="fixed top-0 flex w-screen flex-col" ref={contentRef} style={{ y }}>
//         {children}
//       </motion.div>
//     </>
//   );
// };

// export default SmoothScroll;
