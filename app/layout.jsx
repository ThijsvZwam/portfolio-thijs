import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Thijs — Software Developer',
  description: 'Portfolio of Thijs, software developer.',
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className="bg-[#0b0d12] text-white antialiased">
      <Navbar />
      {children}
      </body>
      </html>
  );
}
