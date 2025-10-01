// src/components/CoupleInfo.tsx
import Image from 'next/image';

export default function CoupleInfo() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
        Mempelai
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Groom */}
        <div className="text-center">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-6">
            <Image
              src="/images/groom.jpg"
              alt="John"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">John Doe</h3>
          <p className="text-muted-foreground">Putra pertama dari</p>
          <p className="font-medium">Bpk. Ahmad & Ibu Siti</p>
        </div>

        {/* Bride */}
        <div className="text-center">
          <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 mb-6">
            <Image
              src="/images/bride.jpg"
              alt="Jane"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Jane Smith</h3>
          <p className="text-muted-foreground">Putri pertama dari</p>
          <p className="font-medium">Bpk. Budi & Ibu Ani</p>
        </div>
      </div>
    </div>
  );
}
