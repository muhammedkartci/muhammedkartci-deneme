"use client"
import { Calendar, Heart, Camera } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

function LiveTimer() {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const startDate = new Date("2025-06-03T22:38:00")

    const updateTimer = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      if (diff > 0) {
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        setTimeElapsed({ years, months, days, hours, minutes, seconds })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { value: timeElapsed.years, label: "Yıl", color: "text-pink-500" },
    { value: timeElapsed.months, label: "Ay", color: "text-red-500" },
    { value: timeElapsed.days, label: "Gün", color: "text-pink-500" },
    { value: timeElapsed.hours, label: "Saat", color: "text-red-500" },
    { value: timeElapsed.minutes, label: "Dakika", color: "text-pink-500" },
    { value: timeElapsed.seconds, label: "Saniye", color: "text-red-500" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {timeUnits.map((unit, index) => (
        <div key={index} className="bg-pink-50 rounded-xl p-4 text-center shadow-sm">
          <div className={`text-3xl md:text-4xl font-bold ${unit.color} mb-2`}>
            {unit.value.toString().padStart(2, "0")}
          </div>
          <div className="text-sm text-gray-600 font-medium">{unit.label}</div>
        </div>
      ))}
    </div>
  )
}
function PhotoGallery() {
  return (
    <div className="col">
      <div className="row">
        <div className="col" style={{ flex: 1.5 }}>
          <div className="row">
            <PhotoCard src="/images/mamis-irmik-(3).jpeg" alt="Memory" />
          </div>
        </div>
        <div className="col" style={{ flex: 2 }}>
          <div className="row">

            <div className="col">
              <PhotoCard src="/images/mamis-irmik-(16).jpeg" alt="Memory" />
            </div>
          </div>
          <div className="row">

            <div className="col">
              <PhotoCard src="/images/mamis-irmik-(2).jpeg" alt="Memory" />
            </div>
            <div className="col">
              <PhotoCard src="/images/mamis-irmik-(1).jpeg" alt="Memory" />
            </div>
            <div className="col">
              <PhotoCard src="/images/mamis-irmik-(5).jpeg" alt="Memory" />
            </div>
          </div>
        </div>
        <div className="col" style={{ flex: 1 }}>
          <PhotoCard src="/images/mamis-irmik-(18).jpeg" alt="Memory" />
        </div>
      </div>

      <div className="row">
        <div className="col" style={{ flex: 1 }}>
          <PhotoCard src="/images/mamis-irmik-(11).jpeg" alt="Memory" />
        </div>
        <div className="col" style={{ flex: 1 }}>
          <PhotoCard src="/images/mamis-irmik-(13).jpeg" alt="Memory" />
        </div>
        <div className="col" style={{ flex: 1 }}>
          <PhotoCard src="/images/mamis-irmik-(14).jpeg" alt="Memory" />
        </div>
        <div className="col" style={{ flex: 1 }}>
          <PhotoCard src="/images/mamis-irmik-(15).jpeg" alt="Memory" />
        </div>
      </div>
      <div className="row">
        <div className="col" style={{ flex: 1 }}>
          <div className="row">
            <div className="col">
              <PhotoCard src="/images/mamis-irmik-(12).jpeg" alt="Memory" />
            </div>
            <div className="col">
              <PhotoCard src="/images/mamis-irmik-(8).jpeg" alt="Memory" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <PhotoCard src="/images/mamis-irmik-(9).jpeg" alt="Memory" />
            </div>
            <div className="col">
              <PhotoCard src="/images/mamis-irmik-(10).jpeg" alt="Memory" />
            </div>
          </div>
        </div>
        <div className="col" style={{ flex: 2 }}>
          <PhotoCard src="/images/mamis-irmik-(16).jpeg" alt="Memory" />
        </div>
      </div>
    </div>
  )
}

function PhotoCard({ src, alt }: { src?: string, alt?: string }) {
  return (
    <div
      className="group w-full h-full overflow-hidden border border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-xl bg-white"
    >
      <div className="p-0 w-full h-full ">
        <div className="relative w-full h-full  overflow-hidden rounded-xl"

        >
          <Image
            src={src || "/placeholder.svg"}
            alt={alt || `Memory`}
            width={300}
            height={400}
            className={"w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Heart className="absolute top-4 right-4 w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
    </div >
  )
}

export default function RomanticPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-white font-sans">
      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Main Heading */}
        <div className="text-center max-w-4x1 mx-auto">
          <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8">
            <span className="font-bold text-pink-500">Birbirimizin</span>{" "}
            <span className="font-bold text-gray-700">olduğumuzdan <br /> bugüne kadar...</span>
          </h1>

          {/* Heartfelt Paragraph */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Seni tanıdığımdan beri her şey değişti. Kalbimin en derin yerinde sana ait bir yer var ve orası hep seninle
            dolu. Seni her şeyden çok seviyorum ve ömrümün sonuna kadar seninle olmak istiyorum.
          </p>
        </div>

        {/* Timer Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Date Header */}
          <div className="flex items-center justify-center space-x-2">
            <Calendar className="w-5 h-5 text-red-500" />
            <span className="text-red-500 font-light">03 Haziran 2025 • 22:38'den beri hayatımın en güzel şansısın...</span>
          </div>

          {/* Timer Container */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <LiveTimer />
          </div>

          {/* Romantic Message */}
          <p className="text-center text-pink-400 italic text-lg font-light">
            Seninle geçen her saniye, bir masal gibi güzel.
          </p>
        </div>

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* Decorative Signature Section */}
        <div className="bg-pink-50/50 rounded-3xl p-12 max-w-2xl mx-auto">
          <div className="text-center space-y-6">
            {/* Top Decorative Icons */}
            <div className="flex items-center justify-center space-x-4">
              <Heart className="w-4 h-4 text-pink-300" strokeWidth={1.5} />
              <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
              <svg className="w-5 h-5 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
              <Heart className="w-4 h-4 text-pink-300" strokeWidth={1.5} />
            </div>

            {/* Main Names */}
            <div className="relative">
              <p className="text-3xl md:text-4xl font-light text-gray-700 tracking-wide">Mamiş 💗 İrmik</p>

              {/* Side Decorative Elements */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 md:-translate-x-12">
                <div className="flex flex-col space-y-2">
                  <div className="w-1 h-1 bg-pink-300 rounded-full"></div>
                  <Heart className="w-3 h-3 text-pink-300" strokeWidth={1.5} />
                  <div className="w-1 h-1 bg-pink-300 rounded-full"></div>
                </div>
              </div>

              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 md:translate-x-12">
                <div className="flex flex-col space-y-2">
                  <div className="w-1 h-1 bg-pink-300 rounded-full"></div>
                  <Heart className="w-3 h-3 text-pink-300" strokeWidth={1.5} />
                  <div className="w-1 h-1 bg-pink-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Bottom Decorative Icons */}
            <div className="flex items-center justify-center space-x-4">
              <svg className="w-4 h-4 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
              <svg className="w-5 h-5 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
              <svg className="w-4 h-4 text-pink-300" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Elegant Divider Line */}
            <div className="flex items-center justify-center space-x-2 pt-4">
              <div className="h-px bg-pink-300 w-8"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              <div className="h-px bg-pink-300 w-16"></div>
              <div className="w-1 h-1 bg-pink-400 rounded-full"></div>
              <div className="h-px bg-pink-300 w-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
