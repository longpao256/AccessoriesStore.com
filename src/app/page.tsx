import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Heart, ShoppingCart, Menu, Star } from "lucide-react";
import Image from "next/image";

// Extended product data
const products1 = [
  {
    name: "QKZ AK3",
    category: "Headphone",
    price: "$8.00",
    image: "https://ext.same-assets.com/2047959265/4038998428.webp",
    sale: true
  },
  {
    name: "MOONDROP CHUII",
    category: "Headphone",
    price: "$22.00",
    image: "https://ext.same-assets.com/2047959265/1397865479.webp"
  },
  {
    name: "Monitor Stand",
    category: "Stand",
    price: "$15.00",
    image: "https://ext.same-assets.com/2047959265/4206372349.webp"
  },
  {
    name: "Mousepad 900x400mm",
    category: "Accessories",
    price: "$8.00",
    image: "https://ext.same-assets.com/2047959265/3668881887.webp"
  },
  {
    name: "Attack Shark X11",
    category: "Mice",
    price: "$28.00",
    image: "https://ext.same-assets.com/2047959265/934257636.webp",
    sale: true
  },
  {
    name: "ARTISAN MOUSEPAD",
    category: "Accessories",
    price: "$8.00",
    image: "https://ext.same-assets.com/2047959265/2625314521.webp"
  },
  {
    name: "QKZ AK6 Pro",
    category: "Headphone",
    price: "$12.00",
    image: "https://ext.same-assets.com/2047959265/3676487286.webp"
  },
  {
    name: "Attack Shark X3",
    category: "Mice",
    price: "$38.00",
    image: "https://ext.same-assets.com/2047959265/4280759589.webp",
    sale: true
  }
];

const products2 = [
  {
    name: "AULA WIN60HE",
    brand: "AULA",
    category: "Keyboard",
    price: "$25.00",
    image: "https://ext.same-assets.com/2047959265/3018083153.webp",
    sale: true
  },
  {
    name: "Mad 60 He",
    brand: "MADLIONS",
    category: "Keyboard",
    price: "$35.00",
    originalPrice: "$45.00",
    image: "https://ext.same-assets.com/2047959265/2669871124.webp",
    sale: true
  },
  {
    name: "ANIME MOUSEPAD",
    category: "Accessories",
    price: "$8.00",
    image: "https://ext.same-assets.com/2047959265/3087815822.webp"
  },
  {
    name: "Laptop Stand",
    category: "Stand",
    price: "$7.50",
    originalPrice: "$9.00",
    image: "https://ext.same-assets.com/2047959265/3271298942.webp"
  }
];

const products3 = [
  {
    name: "Monitor Light Bar",
    price: "$19.00",
    originalPrice: "$23.00",
    image: "https://ext.same-assets.com/2047959265/551003589.webp"
  },
  {
    name: "AULA f87",
    brand: "AULA",
    category: "Keyboard",
    price: "$39.00",
    image: "https://ext.same-assets.com/2047959265/1296798065.webp"
  },
  {
    name: "AULA F65",
    brand: "AULA",
    category: "Keyboard",
    price: "$35.00",
    originalPrice: "$45.00",
    image: "https://ext.same-assets.com/2047959265/2801345428.webp"
  },
  {
    name: "Laptop Stand",
    category: "Stand",
    price: "$7.50",
    originalPrice: "$9.00",
    image: "https://ext.same-assets.com/2047959265/3271298942.webp"
  },
  {
    name: "20 in 1 Multifunctional Cleaner Kit",
    brand: "MADLIONS",
    category: "Accessories",
    price: "$8.00",
    originalPrice: "$10.00",
    image: "https://ext.same-assets.com/2047959265/53752122.webp"
  },
  {
    name: "VXE R1 PRO",
    brand: "VGN",
    price: "$45.00",
    image: "https://ext.same-assets.com/2047959265/3263028925.webp"
  },
  {
    name: "Attack Shark X11",
    brand: "Attack Shark",
    category: "Mice",
    price: "$28.00",
    image: "https://ext.same-assets.com/2047959265/934257636.webp"
  },
  {
    name: "Ziyouleng K3 Max",
    category: "Keyboard",
    price: "$22.00",
    originalPrice: "$27.00",
    image: "https://ext.same-assets.com/2047959265/1561684373.webp"
  }
];

