import windowsLogo from '@/assets/logo-windows.png'
import quantumLogo from '@/assets/logo-quantum.png'
import nvidiaLogo from'@/assets/logo-nvidia.png'
import lexarLogo from '@/assets/logo-lexar.png'
import microsoftLogo from '@/assets/logo-microsoft.png'
import apexLogo from '@/assets/logo-apex.png'
import Image from 'next/image'

export const LogoTicker = () => {
  return <div className='py-8 md:py-12 bg-white'>
    <div className="container">
      <div className='flex overflow-hidden[mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <div className='flex gap-14 flex-none'>
          <Image src={windowsLogo} alt='Windows Logo' className='logo-ticker-image' />
          <Image src={quantumLogo} alt='Quantum Logo' className='logo-ticker-image' />
          <Image src={nvidiaLogo} alt='Nvidia Logo' className='logo-ticker-image' />
          <Image src={lexarLogo} alt='Lexar Logo' className='logo-ticker-image' />
          <Image src={microsoftLogo} alt='M Logo' className='logo-ticker-image' />
          <Image src={windowsLogo} alt='Microsoft Logo' className='logo-ticker-image' />
          <Image src={apexLogo} alt='Apex Logo' className='logo-ticker-image' />
        </div>
      </div>
    </div>
  </div>;
};
