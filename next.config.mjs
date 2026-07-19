/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  images: {
    unoptimized: true,  // 静态导出必须加这行，否则图片会报错
  },
  // 如果你部署到 Gitee Pages 后，访问地址是 https://你的用户名.gitee.io/仓库名
  // 那就把下面这行的注释去掉，并把 "仓库名" 改成你的实际仓库名
  // basePath: '/szu-zhaoxie',
}

export default nextConfig