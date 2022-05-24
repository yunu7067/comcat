import {addRoom, BoradcastRoom, currentBoradcastRooms} from '@services/Broadcast';
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse<BoradcastRoom[]>) {
  addRoom();

  res.redirect('/');
}
