// Стилевой файл импортируется в диспетчере стилей

const MainTitle = ({ tag, text, className }) => {
  const Tag = tag || 'h1';

  return (
    <Tag className={`main-title ${className}`}>{text}</Tag>
  );
};

export default MainTitle;
