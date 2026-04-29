const Marquee = () => {
  return (
    <div className="w-full container mx-auto bg-black text-white overflow-hidden py-2">
      
      <div className="whitespace-nowrap flex animate-scroll gap-10 text-sm font-medium">
        
        <span>🆕 New Arrivals: Ceramic Blue Tile</span>
        <span>⭐ Weekly Feature: Modern Geometric Patterns</span>
        <span>👥 Join the Community</span>
        <span>🔥 Premium Tile Collection Now Available</span>
        <span>🏠 Upgrade Your Home with Style</span>

        {/* duplicate for smooth loop */}
        <span>🆕 New Arrivals: Ceramic Blue Tile</span>
        <span>⭐ Weekly Feature: Modern Geometric Patterns</span>
        <span>👥 Join the Community</span>
        <span>🔥 Premium Tile Collection Now Available</span>
        <span>🏠 Upgrade Your Home with Style</span>

      </div>
    </div>
  )
}

export default Marquee