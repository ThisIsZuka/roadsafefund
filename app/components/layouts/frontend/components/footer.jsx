'use client';

import { generalSettings } from '@/config/general.config';
import { Container } from '@/components/common/container';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-[#7E6BAF] text-white mt-20">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left */}
          <div className="text-left">
            <p className="font-semibold py-1">กรมการขนส่งทางบก</p>
            <p className='text-gray-300 text-sm py-1'>1032 ถนนพหลโยธิน แขวงจอมพล เขตจตุจักร กรุงเทพฯ 10900</p>
            <p className='text-gray-300 text-sm py-1'>โทรศัพท์ (หมายเลขกลาง) 0-2271-8888</p>
            <p className='text-gray-300 text-sm py-1'>
              Call Center และศูนย์คุ้มครองผู้โดยสารสาธารณะ :
              โทรศัพท์ 1584
            </p>
            <p>
              <a href="mailto:webmaster@dlt.mail.go.th" className="underline  text-sm">
                webmaster@dlt.mail.go.th
              </a>
            </p>
          </div>

          {/* Right (Logos) */}
          <div className="flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo_white_fw.fw.png"
                alt="ตราครุฑ"
                className="w-auto h-25 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="text-center py-2 text-xs">
          © 2018 กรมการขนส่งทางบก - All Rights Reserved.
        </div>
    </footer>
  );
}
