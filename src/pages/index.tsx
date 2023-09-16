import Link from 'next/link';
import Slider from '@/components/Slider';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}>
      <div className="w-full h-full bg-cyan-900 flex justify-center items-center p-4 text-white flex-col gap-2">
        <Link
          href="https://desarrolloweb.udgvirtual.udg.mx/mod/assign/view.php?id=5998"
          className="text-4xl hover:text-blue-200 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:bg-opacity-20"
        >
          Un cuento interactivo 😋
        </Link>
        <p className="text-xl">Por Tudor Comparán</p>
      </div>

      <div className="h-[768px] w-full max-w-[1024px] bg-slate-500 flex justify-center items-center mb-8">
        <Slider />
      </div>
    </main>
  );
}
