import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'

const MembershipPage = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  
  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      description: 'Perfect for casual viewers',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: [
        { text: 'Stream on one device', included: true },
        { text: 'HD quality streaming', included: true },
        { text: 'Ad-free viewing', included: true },
        { text: '7-day content delay', included: false },
        { text: 'Premium exclusive content', included: false },
        { text: '4K HDR quality', included: false },
        { text: 'Download for offline viewing', included: false },
      ],
      popular: false,
      color: 'from-primary-600 to-primary-700',
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Our most popular plan',
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
      features: [
        { text: 'Stream on three devices', included: true },
        { text: 'HD quality streaming', included: true },
        { text: 'Ad-free viewing', included: true },
        { text: 'No content delay', included: true },
        { text: 'Premium exclusive content', included: true },
        { text: '4K HDR quality', included: true },
        { text: 'Download for offline viewing', included: false },
      ],
      popular: true,
      color: 'from-accent-600 to-accent-700',
    },
    {
      id: 'ultimate',
      name: 'Ultimate',
      description: 'Everything we offer',
      monthlyPrice: 19.99,
      yearlyPrice: 199.99,
      features: [
        { text: 'Stream on five devices', included: true },
        { text: 'HD quality streaming', included: true },
        { text: 'Ad-free viewing', included: true },
        { text: 'No content delay', included: true },
        { text: 'Premium exclusive content', included: true },
        { text: '4K HDR quality', included: true },
        { text: 'Download for offline viewing', included: true },
      ],
      popular: false,
      color: 'from-secondary-600 to-secondary-700',
    },
  ]
  
  // Calculate yearly savings
  const getSavings = (plan) => {
    const monthlyCost = plan.monthlyPrice * 12
    const yearlyCost = plan.yearlyPrice
    const savings = ((monthlyCost - yearlyCost) / monthlyCost) * 100
    return Math.round(savings)
  }

  return (
    <div className="pt-24 pb-16 bg-dark-200">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose Your Membership Plan
          </h1>
          <p className="text-slate-300 text-lg">
            Get full access to our premium content with the plan that works best for you.
            Cancel anytime.
          </p>
        </div>
        
        {/* Billing switch */}
        <div className="flex justify-center mb-12">
          <div className="bg-dark-100 p-1 rounded-full flex items-center">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all ${
                billingPeriod === 'monthly'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Monthly
            </button>
            
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`py-2 px-6 rounded-full text-sm font-medium transition-all flex items-center ${
                billingPeriod === 'yearly'
                  ? 'bg-accent-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Yearly
              <span className="ml-2 bg-accent-700 text-white text-xs px-2 py-0.5 rounded-full">
                Save up to 16%
              </span>
            </button>
          </div>
        </div>
        
        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: plans.indexOf(plan) * 0.1 }}
              className={`bg-dark-100 rounded-xl overflow-hidden ${
                plan.popular ? 'border-2 border-accent-500 shadow-xl relative' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0">
                  <div className="bg-accent-600 text-white text-sm font-medium py-1 text-center">
                    MOST POPULAR
                  </div>
                </div>
              )}
              
              <div className={`bg-gradient-to-r ${plan.color} p-6 ${plan.popular ? 'pt-8' : ''}`}>
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-white text-opacity-90 mb-4">{plan.description}</p>
                
                <div className="flex items-end">
                  <span className="text-3xl font-bold text-white">
                    ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                  </span>
                  <span className="text-white text-opacity-80 ml-2 mb-1">
                    /{billingPeriod === 'monthly' ? 'month' : 'year'}
                  </span>
                </div>
                
                {billingPeriod === 'yearly' && (
                  <div className="mt-2 text-white">
                    <span className="text-white text-opacity-90 text-sm">
                      Save {getSavings(plan)}% with yearly billing
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <ul className="space-y-4 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      {feature.included ? (
                        <span className="text-success-500 mr-3 mt-0.5">
                          <FiCheck size={18} />
                        </span>
                      ) : (
                        <span className="text-slate-500 mr-3 mt-0.5">
                          <FiX size={18} />
                        </span>
                      )}
                      <span className={feature.included ? 'text-white' : 'text-slate-500'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular 
                      ? 'bg-accent-600 hover:bg-accent-700 text-white' 
                      : 'bg-dark-200 hover:bg-slate-800 text-white'
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* FAQ */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-dark-100 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                Can I cancel my subscription anytime?
              </h3>
              <p className="text-slate-300">
                Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access until the end of your billing period.
              </p>
            </div>
            
            <div className="bg-dark-100 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                What happens after my free trial?
              </h3>
              <p className="text-slate-300">
                After your free trial period, your account will automatically be charged for the subscription plan you selected, unless you cancel before the trial ends.
              </p>
            </div>
            
            <div className="bg-dark-100 rounded-lg p-6">
              <h3 className="text-lg font-medium text-white mb-2">
                Can I switch between plans?
              </h3>
              <p className="text-slate-300">
                Yes, you can switch between plans at any time. If you upgrade, the new plan will be effective immediately. If you downgrade, the new plan will take effect at the start of your next billing cycle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembershipPage