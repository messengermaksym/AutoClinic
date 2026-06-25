interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
    return (
        <section className="hero-bg relative min-h-[85vh] flex items-center text-white pt-12 pb-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60"></div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-purple/30 text-brand-accent text-xs font-semibold uppercase tracking-wider border border-brand-purple/50">
                        <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
                        Працюємо локально • Надійно • З гарантією
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                        Професійне обслуговування вашого авто в <span className="bg-gradient-to-r from-brand-accent to-purple-400 bg-clip-text text-transparent">Авто Клініці</span>
                    </h1>
                    <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
                        Повний комплекс послуг: від точної комп'ютерної діагностики до складного ремонту двигунів та коробок передач. Повернемо вашому автомобілю заводську надійність.
                    </p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 max-w-xl mx-auto lg:mx-0">
                        <div className="flex items-center space-x-2 text-slate-300 text-sm">
                            <i className="fa-solid fa-circle-check text-brand-accent"></i>
                            <span>Досвідчені майстри</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-300 text-sm">
                            <i className="fa-solid fa-circle-check text-brand-accent"></i>
                            <span>Сучасне обладнання</span>
                        </div>
                        <div className="flex items-center space-x-2 text-slate-300 text-sm col-span-2 sm:col-span-1">
                            <i className="fa-solid fa-circle-check text-brand-accent"></i>
                            <span>Безготівковий розрахунок</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                        <button onClick={onOpenModal} className="group px-8 py-4 bg-gradient-to-r from-brand-purple to-purple-700 hover:from-brand-accent hover:to-blue-600 rounded-xl font-bold shadow-lg shadow-brand-purple/20 transition-all duration-300 hover:scale-[1.03] text-center">
                            Записатися на сервіс
                            <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                        </button>
                        <a href="tel:+380985232545" className="px-8 py-4 bg-slate-800/80 hover:bg-slate-700 rounded-xl font-bold border border-slate-700 text-center transition-all">
                            <i className="fa-solid fa-phone mr-2 text-brand-accent"></i> Консультація майстра
                        </a>
                    </div>
                </div>

                <div className="lg:col-span-5">
                    <div className="glass-card p-6 sm:p-8 rounded-2xl shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-12 -right-12 w-40 h-40 bg-brand-purple/20 rounded-full blur-3xl"></div>
                        <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-3">
                            <i className="fa-solid fa-headset text-brand-accent"></i> Наші спеціалісти на зв'язку:
                        </h3>
                        
                        <div className="space-y-4">
                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-purple/50 transition-all">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Ростислав</h4>
                                        <p className="text-xs text-slate-400">Старший автомеханік, ходова, двигуни, КПП</p>
                                    </div>
                                    <span className="px-2 py-1 rounded bg-brand-purple/50 text-[10px] uppercase font-bold text-brand-accent">Механік</span>
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <a href="tel:+380985232545" className="flex-1 py-2.5 px-4 bg-brand-purple hover:bg-brand-purple/80 text-white rounded-lg text-center text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                                        <i className="fa-solid fa-phone text-xs"></i> (098) 52 32 545
                                    </a>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-purple/50 transition-all">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h4 className="font-bold text-white text-lg">Павло</h4>
                                        <p className="text-xs text-slate-400">Автоелектрик, комп'ютерна діагностика, клімат</p>
                                    </div>
                                    <span className="px-2 py-1 rounded bg-yellow-500/20 text-[10px] uppercase font-bold text-yellow-400">Електрик</span>
                                </div>
                                <div className="mt-4 flex gap-2">
                                    <a href="tel:+380974962225" className="flex-1 py-2.5 px-4 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-center text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                                        <i className="fa-solid fa-phone text-xs"></i> (097) 496 22 25
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/10 text-center">
                            <p className="text-xs text-slate-400">
                                <i className="fa-solid fa-wallet text-brand-accent mr-1"></i> Оплата карткою, готівкою або безготівковий розрахунок для бізнесу.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
