import {addRoom, BoradcastRoom, currentBoradcastRooms} from '@services/Broadcast';
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<BoradcastRoom | undefined>) {
  if (req.method === 'POST') {
    const rooms = currentBoradcastRooms;
    const videoId = JSON.parse(req.body).video;
    const room = rooms.find(room => room.id === videoId);

    res.status(200).json(room);
  } else {
    res.status(404);
  }
}
