import Slider from '@/components/Slider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <div className="w-full h-full bg-cyan-900 flex justify-center items-center p-4 text-white flex-col gap-2">
        <h1 className="text-4xl">Un cuento interactivo 😋 </h1>
        <p className="text-xl">Por Tudor Comparán</p>
      </div>

      <div className="h-[768px] w-full max-w-[1024px] bg-slate-500 flex justify-center items-center mb-8">
        <Slider />
      </div>
    </main>
  );
}
