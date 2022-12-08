import { Dayjs } from 'dayjs';
import Card from '../../../components/Card';
import DragItem from '../../../components/DragItem';
import { DATE_TIME_FORMAT } from '../../../constants';
import { formatDate } from '../../../utils';
import styles from './styles.module.scss';
import useDragDrop from '../../../hooks/useDragDrop';
import { ICollectionData } from '../../../interfaces';
import { useCallback, useState } from 'react';
import Button from '../../../components/common/Button';
import { PlusCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import ExerciseCard from './ExerciseCard';
import AddExerciseModal from './AddExerciseModal';

export interface ColumnDayProps {
  date: Dayjs;
  collections: ICollectionData[];
  handler: ReturnType<typeof useDragDrop>;
}

export interface IData {
  id: number;
  title: string;
  date: string;
}

function ColumnDay({ date, collections, handler }: ColumnDayProps) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    handleDragStart,
    handleDragOver,
    handleDrop,
    handleDragEnter,
    handleDragLeave,
    handleDragEnd,
    handleDragOverCard,
    handleDropToCard,
  } = handler;

  const handleAddExercise = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);



  const renderCollections = useCallback(
    (collection: ICollectionData) => {
      return (
        <Card
          title={
            <Tooltip title={collection.name} mouseEnterDelay={1}>
              <div className={styles.collection__title}>{collection.name}</div>
            </Tooltip>
          }
          headStyle={{ padding: 0 }}
          className="mb-4"
          onDragOver={(e) => handleDragOverCard(e, collection)}
          onDrop={(e) => handleDropToCard(e, collection)}
          key={collection.id}
        >
          {collection.items.map((item, index) => (
            <DragItem
              onDragStart={(e) => handleDragStart(index, collection.id)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop()}
              onDragEnter={() => handleDragEnter(index)}
              onDragLeave={handleDragLeave}
              onDragEnd={handleDragEnd}
              key={`dragItem__${collection.id}__${item?.id}`}
              value={item}
            >
              <ExerciseCard {...item} />
            </DragItem>
          ))}
          <div className="flex justify-end pb-2">
            <Tooltip title="add item" mouseEnterDelay={1}>
              <Button
                type="link"
                onClick={handleAddExercise}
                className="justify-center"
                icon={<PlusCircleOutlined />}
              ></Button>
            </Tooltip>
          </div>
        </Card>
      );
    },
    [
      collections,
      handleDragStart,
      handleDragOver,
      handleDrop,
      handleDragEnter,
      handleDragLeave,
      handleDragEnd,
      handleDragOverCard,
    ],
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {/* <div>{formatDate(date, DATE_TIME_FORMAT.NAME_OF_DAY_OF_WEEK)}</div> */}
        <div>{formatDate(date, DATE_TIME_FORMAT.DAY_OF_MONTH)}</div>
      </div>

      <div className={styles.content}>{collections.map((item) => renderCollections(item))}</div>

      <AddExerciseModal onCancel={handleCloseModal} isModalOpen={isOpen} />
    </div>
  );
}

export default ColumnDay;
