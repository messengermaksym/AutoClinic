export default function Advantages() {
    return (
        <section id="advantages" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
                        Чому автовласники обирають <span className="text-brand-purple">ВТО Клініку</span>?
                    </h2>
                    <div className="w-16 h-1 bg-brand-purple mx-auto rounded-full"></div>
                    <p className="text-slate-600 font-light">
                        Ми поєднали багаторічний досвід майстрів із сучасним діагностичним обладнанням, щоб забезпечити бездоганний результат.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 rounded-2xl bg-brand-light border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                            <i className="fa-solid fa-laptop-code"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Високоточна діагностика</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Використовуємо передові сканери для зчитування помилок усіх систем автомобіля. Знаходимо точну причину несправності без зайвих витрат часу.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-brand-light border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                            <i className="fa-solid fa-user-shield"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Вузькопрофільні експерти</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Вашим автомобілем займаються кваліфікований механік та дипломований електрик. Кожен є абсолютним майстром у своїй сфері.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl bg-brand-light border border-slate-100 hover:shadow-xl transition-all duration-300 group">
                        <div className="w-14 h-14 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center text-2xl font-bold mb-6 group-hover:bg-brand-purple group-hover:text-white transition-all duration-300">
                            <i className="fa-solid fa-receipt"></i>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark mb-3">Прозорість та гнучкість</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            Усі роботи та запчастини узгоджуються до початку ремонту. Доступний безготівковий розрахунок та надання документів для підприємств.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
