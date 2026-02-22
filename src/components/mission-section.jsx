import { motion } from 'motion/react';
import { Target, Eye } from 'lucide-react';
import { useLanguage } from '../contexts/language-context';

export function MissionSection() {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-6 text-gray-900">{t('mission.title')}</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                {t('mission.desc1')}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('mission.desc2')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group">
            
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
            <div className="relative bg-gradient-to-br from-red-600 to-red-700 p-10 rounded-3xl shadow-2xl text-white">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-4xl font-bold mb-6">{t('vision.title')}</h3>
              <p className="text-lg leading-relaxed mb-4">
                {t('vision.desc1')}
              </p>
              <p className="text-lg leading-relaxed">
                {t('vision.desc2')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>);

}