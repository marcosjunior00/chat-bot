import { FaCircleUser, FaRobot } from 'react-icons/fa6';

const iconGallery = {
    user: (color, size, onClick) => <FaCircleUser fill={color} size={size} onClick={onClick} />,
    robot: (color, size, onClick) => <FaRobot fill={color} size={size} onClick={onClick} />,
};

const renderIcon = ({ name, color, size, onClick }) => iconGallery[name](color, size, onClick);

export default renderIcon;