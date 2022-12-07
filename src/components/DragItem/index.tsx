import React, { useRef, useState } from 'react';
import Card from '../Card';
import styles from './styles.module.scss';

export interface DragItemProps {
  children: React.ReactNode;
  onDragStart: (e: React.DragEvent<HTMLDivElement>) => void | undefined;
  onDragEnd: (e: React.DragEvent<HTMLDivElement>) => void | undefined;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void | undefined;
  onDragEnter: (e: React.DragEvent<HTMLDivElement>) => void | undefined;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void | undefined;
  onDragLeave: (e: React.DragEvent<HTMLDivElement>) => void | undefined;
  value: any;
}

function DragItem({
  children,
  onDragEnd,
  onDragStart,
  onDrop,
  onDragOver,
  onDragEnter,
  onDragLeave,
  value,
}: DragItemProps) {
  const [dragging, setDragging] = useState(false);
  // const dragItemRef = useRef<HTMLDivElement>(value);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(true);
    e.dataTransfer.setData('text/plain', '');
    if (onDragStart) {
      onDragStart(e);
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(false);
    if (onDragEnd) {
      onDragEnd(e);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (onDrop) {
      onDrop(e);
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDragEnter) {
      onDragEnter(e);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (onDragOver) {
      onDragOver(e);
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (onDragLeave) {
      onDragLeave(e);
    }
  };

  return (
    <Card
      // ref={dragItemRef}
      className={`${styles.dragItem} ${dragging ? styles.dragging : ''}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {children}
    </Card>
  );
}

export default DragItem;
