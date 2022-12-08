import React from 'react';
import { Modal as AntModal, ModalProps } from 'antd';

interface MyModalProps extends ModalProps {
  children: React.ReactNode;
  onOk: () => void;
  onCancel: () => void;
  isModalOpen: boolean;
  title: string;
}

const Modal = ({ children, onCancel, onOk, isModalOpen, title, ...props }: MyModalProps) => {
  const handleOk = () => {
    onOk();
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <AntModal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} {...props}>
      {children}
    </AntModal>
  );
};

export default Modal;