const products4 = [
  {
    name: "BOW",
    brand: "BOW",
    category: "Keyboard",
    price: "$18.00",
    originalPrice: "$22.00",
    image: "https://ext.same-assets.com/2047959265/3036132063.webp",
    sale: true
  },
  {
    name: "Nano 68",
    brand: "MADLIONS",
    category: "Keyboard",
    price: "$50.00",
    originalPrice: "$55.00",
    image: "https://ext.same-assets.com/2047959265/2956506084.webp"
  },
  {
    name: "Mad 68 R",
    brand: "MADLIONS",
    category: "Keyboard",
    price: "$60.00",
    originalPrice: "$69.00",
    image: "https://ext.same-assets.com/2047959265/828968905.webp"
  },
  {
    name: "Mad 68 pro",
    brand: "MADLIONS",
    category: "Keyboard",
    price: "$65.00",
    originalPrice: "$75.00",
    image: "https://ext.same-assets.com/2047959265/4238087975.webp"
  }
];

const products5 = [
  {
    name: "7hz Salnotes Zero",
    category: "Headphone",
    price: "$22.00",
    image: "https://ext.same-assets.com/2047959265/451188223.webp"
  },
  {
    name: "lightning adapter",
    price: "$2.50",
    image: "https://ext.same-assets.com/2047959265/2446571679.webp"
  },
  {
    name: "KZ Castor Pro",
    category: "Headphone",
    price: "$20.00",
    image: "https://ext.same-assets.com/2047959265/2366099902.webp"
  },
  {
    name: "TRN MT3 HiFI With Mic",
    category: "Headphone",
    price: "$14.00",
    image: "https://ext.same-assets.com/2047959265/673496843.webp"
  }
];

const products6 = [
  {
    name: "Lafitear LF1",
    category: "Headphone",
    price: "$18.00",
    image: "https://ext.same-assets.com/2047959265/888100678.webp"
  },
  {
    name: "COILED CABLE",
    category: "Keyboard",
    price: "$8.00",
    image: "https://ext.same-assets.com/2047959265/1358802135.webp"
  },
  {
    name: "Monitor Light Bar",
    price: "$19.00",
    originalPrice: "$23.00",
    image: "https://ext.same-assets.com/2047959265/551003589.webp"
  },
  {
    name: "USB C to 3.5mm Audio Headphone Jack Adapter",
    category: "Headphone",
    price: "$2.50",
    image: "https://ext.same-assets.com/2047959265/3647872905.webp"
  },
  {
    name: "AULA f87",
    brand: "AULA",
    category: "Keyboard",
    price: "$39.00",
    image: "https://ext.same-assets.com/2047959265/1296798065.webp"
  },
  {
    name: "AULA F65",
    brand: "AULA",
    category: "Keyboard",
    price: "$35.00",
    originalPrice: "$45.00",
    image: "https://ext.same-assets.com/2047959265/2801345428.webp"
  },
  {
    name: "VXE R1 SE Plus",
    brand: "VGN",
    category: "Mice",
    price: "$24.00",
    image: "https://ext.same-assets.com/2047959265/908533707.webp"
  },
  {
    name: "Kinera Celest WyvernAbyss",
    brand: "Kinera Celest",
    category: "Headphone",
    price: "$40.00",
    image: "https://ext.same-assets.com/2047959265/2407285389.webp"
  }
];

// Product types
interface Product {
  name: string;
  category?: string;
  brand?: string;
  price: string;
  originalPrice?: string;
  image: string;
  sale?: boolean;
}

