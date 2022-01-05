import { Banner } from './BannerSection'
import { DexSection } from './DexSection'
import { CardsSection } from './CardsSection'
import { UsdtSection } from './UsdtSection'
import { RoadmapSection } from './RoadmapSection'
import { HowToBuySection } from './HowToBuySection'

export function Home() {
  return (
    <main>
      <Banner/>
      <DexSection/>
      <CardsSection/>
      <UsdtSection/>
      <RoadmapSection/>
      <HowToBuySection/>
    </main>
  )
}
