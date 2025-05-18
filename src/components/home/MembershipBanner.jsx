import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiCheck } from 'react-icons/fi'

const MembershipBanner = () => {
  const benefits = [
    'Unlimited access to all premium content',
    'Ad-free viewing experience',
    'Stream on multiple devices',
    'HD & 4K streaming quality',
  ]

  return (
    <section className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 to-accent-900 opacity-90"></div>
      
      {/* Radial effect */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-radial from-secondary-500/20 via-transparent to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="px-4 sm:px-0"
          >
            <span className="text-accent-300 font-medium mb-2 block text-sm sm:text-base">PREMIUM ACCESS</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Become a Member Today
            </h2>
            
            <p className="text-base sm:text-lg text-white text-opacity-90 mb-6 sm:mb-8">
              Get unlimited access to our entire library of premium content with exclusive benefits.
            </p>
            
            <ul className="space-y-3 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-white text-sm sm:text-base"
                >
                  <span className="flex items-center justify-center bg-accent-600 rounded-full w-5 h-5 mr-3 flex-shrink-0">
                    <FiCheck size={12} />
                  </span>
                  {benefit}
                </motion.li>
              ))}
            </ul>
            
            <Link 
              to="/membership" 
              className="btn-primary py-3 px-6 sm:px-8 text-sm sm:text-base w-full sm:w-auto text-center"
            >
              View Membership Options
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative px-4 sm:px-0"
          >
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.pexels.com/photos/7915357/pexels-photo-7915357.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Premium content preview" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-300 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <div className="bg-accent-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium inline-block mb-2">
                  PREMIUM
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Exclusive Content Access</h3>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500 rounded-full blur-3xl opacity-40"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MembershipBanner