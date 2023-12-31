import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { useRecoilValue } from "recoil";
import darkModeAtom from "@/app/store/darkModeAtom";

type ConfirmModalProps = {
  icon?: React.ReactNode;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  showCancelButton?: boolean; // 추가: 취소 버튼을 보여줄지 여부를 결정하는 prop
};

const ConfirmModal = ({
  icon,
  message,
  onCancel,
  onConfirm,
  showCancelButton = true, // 추가: 기본값은 true로 설정
}: ConfirmModalProps) => {
  const isDarkMode = useRecoilValue(darkModeAtom);
  return (
    <ModalWrapper>
      <ModalContent isDarkMode={isDarkMode}>
        <div>{icon}</div>
        <ModalMessage>{message}</ModalMessage>
        <ModalActions>
          <ConfirmButton>
            <Button
              type="button"
              isBorderColor={true}
              fullWidth={true}
              fullHeight={true}
              isHoverColor={true}
              onClick={onConfirm}
            >
              확인
            </Button>
          </ConfirmButton>
          {showCancelButton && ( // 추가: showCancelButton이 true인 경우에만 취소 버튼 표시
            <CancelButton>
              <Button
                type="button"
                isBgColor={true}
                fullWidth={true}
                fullHeight={true}
                isBorderColor={false}
                isHoverColor={false}
                onClick={onCancel}
              >
                취소
              </Button>
            </CancelButton>
          )}
        </ModalActions>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ConfirmModal;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
`;

const ModalContent = styled.div<{ isDarkMode: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 31rem;
  height: 19rem;
  padding: 2rem;
  background-color: ${(props) =>
    props.isDarkMode ? props.theme.lightNavy : "#fff"};
  border-radius: 1.3rem;
`;

const ModalMessage = styled.h2`
  margin-top: 1rem;
  font-size: 19px;
  font-weight: 600;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const ConfirmButton = styled.div`
  width: 7.5rem;
  margin-right: 1.8rem;
`;

const CancelButton = styled.div`
  width: 7.5rem;
`;
