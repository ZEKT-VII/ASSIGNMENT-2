import { Routes, Route } from 'react-router'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Store from './pages/Store'
import { CartProvider } from './hooks/CartContext'
import CartDrawer from './components/CartDrawer'

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-void text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/store" element={<Store />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}

export default App
