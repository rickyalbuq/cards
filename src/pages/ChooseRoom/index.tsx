import React, { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { createRoom } from 'store/Game.store';
import { SocketContext } from 'context/ConnectionContext';

import Modal from 'components/Modal';
import Button from 'components/Button';
import RoomCard from 'components/RoomCard';
import { Footer, VerticalSlider } from 'styles/utils';
import { createPlayerByRoom } from 'store/Player.store';
import { GetRoomsData, RedirectPage, Room } from 'types/interfaces';

type Data = Omit<GetRoomsData, 'players'>;

interface Rooms {
  payload: {
    rooms?: GetRoomsData[];
    playerId: string;
    message: string;
  };
}

const ChooseRoom = () => {
  const dispatch = useDispatch();
  const socket = useContext(SocketContext);

  const [usePayload, setUsePayload] = useState<Rooms>();
  const [redirect, setRedirect] = useState<RedirectPage>({
    state: false,
    to: ''
  });

  function handleClick(data: Room, playerId?: string) {
    dispatch(createRoom({ ...data }));
    dispatch(createPlayerByRoom({ playerId: playerId || '' }));

    setRedirect({
      state: true,
      to: `../room/${data.roomId}/player`
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
  const playerId = usePayload?.payload.playerId;
  const message = usePayload?.payload.message;

  if (redirect.state) {
    return <Navigate to={redirect.to} />;
  } else {
    return (
      <Modal
        title="Escolha a sala."
        subtitle="Escolha uma sala para entrar na partida."
      >
        <VerticalSlider maxsliderheight={302}>
          {rooms ? (
            rooms.map((room) => {
              const roomID = String(room.roomId);
              const data: Data = room;

              return (
                <RoomCard
                  key={roomID}
                  roomId={roomID}
                  players={room.players}
                  minMatches={room.minMatches}
                  createdAt={room.createdAt}
                  onClick={() => handleClick(data, playerId)}
                />
              );
            })
          ) : (
            <p>{message}</p>
          )}
        </VerticalSlider>
        <Footer>
          <Button type="ghost" toGo="/" label="Voltar" />
        </Footer>
      </Modal>
    );
  }
};

export default ChooseRoom;
