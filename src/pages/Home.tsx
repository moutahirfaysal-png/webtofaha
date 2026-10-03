// داخل قسم الغرف في ملف Home.tsx

<section className="py-20 bg-ivory-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header الخاص بقسم الغرف */}
    <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
      <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#a86548] font-bold">
        {translate('home.rooms_subtitle', lang)}
      </p>
      <h2 className="font-serif text-3xl md:text-5xl font-medium text-brown-900">
        {translate('home.rooms_title', lang)}
      </h2>
      <p className="text-brown-600 text-xs md:text-sm font-light leading-relaxed max-w-xl mx-auto pt-1">
        {translate('home.rooms_desc', lang)}
      </p>
    </div>

    {/* شبكة الغرف (Rooms Grid) */}
    {/* ... باقي كود عرض الغرف ... */}

  </div>
</section>
