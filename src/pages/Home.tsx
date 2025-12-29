import Carousel from "../components/carousel/Carousel"
import Filters from "../components/filters/Filters"

function Home() {
  return (
    <div className="mt-6 h-screen overflow-y-hidden">
      <h1 className="text-center text-5xl font-bold">Discover Unlimited Content</h1>
      <Filters />
      <Carousel />
    </div>
  )
}

export default Home
