import JateatendeLogo from '@/app/ui/jateatende-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';


export default function Page() {
  return (
    <main className="flex min-h-screen bg-black flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-gray-900 p-4 md:h-20">
        <JateatendeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-900 px-6 py-10 md:w-2/5 md:px-20">
        <div
          className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-black"
        />
          <p
              className={`${lusitana.className} text-xl text-white md:text-3xl md:leading-normal`}
            >
            Seja muito bem vindo(a) ao<strong> Já te Atende AI</strong> Este site esta em construção{' '}
            {/* <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js será parte da tecnologia utilizada
            </a> */}
            , em breve, teremos novidades!
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-5 self-start rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800 md:text-base"
          >
            <span>Registre-se</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
        {/* Add Hero Images Here */}  
        <Image
          src="/jateatende-hero-desktop.png"
          width={1000}
          height={760}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Image
          src="/jateatende-hero-mobile.png"
          width={560}
          height={620}
          className="block md:hidden"
          alt="Screenshot of the dashboard project showing mobile version"
        />
      </div>
      </div>
    </main>
  );
}
