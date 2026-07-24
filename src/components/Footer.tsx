import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white/70 py-10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* 左侧：协会信息 */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-2">
              深圳大学招生志愿者协会
            </h3>
            <p className="text-sm text-white/50">我的深大我宣传</p>
            <p className="text-sm text-white/40 mt-1">2015 - 2026</p>
          </div>

          {/* 中间：友情链接 */}
          <div>
            <h4 className="text-white font-medium text-sm mb-2">友情链接</h4>
            <ul className="text-sm space-y-1">
              <li>
                <a
                  href="https://www.szu.edu.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A6192E] transition-colors"
                >
                  深圳大学官网
                </a>
              </li>
              <li>
                <a
                  href="https://zs.szu.edu.cn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#A6192E] transition-colors"
                >
                  深圳大学招生网
                </a>
              </li>
            </ul>
          </div>

          {/* 右侧：联系方式 + 公众号 */}
          <div>



            <div className="mt-2 inline-block">
              <div className="w-20 h-20 relative rounded-xl overflow-hidden bg-white/10">
                <Image
                  src="/images/qrcode-wechat.jpg"
                  alt="公众号二维码"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-white/40 text-xs mt-1">公众号</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center text-sm text-white/40">
          © 2026 深圳大学招生志愿者协会
        </div>
      </div>
    </footer>
  );
}