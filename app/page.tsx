import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative inline-block">
              <Image
                src="/avatar.jpg"
                alt="郝momo"
                width={160}
                height={160}
                className="rounded-full mx-auto shadow-2xl ring-4 ring-white ring-opacity-50"
                priority
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            你好，我是
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mt-2">
              郝momo
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-purple-600">3年+数据分析经验</span>，专注于业务数据分析
            <br />
            <span className="text-lg sm:text-xl mt-4 block">
              人间治愈探寻者，不断提升自己，学习升华帮助他人 ✨
            </span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="px-6 py-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100">
              <span className="text-purple-600 font-medium">📊 数据分析师</span>
            </div>
            <div className="px-6 py-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100">
              <span className="text-pink-600 font-medium">💝 治愈探寻者</span>
            </div>
            <div className="px-6 py-3 bg-white bg-opacity-80 backdrop-blur-sm rounded-full shadow-lg border border-gray-100">
              <span className="text-cyan-600 font-medium">🌱 终身学习者</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              联系我 💬
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white bg-opacity-80 backdrop-blur-sm text-gray-700 font-semibold rounded-full border border-gray-200 hover:bg-opacity-100 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              了解更多 🔍
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              关于我
              <span className="text-purple-600">About Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">专业经验</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  拥有3年+数据分析经验，专注于业务数据分析。善于从数据中发现洞察，为业务决策提供有力支撑。
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-50 to-cyan-50 p-8 rounded-2xl border border-pink-100 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white text-xl">💝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">人生理念</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  人间治愈探寻者，相信每个人都有属于自己的光芒。通过不断学习和成长，希望能够帮助更多的人。
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">我的技能</h3>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">倾听他人故事</span>
                      <span className="text-purple-600 font-bold">❤️</span>
                    </div>
                    <p className="text-gray-600 text-sm">用心聆听，用爱理解，为每一个故事找到治愈的力量</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">数据分析</span>
                      <span className="text-purple-600 font-bold">📈</span>
                    </div>
                    <p className="text-gray-600 text-sm">从数字中发现价值，为业务提供数据驱动的决策支持</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-800">学习成长</span>
                      <span className="text-purple-600 font-bold">🌱</span>
                    </div>
                    <p className="text-gray-600 text-sm">持续学习新知识，不断提升自己，并分享给需要的人</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce animation-delay-1000"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce animation-delay-2000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            联系我
            <span className="text-purple-600">Contact</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mb-12"></div>

          <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 sm:p-12 border border-white border-opacity-50">
            <div className="mb-8">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                如果你也是一个在寻找治愈的人，或者需要数据分析方面的帮助
                <br />
                <span className="text-purple-600 font-semibold">欢迎和我交流 ✨</span>
              </p>
            </div>

            <div className="inline-flex items-center justify-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💬</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white text-lg font-semibold mb-1">微信联系</p>
                    <p className="text-white text-2xl font-bold">momobubble</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-gray-600 text-sm">
                💝 让我们一起成长，一起治愈，一起让世界变得更美好
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">郝momo</h3>
            <p className="text-gray-400">数据分析师 | 人间治愈探寻者</p>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © 2024 郝momo. Made with ❤️ and Next.js
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
