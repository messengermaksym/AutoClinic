import Logo from '../ui/Logo';

interface FooterProps {
  onOpenModal: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
    return (
        <footer id="contacts" className="bg-brand-dark text-white pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-800">
                    
                    <div className="lg:col-span-5 space-y-4">
                        <div className="flex items-center space-x-3">
                            <Logo className="w-16 h-auto" />
                            <span className="text-xl font-black tracking-tight text-white">АВТО КЛІНІКА</span>
                        </div>
                        <p className="text-slate-400 text-sm font-light max-w-md">
                            Ваш локальний експерт у сфері автосервісу. Професійні інженерні рішення для безпечної та довговічної експлуатації вашого автомобіля.
                        </p>
                        <div className="pt-2">
                            <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-md">
                                <i className="fa-solid fa-clock mr-1.5 text-brand-accent"></i> Пн - Сб: 09:00 - 18:00 (уточнюйте за телефоном)
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Прямі контакти майстрів</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <span className="block text-xs text-slate-500">Ремонт ходової, двигунів, CVT/МКПП:</span>
                                <a href="tel:+380985232545" className="text-white hover:text-brand-accent font-semibold transition-colors flex items-center gap-2 mt-0.5">
                                    <i className="fa-solid fa-phone text-xs text-brand-purple"></i> Ростислав: (098) 52 32 545
                                </a>
                            </li>
                            <li>
                                <span className="block text-xs text-slate-500">Комп'ютерна діагностика, електрика, клімат:</span>
                                <a href="tel:+380974962225" className="text-white hover:text-brand-accent font-semibold transition-colors flex items-center gap-2 mt-0.5">
                                    <i className="fa-solid fa-phone text-xs text-yellow-400"></i> Павло: (097) 496 22 25
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">Швидка дія</h3>
                        <p className="text-xs text-slate-400">Залиште запит, і ми передзвонимо вам найближчим часом.</p>
                        <button onClick={onOpenModal} className="w-full py-3 bg-brand-purple hover:bg-brand-accent text-white font-bold rounded-xl text-sm transition-all shadow-md">
                            Записатися на ремонт онлайн
                        </button>
                    </div>
                </div>

                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>&copy; 2026 Авто Клініка (ВТО Клініка). Всі права захищені. Створено з турботою про ваше авто.</p>
                    <a href="#" className="w-9 h-9 bg-slate-800 hover:bg-slate-700 text-white rounded-full flex items-center justify-center transition-colors">
                        <i className="fa-solid fa-arrow-up"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
