const SectionTitle = ({ title }) => (
    <div className="flex items-center gap-4 my-6">
        <h3 className="text-lg font-semibold text-white whitespace-nowrap">{title}</h3>
        <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
    </div>
);

export default SectionTitle;