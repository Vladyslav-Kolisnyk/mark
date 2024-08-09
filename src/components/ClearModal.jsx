import { useContext } from 'react';
import styled from 'styled-components';
import { PropTypes } from 'prop-types';
import { MarkdownInputContext } from '../context/MarkdownInputContext.jsx';

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 32px;
  background: ${(props) => props.theme.black};
  padding: 16px;
  border-radius: 4px;
  width: fit-content;

  @media screen and (max-width: 500px) {
    width: 80vw;
  }
`;

const Message = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`;

const ButtonsWrapper = styled.div`
  place-self: end;
  display: flex;
  gap: 16px;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: stretch;
    place-self: stretch;
    gap: 8px;
  }
`;

const ModalButton = styled.button`
  font-size: 1rem;
  color: ${(props) => props.theme.black10};
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background: ${(props) => props.theme.black70};
`;

const ModalButtonDanger = styled(ModalButton)`
  background: ${(props) => props.theme.danger};
`;

export default function ClearModal({ setDisplayModal }) {
  const [markdowInput, setMarkdownInput] = useContext(MarkdownInputContext);

  function clearEditor() {
    setMarkdownInput('');
  }

  return (
    <Modal>
      <Message>
        Are you sure you want to clear the editor?
      </Message>

      <ButtonsWrapper>
        <ModalButtonDanger
          onClick={() => {
            clearEditor();
            setDisplayModal(false);
          }}
        >
          Clear
        </ModalButtonDanger>

        <ModalButton
          onClick={() => setDisplayModal(false)}
        >
          Cancel
        </ModalButton>
      </ButtonsWrapper>
    </Modal>
  );
}

ClearModal.propTypes = {
  setDisplayModal: PropTypes.func,
};
