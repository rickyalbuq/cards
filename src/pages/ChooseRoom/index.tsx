import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createRoom, Game } from 'store/Game.store';
import { SocketContext } from 'context/ConnectionContext';

import Modal from 'components/Modal';
import Button from 'components/Button';
import RoomCard from 'components/RoomCard';
import { Footer, VerticalSlider } from 'styles/utils';

interface GameList extends Game {
  players: number;
}

type Data = Omit<GameList, 'players'>;

interface GetRoomsData {
  payload: {
    rooms?: GameList[];
    message: string;
  };
}

interface RedirectPage {
  state: boolean;
  to: string;
}

const ChooseRoom = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const [usePayload, setUsePayload] = useState<GetRoomsData>();
  const [redirect, setRedirect] = useState<RedirectPage>({
    state: false,
    to: ''
  });

  function handleClick(data: Game) {
    dispatch(createRoom({ ...data }));

    setRedirect({
      state: true,
      to: `../room/${data.room}/player`
    });
  }

  useEffect(() => {
    socket.emit('getRooms');
    socket.on('getRooms', (data: string) => setUsePayload(JSON.parse(data)));

    return () => {
      socket.off('getRooms');
    };
  }, [socket]);

  const rooms = usePayload?.payload.rooms;
  const message = usePayload?.payload.message;

  if (redirect.state) {
    return <Navigate to={redirect.to} />;
  } else {
    return (
      <Modal
        title="Escolha a sala."
        subtitle="Escolha uma sala para entrar na partida."
      >
        {rooms ? (
          <VerticalSlider maxsliderheight={302}>
            {rooms.map((room) => {
              const roomID = String(room.room);
              const data: Data = room;

              return (
                <RoomCard
                  key={roomID}
                  room={roomID}
                  players={room.players}
                  maxMatches={room.maxMatches}
                  createdAt={room.createdAt}
                  onClick={() => handleClick(data)}
                />
              );
            })}
          </VerticalSlider>
        ) : (
          <p>{message}</p>
        )}
        <Footer>
          <Button type="ghost" toGo="/" label="Voltar" />
        </Footer>
      </Modal>
    );
  }
};

export default ChooseRoom;
