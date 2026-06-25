interface ServicesProps {
  onOpenModal: (serviceName?: string) => void;
}

export default function Services({ onOpenModal }: ServicesProps) {
    return (
        <section id="services" className="py-20 bg-slate-50 border-t border-b border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
                        Наші професійні послуги
                    </h2>
                    <div className="w-16 h-1 bg-brand-purple mx-auto rounded-full"></div>
                    <p className="text-slate-600 font-light">
                        Виконуємо широкий спектр робіт з обслуговування, ремонту та дооснащення автомобілів будь-яких марок.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between">
                        <div className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="p-3 bg-blue-50 text-blue-600 rounded-lg text-lg"><i className="fa-solid fa-computer"></i></span>
                                <h3 className="font-bold text-lg text-brand-dark">Комп'ютерна діагностика</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Глибоке сканування електронних блоків керування (ЕБУ), зчитування, аналіз та скидання кодів помилок, перевірка датчиків у реальному часі.</p>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                            <span className="text-xs font-semibold uppercase text-slate-400">Швидко та точно</span>
                            <button onClick={() => onOpenModal('Комп\'ютерна діагностика')} className="text-sm font-bold text-brand-purple hover:text-brand-accent transition-colors">Замовити</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between">
                        <div className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="p-3 bg-amber-50 text-amber-600 rounded-lg text-lg"><i className="fa-solid fa-gears"></i></span>
                                <h3 className="font-bold text-lg text-brand-dark">Ремонт ходової частини</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Діагностика підвіски, заміна амортизаторів, сайлентблоків, шарових опор, важелів, рульових тяг. Забезпечення плавності та безпеки руху.</p>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                            <span className="text-xs font-semibold uppercase text-slate-400">Гарантія безпеки</span>
                            <button onClick={() => onOpenModal('Ремонт ходової частини')} className="text-sm font-bold text-brand-purple hover:text-brand-accent transition-colors">Замовити</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between">
                        <div className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="p-3 bg-red-50 text-red-600 rounded-lg text-lg"><i className="fa-solid fa-car-battery"></i></span>
                                <h3 className="font-bold text-lg text-brand-dark">Ремонт двигунів</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Поточний та капітальний ремонт бензинових і дизельних ДВЗ, заміна ременів/ланцюгів ГРМ, усунення протікань мастила та технічних рідин.</p>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                            <span className="text-xs font-semibold uppercase text-slate-400">Будь-яка складність</span>
                            <button onClick={() => onOpenModal('Ремонт двигунів')} className="text-sm font-bold text-brand-purple hover:text-brand-accent transition-colors">Замовити</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between">
                        <div className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="p-3 bg-purple-50 text-brand-purple rounded-lg text-lg"><i className="fa-solid fa-circle-nodes"></i></span>
                                <h3 className="font-bold text-lg text-brand-dark">Ремонт CVT та МКПП</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Обслуговування та професійний ремонт механічних коробок передач та варіаторів (CVT). Заміна мастила та відновлення коректної роботи трансмісії.</p>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                            <span className="text-xs font-semibold uppercase text-slate-400">Надійні комплектуючі</span>
                            <button onClick={() => onOpenModal('Ремонт CVT та МКПП')} className="text-sm font-bold text-brand-purple hover:text-brand-accent transition-colors">Замовити</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between">
                        <div className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="p-3 bg-yellow-50 text-yellow-600 rounded-lg text-lg"><i className="fa-solid fa-bolt"></i></span>
                                <h3 className="font-bold text-lg text-brand-dark">Ремонт автоелектрики</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Пошук та усунення коротких замикань, ремонт проводки, стартерів, генераторів, блоків запобіжників та іншого електронного обладнання.</p>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                            <span className="text-xs font-semibold uppercase text-slate-400">Робота експерта</span>
                            <button onClick={() => onOpenModal('Ремонт автоелектрики')} className="text-sm font-bold text-brand-purple hover:text-brand-accent transition-colors">Замовити</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between">
                        <div className="p-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <span className="p-3 bg-teal-50 text-teal-600 rounded-lg text-lg"><i className="fa-solid fa-snowflake"></i></span>
                                <h3 className="font-bold text-lg text-brand-dark">Заправка кондиціонерів</h3>
                            </div>
                            <p className="text-slate-600 text-sm">Вакуумування системи, перевірка герметичності, заправка якісним фреоном та додавання спеціального мастила для компресора.</p>
                        </div>
                        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                            <span className="text-xs font-semibold uppercase text-slate-400">Комфорт у спеку</span>
                            <button onClick={() => onOpenModal('Заправка кондиціонерів')} className="text-sm font-bold text-brand-purple hover:text-brand-accent transition-colors">Замовити</button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow flex flex-col justify-between md:col-span-2 lg:col-span-3">
                        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                            <div className="md:col-span-8 space-y-3">
                                <div className="flex items-center space-x-3">
                                    <span className="p-3 bg-indigo-50 text-indigo-600 rounded-lg text-lg"><i className="fa-solid fa-shield-halved"></i></span>
                                    <h3 className="font-bold text-xl text-brand-dark">Додаткове дооснащення авто</h3>
                                </div>
                                <p className="text-slate-600 text-sm max-w-2xl">
                                    Професійне встановлення надійних охоронних систем та сучасних систем допомоги при паркуванні. Модернізація головного світла фар автомобіля:
                                </p>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    <span className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-700"><i className="fa-solid fa-bell text-brand-purple mr-1"></i> Сигналізації</span>
                                    <span className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-700"><i className="fa-solid fa-radar text-brand-purple mr-1"></i> Парктроніки</span>
                                    <span className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-700"><i className="fa-solid fa-lightbulb text-brand-purple mr-1"></i> Ксенон</span>
                                    <span className="px-3 py-1 bg-slate-100 rounded-md text-xs font-medium text-slate-700"><i className="fa-solid fa-bolt text-brand-purple mr-1"></i> LED освітлення</span>
                                </div>
                            </div>
                            <div className="md:col-span-4 text-left md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                                <button onClick={() => onOpenModal('Встановлення дооснащення')} className="w-full md:w-auto px-6 py-3 bg-brand-dark hover:bg-brand-purple text-white rounded-xl text-sm font-bold transition-colors">
                                    Консультація щодо тюнінгу
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
