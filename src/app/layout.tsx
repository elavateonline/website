import React from 'react';
import '../styles/index.css';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  title: {
    default: 'Elevate Business Coaching',                           
                         
  },
 
  openGraph: {
    type: 'website',
    title: {
      default: 'Elevate Business Coaching',                        
                      
    },
   },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}<script type="module" ></script>
</body>
    </html>
  );
}