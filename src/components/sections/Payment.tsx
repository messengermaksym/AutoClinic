export default function Payment() {
    return (
        <section id="payment" className="py-16 bg-gradient-to-r from-brand-deep to-brand-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <div className="container mx-auto px-4 text-center relative z-10 space-y-6 max-w-3xl">
                <div className="w-16 h-16 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-3xl mx-auto">
                    <i className="fa-solid fa-credit-card"></i>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                    Можливий безготівковий розрахунок
                </h2>
                <p className="text-slate-300 font-light text-base sm:text-lg">
                    Ми цінуємо ваш час та комфорт. Співпрацюємо як з фізичними особами, так і з корпоративними клієнтами, надаючи повний пакет офіційних документів для бухгалтерської звітності.
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-slate-400">
                    <span><i className="fa-solid fa-money-bill-wave text-emerald-400 mr-2"></i>Готівка</span>
                    <span><i className="fa-solid fa-money-check-dollar text-brand-accent mr-2"></i>Оплата на р/р</span>
                    <span><i className="fa-solid fa-credit-card text-purple-400 mr-2"></i>Картки будь-яких банків</span>
                </div>
            </div>
        </section>
    );
}
