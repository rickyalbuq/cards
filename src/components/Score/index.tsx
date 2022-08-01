import React from 'react';
import * as S from './styles';

import { FiClock, FiRepeat } from 'react-icons/fi';
import { calcMatchDuration, padTo2Digits } from 'utils/date';

interface Player {
  username: string;
  victories: number;
  color: 'orange' | 'pink' | 'yellow' | 'turquoise';
}

interface Props {
  players?: Player[];
  currentMatch: number;
  createdAt: Date;
}

const Score: React.FC<Props> = ({ players, currentMatch, createdAt }) => {
  return players ? (
    <S.Wrapper>
      <S.InnerHeader>
        <p>
          <FiClock />
          {calcMatchDuration(createdAt)}
        </p>
        <p>
          <FiRepeat />
          {padTo2Digits(currentMatch)} Rodadas
        </p>
      </S.InnerHeader>
      <S.InnerWrapper>
        <h2>Ranking</h2>
        {players.map(({ username, victories, color }) => (
          <p key={username}>
            <S.UserIcon userColor={color} />
            {username} - {victories}pts
          </p>
        ))}
      </S.InnerWrapper>
    </S.Wrapper>
  ) : (
    <p>Não há competidores nessa sala</p>
  );
};

export default Score;
