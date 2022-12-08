import { Tooltip } from 'antd';
import { IItemData } from '../../../interfaces';
import styles from './styles.module.scss';

export interface ExerciseCardProps extends IItemData {}

const ExerciseCard = (props: ExerciseCardProps) => {
  return (
    <>
      <Tooltip title={props.name} mouseEnterDelay={1}>
        <h4 className={styles.exercise__title}>{props.name}</h4>{' '}
      </Tooltip>

      <div className={styles.exercise__content}>
        <div>{`${props.quantity}x`}</div>

        <div>{props.description}</div>
      </div>
    </>
  );
};

export default ExerciseCard;
