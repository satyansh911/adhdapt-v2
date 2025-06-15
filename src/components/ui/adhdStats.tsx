export default function ADHDStats() {
  const stats = [
    {
      number: "1 in 20",
      description: "Children worldwide have ADHD",
      detail: "Affecting millions of young minds globally",
    },
    {
      number: "366M",
      description: "Adults live with ADHD",
      detail: "Often undiagnosed and struggling daily",
    },
    {
      number: "2:1",
      description: "Male to female diagnosis ratio",
      detail: "Though many females remain undiagnosed",
    },
  ]

  return (
    <div className="w-full py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ADHD Statistics Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Understanding the global impact of ADHD helps us recognize the importance of awareness and support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
                  {stat.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{stat.description}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{stat.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Statistics based on global health research and WHO data
          </p>
        </div>
      </div>
    </div>
  )
}
