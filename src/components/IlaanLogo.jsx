import logoImage from '../assets/logo.png';

const IlaanLogo = ({ isDark }) => (
    <img
        src={logoImage}
        alt="Ilaan Logo"
        className="h-10 md:h-16 w-auto object-contain transition-all duration-300"
        style={{
            filter: isDark
                ? 'brightness(0) invert(1)'
                : 'brightness(0) invert(0)',
        }}
    />
);

export default IlaanLogo;