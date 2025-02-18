import Link from "next/link";
import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import Newsletter from "./newsletter";

export default function Footer() {
  return (
    <footer className="bg-[#3B4247] text-white py-16 ">
      <div className="container">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="space-y-1">
              <div className="text-lg">The</div>
              <div>
                <span className="text-primary">Green</span> Cloister
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Welcome to [College Name]'s Student-Run Environmental Publication,
              a platform created and managed by students passionate about
              protecting our planet. Our mission is to raise
            </p>
            <div className="flex gap-4 text-gray-400">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Youtube size={20} />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Navigate Section */}
          <div className="space-y-4">
            <h3 className="text-primary font-medium tracking-wide">NAVIGATE</h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                HOME
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                ARTICLES
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                ABOUT US
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                CONTACT US
              </Link>
            </nav>
          </div>

          {/* Recent Posts Section */}
          <div className="space-y-4">
            <h3 className="text-primary font-medium tracking-wide">
              RECENT POSTS
            </h3>
            <nav className="space-y-2">
              <Link
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Jeremy Clarkson: Diddy Squat the Environment?
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                The Environmental Impact of Common Land in the UK
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                The Paris Olympics: How Sustainable Were They?
              </Link>
              <Link
                href="#"
                className="block text-gray-300 hover:text-primary transition-colors"
              >
                Why Nuclear Power Hasn't Taken Over the Energy Industry... Yet
              </Link>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-primary font-medium tracking-wide">CONTACT</h3>
            <div className="space-y-2 text-gray-300">
              <p>Company address</p>
              <p>e-mail: example@gmail.com</p>
              <p>Contact: 4654444</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
