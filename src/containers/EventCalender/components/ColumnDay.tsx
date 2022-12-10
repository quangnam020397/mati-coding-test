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
import { EllipsisOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Dropdown, Tooltip } from 'antd';
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

  const items = [
    { label: 'item 1', key: 'item-1' }, // remember to pass the key prop
    { label: 'item 2', key: 'item-2' },
  ];

  const renderMenuCollection = useCallback(() => {
    return (
      <Dropdown menu={{ items }} trigger={['click']} placement="bottomRight">
        <Button>
          <EllipsisOutlined />
        </Button>
      </Dropdown>
    );
  }, []);

  const renderCollections = useCallback(
    (collection: ICollectionData) => {
      return (
        <Card
          title={
            <Tooltip title={collection.name} mouseEnterDelay={1}>
              <div className={styles.collection__header}>
                <div className={styles.collection__title}>{collection.name}</div>
                <div className={styles.collection__menu}>{renderMenuCollection()}</div>
              </div>
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
    <div>
      <div className={styles.short__day__of__week}>{formatDate(date, 'ddd')}</div>
      <div className={styles.container__day}>
        <div className={styles.title}>
          <div>{formatDate(date, DATE_TIME_FORMAT.DAY_OF_MONTH)}</div>
        </div>

        <div className={styles.content}>{collections.map((item) => renderCollections(item))}</div>

        <AddExerciseModal onCancel={handleCloseModal} isModalOpen={isOpen} />
      </div>
    </div>
  );
}

export default ColumnDay;
