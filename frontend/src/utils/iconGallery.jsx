import { FaCircleUser, FaRobot, FaBroom, FaPaperPlane } from 'react-icons/fa6';

const iconGallery = {
    user: (color, size, onClick) => <FaCircleUser fill={color} size={size} onClick={onClick} />,
    robot: (color, size, onClick) => <FaRobot fill={color} size={size} onClick={onClick} />,
    broom: (color, size, onClick) => <FaBroom fill={color} size={size} onClick={onClick} />,
    send: (color, size, onClick) => <FaPaperPlane fill={color} size={size} onClick={onClick} />,
};

export const renderIcon = ({ name, color, size, onClick }) => iconGallery[name](color, size, onClick);
