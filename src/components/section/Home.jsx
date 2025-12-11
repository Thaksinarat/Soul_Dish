import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">Soul Dish😋</h1>
        <div className="flex flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
          <Link to="/quiz" className="bg-orange-300 px-6 py-4 rounded-lg font-medium transition relative overflow-hidden hover:translate-y-0.5 hover:shadow-lg">
            Start!
          </Link>
        </div>
      </div>
    </section>
  )
}