// Product Card Component
function ProductCard({ product, index }: { product: Product, index: number }) {
  return (
    <Card key={index} className="bg-white text-black overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        {product.sale && (
          <Badge className="absolute top-2 left-2 bg-red-600 text-white z-10 text-xs">
            ប្រែង់តម្លៃ
          </Badge>
        )}
        <div className="relative h-48">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
        <Heart className="absolute top-2 right-2 w-6 h-6 text-gray-600 hover:text-red-500 cursor-pointer z-10" />
      </div>
      <CardContent className="p-4">
        <h4 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h4>
        {product.brand && (
          <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
        )}
        {product.category && (
          <Badge variant="secondary" className="text-xs mb-2">
            {product.category}
          </Badge>
        )}
        <div className="flex items-center gap-2">
          <p className="font-bold text-lg text-red-600">{product.price}</p>
          {product.originalPrice && (
            <p className="text-sm text-gray-500 line-through">{product.originalPrice}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-bold">Computer Accessories Store</span>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Image
              src="https://ext.same-assets.com/2047959265/4070014934.webp"
              alt="Language"
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Heart className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-gray-300" />
            <Menu className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          </div>
        </div>
      </header>

      {/* Hero Section 1 */}
      <section className="relative">
        <div className="relative h-80 bg-gradient-to-r from-gray-900 to-gray-800 overflow-hidden">
          <Image
            src="https://ext.same-assets.com/2047959265/2072561492.webp"
            alt="Welcome to Keyz Store"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">WELCOME TO COMPUTER ACCESSORIES STORE</h1>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Section 2 */}
      <section className="relative">
        <div className="relative h-80 bg-gradient-to-r from-gray-900 to-gray-700 overflow-hidden">
          <Image
            src="https://ext.same-assets.com/2047959265/449380037.webp"
            alt="Upgrade Your Setup"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">UPGRADE YOUR SETUP</h2>
            <p className="text-lg md:text-xl text-gray-300">ELEVATE YOUR GAMING EXPERIENCE</p>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">ប្រភេទ</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "For Gaming", image: "https://ext.same-assets.com/2047959265/2913190557.webp" },
              { name: "IEM Earbud", image: "https://ext.same-assets.com/2047959265/1345991576.webp" },
              { name: "Magnetic Keyboard", image: "https://ext.same-assets.com/2047959265/3680695864.webp" },
              { name: "Mechanical Keyboard", image: "https://ext.same-assets.com/2047959265/4225931871.webp" }
            ].map((category, index) => (
              <Card key={index} className="bg-gray-900 border-gray-700 overflow-hidden hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h4 className="font-semibold text-white">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section 1 */}
      <section className="py-12 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <Button className="bg-black text-white px-8 py-3 rounded-none border-2 border-white hover:bg-white hover:text-black">
              ទិញទំនិញមុន
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products1.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Section 2 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-8">
            <Button className="bg-black text-white px-8 py-3 rounded-none border-2 border-white hover:bg-white hover:text-black">
              ទិញទំនិញមុន
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products2.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Section 3 - ការបញ្ញូលគ្រឿង */}
      <section className="py-12 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">ការបញ្ញូលគ្រឿង</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products3.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-black text-white px-8 py-3 rounded-none border-2 border-white hover:bg-white hover:text-black">
              ទិញទំនិញមុន
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section 4 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products4.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-black text-white px-8 py-3 rounded-none border-2 border-white hover:bg-white hover:text-black">
              ទិញទំនិញមុន
            </Button>
          </div>
        </div>
      </section>

      {/* Product Section 5 - អ្វីដែលអ្នកអាចទិញបាន */}
      <section className="py-12 px-4 bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">អ្វីដែលអ្នកអាចទិញបាន</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products5.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Section 6 */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products6.map((product, index) => (
              <ProductCard key={index} product={product} index={index} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button className="bg-black text-white px-8 py-3 rounded-none border-2 border-white hover:bg-white hover:text-black">
              ទិញទំនិញមុន
            </Button>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">ប្រម្រុត្រ់តម្រុយសមសប្យងកំណើប់</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
            {[
              "https://ext.same-assets.com/2047959265/707863728.webp",
              "https://ext.same-assets.com/2047959265/2558006471.webp",
              "https://ext.same-assets.com/2047959265/995701074.webp",
              "https://ext.same-assets.com/2047959265/2478436026.webp",
              "https://ext.same-assets.com/2047959265/4156418526.webp",
              "https://ext.same-assets.com/2047959265/790643306.webp",
              "https://ext.same-assets.com/2047959265/3409414525.webp",
              "https://ext.same-assets.com/2047959265/1479791076.webp",
              "https://ext.same-assets.com/2047959265/509867249.webp"
            ].map((logo, index) => (
              <div key={index} className="bg-white p-4 rounded-lg flex items-center justify-center">
                <Image
                  src={logo}
                  alt={`Brand ${index + 1}`}
                  width={80}
                  height={60}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button className="bg-black text-white px-8 py-3 rounded-none border-2 border-white hover:bg-white hover:text-black">
              ទិញទំនិញមុន
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">Computer Accessories Store</span>
            </div>
            <p className="text-gray-400 text-sm">
              Computer Accessories 🖥️🔥 We offer range of quality products and Good Service
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">ទំនាក់ទំនង</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>អ្វីនិពេរិនីមទិ</li>
              <li>លេខ រំនិចពីនូបី</li>
              <li>អិរីត៍តំគ្វីប</li>
              <li>បុណ</li>
              <li>ពំនេចម្មណកូកាលមិនែយ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">ការម្បោរុតត់តំលេ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Telegram</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">ម្តាកាលបត់បត់តំលេ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>016 805 828</li>
              <li>keyzstore99@gmail.com</li>
              <li>ឈ្មងល្វេប អះបរ្ណា ច្រាំរុល</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            អម្រុទ្រុ © 2025 រម្នៈ Keyz Store អម្រុទ្រុស្វូភីរុល។
          </p>
          <p className="text-gray-400 text-sm mt-2">
            ម្រុច្រុសាកលត្រេ: សិតពេរ្កេបរ្ល Krubkrong
          </p>
        </div>
      </footer>
    </div>
  );
}
