import { useState, useEffect } from 'react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export default function LeadModal({ isOpen, onClose, serviceName }: LeadModalProps) {
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setIsSubmitted(false);
        } else {
            document.body.style.overflow = 'auto';
        }
        
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form processing
        setIsSubmitted(true);
    };

    return (
        <div className="fixed inset-0 z-50 bg-brand-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative animate-[fadeIn_0.2s_ease-out]">
                <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
                    <i className="fa-solid fa-xmark text-xl"></i>
                </button>
                
                {!isSubmitted ? (
                    <>
                        <div className="text-center mb-6">
                            <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center text-xl mx-auto mb-3">
                                <i className="fa-solid fa-calendar-check"></i>
                            </div>
                            <h3 className="text-xl font-bold text-brand-dark">
                                {serviceName ? `Замовити: ${serviceName}` : 'Запис на обслуговування'}
                            </h3>
                            <p className="text-sm text-slate-500 mt-1">Оберіть зручний спосіб або залиште контакти</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Ваше ім'я</label>
                                <input type="text" required placeholder="Олександр" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Номер телефону</label>
                                <input type="tel" required placeholder="+380" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple transition-all" />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">Обрана послуга / Своя тех. проблема</label>
                                <input type="text" defaultValue={serviceName} placeholder="Наприклад: Комп'ютерна діагностика" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand-purple transition-all" />
                            </div>

                            <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-brand-purple to-purple-700 text-white font-bold rounded-xl text-sm shadow-lg shadow-brand-purple/20 hover:from-brand-accent hover:to-blue-600 transition-all">
                                Підтвердити запис
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-6 space-y-3">
                        <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl mx-auto">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <h4 className="text-lg font-bold text-slate-800">Заявка прийнята!</h4>
                        <p className="text-sm text-slate-500">Майстер зв'яжеться з вами протягом декількох хвилин.</p>
                        <button onClick={onClose} className="mt-4 px-6 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-sm font-semibold transition-colors">
                            Закрити
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
