// src/components/HeroSection.tsx
export default function HeroSection() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <p className="text-lg md:text-xl text-accent mb-4">Undangan Pernikahan</p>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary">
        John & Jane
      </h1>
      <div className="text-2xl md:text-3xl font-light text-foreground mb-8">
        Sabtu, 15 Februari 2025
      </div>
      <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Dengan memanjatkan puji syukur ke hadirat Allah SWT, kami mengundang Anda untuk berbagi kebahagiaan di hari pernikahan kami.
      </p>
      <div className="space-x-4">
        <a 
          href="#couple"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
        >
          Buka Undangan
        </a>
      </div>
    </div>
  );
}
