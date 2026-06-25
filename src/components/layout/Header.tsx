import { useState } from 'react';
import Logo from '../ui/Logo';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-slate-800 text-white transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
                <a href="#" className="flex items-center space-x-3 group">
                    <Logo className="w-20 h-auto group-hover:scale-105 transition-transform duration-300" />
                    <div>
                        <span className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-brand-accent bg-clip-text text-transparent">АВТО КЛІНІКА</span>
                        <span className="block text-[10px] tracking-widest text-slate-400 uppercase font-semibold">Вище Технічне Обслуговування</span>
                    </div>
                </a>

                <div className="hidden md:flex items-center space-x-8">
                    <nav className="flex items-center space-x-6 text-sm font-medium text-slate-300">
                        <a href="#services" className="hover:text-brand-accent transition-colors">Послуги</a>
                        <a href="#advantages" className="hover:text-brand-accent transition-colors">Переваги</a>
                        <a href="#payment" className="hover:text-brand-accent transition-colors">Оплата</a>
                        <a href="#contacts" className="hover:text-brand-accent transition-colors">Контакти</a>
                    </nav>
                    <div className="flex items-center space-x-3 border-l border-slate-700 pl-6">
                        <a href="tel:+380985232545" className="flex items-center space-x-2 text-sm font-semibold text-white hover:text-brand-accent transition-colors">
                            <i className="fa-solid fa-phone text-brand-accent text-xs"></i>
                            <span>(098) 52 32 545</span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center space-x-4 md:hidden">
                    <a href="tel:+380985232545" className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-purple text-white hover:bg-brand-accent transition-colors shadow-md">
                        <i className="fa-solid fa-phone"></i>
                    </a>
                    <button 
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                        className="text-slate-400 hover:text-white focus:outline-none"
                    >
                        <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-2xl`}></i>
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-brand-dark border-b border-slate-800 px-4 py-6 space-y-4">
                    <a href="#services" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">Послуги</a>
                    <a href="#advantages" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">Переваги</a>
                    <a href="#payment" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">Оплата</a>
                    <a href="#contacts" onClick={() => setIsMobileMenuOpen(false)} className="block text-slate-300 hover:text-white font-medium">Контакти</a>
                    <div className="pt-4 border-t border-slate-800 space-y-3">
                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Швидкий зв'язок</p>
                        <a href="tel:+380985232545" className="flex items-center space-x-3 text-slate-200">
                            <i className="fa-solid fa-user-gear text-brand-purple"></i>
                            <span>Ростислав (механік): (098) 52 32 545</span>
                        </a>
                        <a href="tel:+380974962225" className="flex items-center space-x-3 text-slate-200">
                            <i className="fa-solid fa-bolt text-yellow-400"></i>
                            <span>Павло (електрик): (097) 496 22 25</span>
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
