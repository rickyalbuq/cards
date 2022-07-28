import React, { MouseEventHandler } from 'react';
import { calcMatchDuration, padTo2Digits } from 'utils/date';
import { FiClock, FiHash, FiRepeat, FiUser } from 'react-icons/fi';
import * as S from './styles';

interface Props {
  room: string;
  players: number;
  maxMatches: number;
  createdAt: string;
  onClick: MouseEventHandler;
}

const RoomCard: React.FC<Props> = ({
  room,
  players,
  maxMatches,
  createdAt,
  onClick
}) => {
  return (
    <S.Wrapper onClick={onClick}>
      <S.InnerWrapper>
        <p>
          <FiHash />
          {room}
        </p>
        <p>
          <FiUser />
          {players}/4
        </p>
      </S.InnerWrapper>
      <S.InnerWrapper>
        <p>
          <FiRepeat />
          {padTo2Digits(maxMatches)} Rodadas
        </p>
        <p>
          <FiClock />
          {calcMatchDuration(createdAt)}
        </p>
      </S.InnerWrapper>
    </S.Wrapper>
  );
};

export default RoomCard;
