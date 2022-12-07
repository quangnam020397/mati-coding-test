import { Card as CardAntd } from 'antd';
import { CardProps as CardPropsAntd } from 'antd/es/card';
import styles from './styles.module.scss';

export interface CardProps extends CardPropsAntd {
  children: React.ReactNode;
}
function Card({
  children, title, className, ...props
}: CardProps) {
  return (
    <CardAntd
      className={`${title ? styles.card__with__title : styles.card__non__title} ${className}`}
      title={title}
      {...props}
    >
      {children}
    </CardAntd>
  );
}

export default Card;
