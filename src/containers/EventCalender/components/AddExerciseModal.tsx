import React, { useCallback } from 'react';
import Button from '../../../components/common/Button';
import Modal from '../../../components/Modal';

export interface AddExerciseModalProps {
  isModalOpen: boolean;
  onCancel: () => void;
}

const AddExerciseModal = ({ isModalOpen, onCancel }: AddExerciseModalProps) => {
  const handleSubmit = useCallback(() => {
    console.log('submit');
    onCancel();
  }, []);

  const handleCancel = useCallback(() => {
    console.log('cancel');
    onCancel();
  }, []);

  return (
    <Modal
      title="Add Exercise"
      isModalOpen={isModalOpen}
      onCancel={handleCancel}
      onOk={handleSubmit}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Return
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Submit
        </Button>,
      ]}
    >
      <div> this modal for add Exercise and then call api to create a Exercise in the collection</div>
    </Modal>
  );
};

export default AddExerciseModal;
